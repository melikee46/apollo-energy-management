/**
 * Contact API endpoint with shared schema validation, basic input normalising,
 * honeypot rejection, rate limiting, and Resend email delivery.
 */
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { checkRateLimit } from "@/lib/rateLimit";
import { contactApiSchema } from "@/lib/validations";

function clean(value: string): string {
  return value.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.allowed) return NextResponse.json({ error: "Unable to process request." }, { status: 429, headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) } });

  try {
    const body: unknown = await request.json();
    const parsed = contactApiSchema.safeParse(body);
    if (!parsed.success || parsed.data.website) return NextResponse.json({ error: "Unable to process request." }, { status: 400 });
    const data = {
      name: clean(parsed.data.name),
      email: clean(parsed.data.email),
      company: parsed.data.company ? clean(parsed.data.company) : undefined,
      message: clean(parsed.data.message),
    };
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_FORM_TO_EMAIL;
    const sender = process.env.CONTACT_FORM_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Contact email delivery is not configured.");
      return NextResponse.json({ error: "Unable to process request." }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: data.email,
      subject: `New Apollo enquiry from ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Company: ${data.company || "Not provided"}`,
        "",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact email delivery failed.", { name: error.name });
      return NextResponse.json({ error: "Unable to process request." }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 400 });
  }
}