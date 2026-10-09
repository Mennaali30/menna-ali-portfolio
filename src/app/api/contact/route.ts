import { NextResponse } from "next/server";

// In-memory rate limiting store: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
  try {
    // 1. IP extraction & rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (ip !== "unknown" && !checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { name, email, message, honeypot } = body;

    // 3. Honeypot check (anti-bot)
    if (honeypot && String(honeypot).trim().length > 0) {
      // Silently accept without sending
      return NextResponse.json({ success: true, message: "Message accepted." });
    }

    // 4. Data validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name between 2 and 100 characters." },
        { status: 400 }
      );
    }

    if (!trimmedEmail || trimmedEmail.length > 254 || !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 10 || trimmedMessage.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Please enter a message between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    // 5. Check Resend API key configuration
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("[Contact API] RESEND_API_KEY environment variable is not configured.");
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service configuration is pending. Please contact Mennaali30617@gmail.com directly while API keys are configured.",
        },
        { status: 503 }
      );
    }

    // 6. Recipient and sender addresses
    const recipientEmail = "Mennaali30617@gmail.com";
    const senderEmail = process.env.CONTACT_FROM_EMAIL || "Menna Ali Portfolio <onboarding@resend.dev>";

    // Escape HTML to prevent injection in email body
    const escapeHtml = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br/>");
    const submittedAt = new Date().toUTCString();

    const emailPayload = {
      from: senderEmail,
      to: [recipientEmail],
      reply_to: trimmedEmail,
      subject: `Portfolio Inquiry from ${trimmedName}`,
      text: `New contact form submission from Menna Ali's portfolio:\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nDate: ${submittedAt}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #D8E2DC; border-radius: 12px; background-color: #ffffff; color: #222629;">
          <h2 style="color: #222629; margin-top: 0; border-bottom: 2px solid #F4ACB7; padding-bottom: 12px;">New Portfolio Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #9D8189;">From:</td>
              <td style="padding: 8px 0; color: #222629;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #9D8189;">Email:</td>
              <td style="padding: 8px 0; color: #222629;"><a href="mailto:${safeEmail}" style="color: #222629; text-decoration: underline;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #9D8189;">Date:</td>
              <td style="padding: 8px 0; color: #9D8189; font-size: 13px;">${submittedAt}</td>
            </tr>
          </table>
          <div style="background-color: #F8F9FA; border-left: 4px solid #F4ACB7; padding: 16px; border-radius: 4px; font-size: 14px; line-height: 1.6; color: #222629;">
            ${safeMessage}
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #9D8189; border-top: 1px solid #D8E2DC; padding-top: 12px;">
            This email was sent from the contact form on Menna Ali Abdelrahman's Portfolio. Reply directly to this email to reach ${safeName} (${safeEmail}).
          </p>
        </div>
      `,
    };

    // 7. Send via Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => null);
      console.error("[Contact API] Resend API error status:", resendResponse.status, errorData?.message || "");
      return NextResponse.json(
        {
          success: false,
          error: "Email delivery service encountered an issue. Please try again or email Mennaali30617@gmail.com directly.",
        },
        { status: 502 }
      );
    }

    const resendData = await resendResponse.json().catch(() => ({}));
    return NextResponse.json({
      success: true,
      id: resendData.id,
      message: "Thank you, your message has been sent successfully!",
    });
  } catch (err) {
    console.error("[Contact API] Unexpected server error:", err);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
