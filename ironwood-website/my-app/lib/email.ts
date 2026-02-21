import nodemailer from "nodemailer";
import type { CallbackFormData } from "@/lib/validations/callback-form";

// Create SMTP transporter with SSL configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "cp65.domains.co.za",
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: process.env.SMTP_SECURE === "true" || true, // true for SSL (port 465)
  auth: {
    user: process.env.SMTP_USER || "no-reply@ironwoodbc.co.za",
    pass: process.env.SMTP_PASS || ""
  }
});

const FROM_EMAIL = process.env.FROM_EMAIL || "no-reply@ironwoodbc.co.za";
const TO_EMAIL = process.env.TO_EMAIL || "info@ironwood.co.za";

export async function sendCallbackEmail(data: CallbackFormData) {
  if (!process.env.SMTP_PASS) {
    console.warn("SMTP_PASS not set, skipping email send");
    return;
  }

  const { fullName, phone, email, clientType, service, bestTime, message } = data;

  const subject = `New Callback Request from ${fullName}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Callback Request</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1e3a5f; border-bottom: 2px solid #1e3a5f; padding-bottom: 10px;">
          New Callback Request
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold; width: 30%;">Full Name</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Phone</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Email</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Client Type</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${clientType}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Service Needed</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${service}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Best Time to Call</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${bestTime}</td>
          </tr>
          ${message ? `
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; background-color: #f8f9fa; font-weight: bold;">Message</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
          ` : ""}
        </table>

        <p style="margin-top: 30px; font-size: 12px; color: #666;">
          Submitted on ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
        </p>
      </body>
    </html>
  `;

  const text = `
New Callback Request

Full Name: ${fullName}
Phone: ${phone}
Email: ${email || "Not provided"}
Client Type: ${clientType}
Service Needed: ${service}
Best Time to Call: ${bestTime}
${message ? `Message: ${message}` : ""}

Submitted on ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: `Ironwood Business Consulting <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject,
      html,
      text,
      replyTo: email || undefined
    });

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}
