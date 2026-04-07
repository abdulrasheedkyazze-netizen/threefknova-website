import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  location?: string;
  interests?: string[];
  message?: string;
  consent?: boolean;
};

function required(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function hasInterest(interests: string[], target: string) {
  return interests.some((item) => item.toLowerCase() === target.toLowerCase());
}

function determineLeadSource(interests: string[]) {
  return hasInterest(interests, "Demo") ? "WEBSITE_DEMO" : "WEBSITE_CONTACT";
}

function determineLeadPriority(interests: string[], message: string) {
  if (hasInterest(interests, "Demo")) {
    return "HIGH";
  }

  const urgentPattern = /\b(urgent|asap|immediately|immediate|this week|deadline)\b/i;
  return urgentPattern.test(message) ? "HIGH" : "NORMAL";
}

function buildLeadPayload({
  firstName,
  lastName,
  email,
  phone,
  company,
  location,
  interests,
  message,
  consent,
  organizationSlug,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  interests: string[];
  message: string;
  consent: boolean;
  organizationSlug: string;
}) {
  return {
    organization_slug: organizationSlug,
    first_name: firstName,
    last_name: lastName,
    business_email: email,
    phone,
    company,
    location,
    message,
    consent,
    support_subscription: hasInterest(interests, "Support Subscription"),
    repository_subscription: hasInterest(interests, "Repository Subscription"),
    consulting: hasInterest(interests, "Consulting"),
    training: hasInterest(interests, "Training"),
    demo: hasInterest(interests, "Demo"),
    other: hasInterest(interests, "Other"),
    interests: interests.join(", "),
    source: determineLeadSource(interests),
    priority: determineLeadPriority(interests, message),
  };
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    const firstName = body.firstName?.trim() || "";
    const lastName = body.lastName?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "";
    const company = body.company?.trim() || "";
    const location = body.location?.trim() || "";
    const interests = Array.isArray(body.interests) ? body.interests : [];
    const message = body.message?.trim() || "";
    const consent = body.consent === true;

    if (!required(firstName) || !required(lastName) || !required(email) || !required(message)) {
      return NextResponse.json(
        { ok: false, error: "Please fill in the required fields." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { ok: false, error: "Please confirm consent to process your personal data." },
        { status: 400 }
      );
    }

    const bizSuiteLeadApiUrl =
      process.env.BIZSUITE_LEAD_API_URL ||
      "https://bizsuite.threefknova.com/clients/leads/intake/website/";
    const bizSuiteLeadToken = process.env.BIZSUITE_LEAD_TOKEN || "";
    const bizSuiteOrganizationSlug =
      process.env.BIZSUITE_ORGANIZATION_SLUG || "default-workspace";

    if (!bizSuiteLeadApiUrl || !bizSuiteLeadToken) {
      console.error("BizSuite lead integration is not configured.");
      return NextResponse.json(
        { ok: false, error: "Sales intake is not configured right now. Please try again shortly." },
        { status: 500 }
      );
    }

    const leadPayload = buildLeadPayload({
      firstName,
      lastName,
      email,
      phone,
      company,
      location,
      interests,
      message,
      consent,
      organizationSlug: bizSuiteOrganizationSlug,
    });

    const leadResponse = await fetch(bizSuiteLeadApiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Lead-Token": bizSuiteLeadToken,
      },
      body: JSON.stringify(leadPayload),
      cache: "no-store",
    });

    const leadResultText = await leadResponse.text();
    console.log("BizSuite lead status:", leadResponse.status);
    console.log("BizSuite lead body:", leadResultText);

    if (!leadResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not register your request in our sales system right now. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    let leadCode = "";
    try {
      const leadResult = JSON.parse(leadResultText) as { lead_code?: string };
      leadCode = leadResult.lead_code || "";
    } catch (parseError) {
      console.warn("Unable to parse BizSuite lead response:", parseError);
    }

    const token = process.env.ZEPTO_API_TOKEN;
    const apiUrl = process.env.ZEPTO_API_URL || "https://api.zeptomail.com/v1.1/email";
    const fromEmail = process.env.ZEPTO_FROM_EMAIL || "info@threefknova.com";
    const fromName = process.env.ZEPTO_FROM_NAME || "ThreeFk Nova Technologies";
    const salesTo = process.env.CONTACT_TO_EMAIL || "info@threefknova.com";
    const supportEmail = process.env.SUPPORT_EMAIL || "support@threefknova.com";
    const supportPhone = process.env.SUPPORT_PHONE || "+256 769 378 512";

    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeCompany = escapeHtml(company || "Not provided");
    const safeLocation = escapeHtml(location || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const interestListHtml = interests.length
      ? interests.map((item) => `<li style="margin:0 0 6px;">${escapeHtml(item)}</li>`).join("")
      : `<li style="margin:0 0 6px;">Not specified</li>`;

    const interestListText = interests.length ? interests.join(", ") : "Not specified";

    // -----------------------------
    // 1. SEND INTERNAL SALES EMAIL
    // -----------------------------
    const salesSubject = leadCode
      ? `New sales enquiry ${leadCode} from ${firstName} ${lastName}`
      : `New sales enquiry from ${firstName} ${lastName}`;

    const salesHtmlBody = `
      <div style="margin:0;padding:24px;background:#f3f7fc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
        <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dbe5f0;">
          <div style="background:linear-gradient(135deg,#0b2e59 0%,#12417d 100%);padding:28px 32px;color:#ffffff;">
            <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;opacity:0.9;">ThreeFk Nova Technologies</div>
            <h1 style="margin:10px 0 6px;font-size:28px;line-height:1.2;">New Contact Sales Submission</h1>
            <p style="margin:0;font-size:14px;line-height:1.7;color:#dbeafe;">
              A new lead has been submitted through the website contact form.
            </p>
          </div>

          <div style="padding:28px 32px;">
            <div style="display:block;margin-bottom:22px;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fbff;">
              <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.8;">
                <tr><td style="font-weight:700;padding:4px 0;width:170px;">Lead Reference:</td><td style="padding:4px 0;">${escapeHtml(leadCode || "Pending")}</td></tr>
                <tr><td style="font-weight:700;padding:4px 0;width:170px;">Name:</td><td style="padding:4px 0;">${safeFirstName} ${safeLastName}</td></tr>
                <tr><td style="font-weight:700;padding:4px 0;">Email:</td><td style="padding:4px 0;"><a href="mailto:${safeEmail}" style="color:#0b63ce;text-decoration:none;">${safeEmail}</a></td></tr>
                <tr><td style="font-weight:700;padding:4px 0;">Phone:</td><td style="padding:4px 0;">${safePhone}</td></tr>
                <tr><td style="font-weight:700;padding:4px 0;">Company:</td><td style="padding:4px 0;">${safeCompany}</td></tr>
                <tr><td style="font-weight:700;padding:4px 0;">Location:</td><td style="padding:4px 0;">${safeLocation}</td></tr>
              </table>
            </div>

            <div style="margin-bottom:22px;">
              <h3 style="margin:0 0 12px;font-size:16px;color:#0b2e59;">Areas of Interest</h3>
              <div style="padding:16px 18px;border:1px solid #e2e8f0;border-radius:14px;background:#ffffff;">
                <ul style="margin:0;padding-left:20px;font-size:15px;line-height:1.7;">
                  ${interestListHtml}
                </ul>
              </div>
            </div>

            <div style="margin-bottom:22px;">
              <h3 style="margin:0 0 12px;font-size:16px;color:#0b2e59;">Project Details</h3>
              <div style="padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fbff;font-size:15px;line-height:1.8;">
                ${safeMessage}
              </div>
            </div>

            <div style="margin-top:28px;padding:18px;border-radius:14px;background:#0b2e59;color:#ffffff;">
              <div style="font-size:14px;line-height:1.8;">
                <strong>Suggested next action:</strong> review the lead, reply to the client, and recommend the most suitable package, demo, or implementation path.
              </div>
            </div>
          </div>

          <div style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:13px;color:#475569;">
            © ThreeFk Nova Technologies · Sales notification from website contact form
          </div>
        </div>
      </div>
    `;

    const salesTextBody = `
New Contact Sales Submission

Lead Reference: ${leadCode || "Pending"}
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}
Location: ${location || "Not provided"}
Interests: ${interestListText}

Project Details:
${message}
    `.trim();

    if (token) {
      try {
        const salesResponse = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            from: {
              address: fromEmail,
              name: fromName,
            },
            to: [
              {
                email_address: {
                  address: salesTo,
                  name: "Sales Team",
                },
              },
            ],
            reply_to: [
              {
                address: email,
                name: `${firstName} ${lastName}`.trim(),
              },
            ],
            subject: salesSubject,
            htmlbody: salesHtmlBody,
            textbody: salesTextBody,
          }),
          cache: "no-store",
        });

        const salesResultText = await salesResponse.text();
        console.log("Sales email status:", salesResponse.status);
        console.log("Sales email body:", salesResultText);
      } catch (salesError) {
        console.error("Sales email send error:", salesError);
      }

      // -----------------------------
      // 2. SEND CUSTOMER AUTO-REPLY
      // -----------------------------
      const autoReplySubject = "We received your request - ThreeFk Nova Technologies";

      const autoReplyHtml = `
        <div style="margin:0;padding:24px;background:#f3f7fc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
          <div style="max-width:720px;margin:0 auto;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #dbe5f0;">
            <div style="background:linear-gradient(135deg,#0b2e59 0%,#12417d 100%);padding:28px 32px;color:#ffffff;">
              <div style="font-size:12px;letter-spacing:0.22em;text-transform:uppercase;opacity:0.9;">ThreeFk Nova Technologies</div>
              <h1 style="margin:10px 0 6px;font-size:28px;line-height:1.2;">Thank you for contacting us</h1>
              <p style="margin:0;font-size:14px;line-height:1.7;color:#dbeafe;">
                Your sales enquiry has been received successfully.
              </p>
            </div>

            <div style="padding:28px 32px;">
              <p style="margin:0 0 16px;font-size:16px;line-height:1.8;">
                Hello <strong>${safeFirstName}</strong>,
              </p>

              <p style="margin:0 0 16px;font-size:15px;line-height:1.8;color:#334155;">
                Thank you for reaching out to ThreeFk Nova Technologies. We have received your request and our team will review it shortly.
              </p>

              <div style="margin:18px 0;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fbff;">
                <div style="font-size:15px;line-height:1.8;color:#0f172a;">
                  <strong>What happens next:</strong>
                  <ul style="margin:10px 0 0;padding-left:20px;">
                    <li style="margin:0 0 6px;">We review your enquiry and requirements</li>
                    <li style="margin:0 0 6px;">We recommend the most suitable package or service path</li>
                    <li style="margin:0 0 6px;">We follow up with pricing, demo scheduling, or implementation guidance</li>
                  </ul>
                </div>
              </div>

              <div style="margin:18px 0;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#ffffff;">
                <div style="font-size:15px;line-height:1.8;color:#0f172a;">
                  <strong>Your submitted interest areas:</strong>
                  <div style="margin-top:10px;">${interestListText}</div>
                </div>
              </div>

              <div style="margin:18px 0;padding:18px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fbff;">
                <div style="font-size:15px;line-height:1.8;color:#0f172a;">
                  <strong>Reference:</strong> ${escapeHtml(leadCode || "Captured")}
                </div>
              </div>

              <div style="margin-top:20px;padding:18px;border-radius:14px;background:#0b2e59;color:#ffffff;">
                <div style="font-size:15px;line-height:1.8;">
                  You can also reach us directly at <strong>${escapeHtml(supportEmail)}</strong> or <strong>${escapeHtml(supportPhone)}</strong>.
                </div>
              </div>
            </div>

            <div style="padding:18px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:13px;color:#475569;">
              © ThreeFk Nova Technologies · Kampala, Uganda
            </div>
          </div>
        </div>
      `;

      const autoReplyText = `
Hello ${firstName},

Thank you for contacting ThreeFk Nova Technologies.
We have received your request successfully.

Reference:
${leadCode || "Captured"}

What happens next:
- We review your enquiry
- We recommend the most suitable package
- We follow up with pricing, demo scheduling, or implementation guidance

Submitted interests:
${interestListText}

You can also reach us at:
${supportEmail}
${supportPhone}

ThreeFk Nova Technologies
      `.trim();

      try {
        const autoReplyResponse = await fetch(apiUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify({
            from: {
              address: fromEmail,
              name: fromName,
            },
            to: [
              {
                email_address: {
                  address: email,
                  name: `${firstName} ${lastName}`.trim(),
                },
              },
            ],
            subject: autoReplySubject,
            htmlbody: autoReplyHtml,
            textbody: autoReplyText,
          }),
          cache: "no-store",
        });

        const autoReplyResultText = await autoReplyResponse.text();
        console.log("Auto-reply status:", autoReplyResponse.status);
        console.log("Auto-reply body:", autoReplyResultText);
      } catch (autoReplyError) {
        console.error("Auto-reply send error:", autoReplyError);
      }
    } else {
      console.warn("Zepto email token missing. CRM lead captured without email notifications.");
    }

    return NextResponse.json({
      ok: true,
      leadCode,
      message: "Your message has been sent successfully. Our sales team will get back to you shortly.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
