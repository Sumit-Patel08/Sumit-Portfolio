import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { FieldValue } from "firebase-admin/firestore";
import { getDb } from "../../server/firebase";

const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key");

const NOTIFY_TO = process.env.CONTACT_NOTIFY_TO || "sumit.patel.kach@gmail.com";
const COLLECTION = process.env.FIREBASE_CONTACT_COLLECTION || "contactMessages";

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; subject: string; message: string }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("Name, email, and message are required.");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const subject = data.subject || "No Subject";

    // The archive copy and the email notification are independent: a storage
    // outage must never stop the message from reaching the inbox.
    let savedToDb = false;
    let emailSent = false;

    const db = getDb();
    if (db) {
      try {
        await db.collection(COLLECTION).add({
          name: data.name,
          email: data.email,
          subject,
          message: data.message,
          createdAt: FieldValue.serverTimestamp(),
        });
        savedToDb = true;
      } catch (error) {
        console.error("Contact form: could not archive the message.", error);
      }
    } else {
      console.warn("Firebase credentials are not set. Skipping the archive write.");
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const { error } = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // using Resend's test domain for now
          to: NOTIFY_TO,
          replyTo: data.email,
          subject: `New Contact Message: ${subject}`,
          text: `You have received a new message from ${data.name} (${data.email}):\n\n${data.message}`,
        });
        if (error) throw new Error(`${error.name}: ${error.message}`);
        emailSent = true;
      } catch (error) {
        console.error("Contact form: could not send the email notification.", error);
      }
    } else {
      console.warn("RESEND_API_KEY is not defined. Skipping email send.");
    }

    if (!emailSent && !savedToDb) {
      throw new Error("Failed to send message. Please email me directly instead.");
    }

    return { success: true, message: "Your message has been sent successfully!" };
  });
