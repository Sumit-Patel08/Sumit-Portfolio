import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import connectToDatabase from "../../server/db";
import ContactMessage from "../../server/models/ContactMessage";

const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key");

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; subject: string; message: string }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("Name, email, and message are required.");
    }
    return data;
  })
  .handler(async ({ data }) => {
    try {
      // Connect to MongoDB
      await connectToDatabase();

      if (process.env.MONGODB_URI) {
        // Save to Database
        const newMsg = new ContactMessage({
          name: data.name,
          email: data.email,
          subject: data.subject || "No Subject",
          message: data.message,
        });
        await newMsg.save();
      } else {
        console.warn("MONGODB_URI is not defined. Skipping DB save.");
      }

      if (process.env.RESEND_API_KEY) {
        // Send Email Notification
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>", // using Resend's test domain for now
          to: "sumit.patel.kach@gmail.com",
          subject: `New Contact Message: ${data.subject || "No Subject"}`,
          text: `You have received a new message from ${data.name} (${data.email}):\n\n${data.message}`,
        });
      } else {
        console.warn("RESEND_API_KEY is not defined. Skipping email send.");
      }

      return { success: true, message: "Your message has been sent successfully!" };
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      throw new Error("Failed to send message. Please try again later.");
    }
  });
