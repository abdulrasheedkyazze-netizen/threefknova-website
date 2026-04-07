import nodemailer from "nodemailer";

function toBool(value?: string) {
  return String(value).toLowerCase() === "true";
}

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: toBool(process.env.SMTP_SECURE),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
});

export async function sendContactEmail(params: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}) {
  const { name, email, phone, company, subject, message } = params;

  const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER || "info@threefknova.com";
  const mailTo = process.env.MAIL_TO || "sales@threefknova.com";
  const mailCc = process.env.MAIL_CC || "";

  const safeSubject = subject?.trim() || "New Website Inquiry";

  const text = `
New website inquiry received

Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Company / School: ${company || "-"}
Subject: ${safeSubject}

Message:
${message}
  `.trim();

  return transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    cc: mailCc || undefined,
    replyTo: email,
    subject: `[ThreeFk Nova Website] ${safeSubject}`,
    text,
  });
}
