import React from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { senderEmail, message } = await request.json();

  if (!senderEmail || typeof senderEmail !== "string" || senderEmail.length > 500) {
    return NextResponse.json({ error: "Invalid sender email" }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.length > 5000) {
    return NextResponse.json({ error: "Invalid message" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <work-proposal@contact.hreidarhallgrims.com>",
      to: "hreidar@hreidarhallgrims.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 },
    );
  }
}
