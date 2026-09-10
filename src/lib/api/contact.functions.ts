import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { FieldValue } from "firebase-admin/firestore";
import { getDb } from "../../server/firebase";

// Env is read per-request, not at module scope: on worker-style runtimes the
// bindings are not populated yet while modules are still evaluating.
const DEFAULT_NOTIFY_TO = "sumit.patel.kach@gmail.com";
const DEFAULT_COLLECTION = "contactMessages";

function reasonOf(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "unknown error";
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; subject: string; message: string }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("Name, email, and message are required.");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const subject = data.subject || "No Subject";
    const notifyTo = process.env.CONTACT_NOTIFY_TO || DEFAULT_NOTIFY_TO;
    const collection = process.env.FIREBASE_CONTACT_COLLECTION || DEFAULT_COLLECTION;
    const resendApiKey = process.env.RESEND_API_KEY;

    // The archive copy and the email notification are independent: a storage
    // outage must never stop the message from reaching the inbox.
    let savedToDb = false;
    let emailSent = false;
    const failures: string[] = [];

    try {
      const db = getDb();
      if (db) {
        await db.collection(collection).add({
          name: data.name,
          email: data.email,
          subject,
          message: data.message,
          createdAt: FieldValue.serverTimestamp(),
        });
        savedToDb = true;
      } else {
        failures.push("firestore: FIREBASE_SERVICE_ACCOUNT is missing or unreadable");
      }
    } catch (error) {
      console.error("Contact form: could not archive the message.", error);
      failures.push(`firestore: ${reasonOf(error)}`);
    }

    if (resendApiKey) {
      try {
        const { error } = await new Resend(resendApiKey).emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // using Resend's test domain for now
          to: notifyTo,
          replyTo: data.email,
          subject: `New Contact Message: ${subject}`,
          text: `You have received a new message from ${data.name} (${data.email}):\n\n${data.message}`,
        });
        if (error) throw new Error(`${error.name}: ${error.message}`);
        emailSent = true;
      } catch (error) {
        console.error("Contact form: could not send the email notification.", error);
        failures.push(`resend: ${reasonOf(error)}`);
      }
    } else {
      failures.push("resend: RESEND_API_KEY is not set");
    }

    if (!emailSent && !savedToDb) {
      // The reasons ride along so a production failure is diagnosable from the
      // browser instead of requiring a trip to the hosting dashboard.
      console.error("Contact form failed on every channel:", failures.join(" | "));
      throw new Error(
        `Failed to send message. Please email me directly instead. (${failures.join("; ")})`,
      );
    }

    return { success: true, message: "Your message has been sent successfully!" };
  });
