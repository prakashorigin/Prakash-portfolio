import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass || emailUser === "your-email@gmail.com") {
      // In development, just log the message
      console.log("Contact form submission:", { name, email, subject, message });
      return NextResponse.json({
        success: true,
        message: "Message received (email not configured, logged to console)",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${emailUser}>`,
      replyTo: email,
      to: emailUser,
      subject: `Portfolio Contact: ${subject || "New Message"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #6d28d9;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
