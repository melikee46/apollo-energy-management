/**
 * Contact API endpoint with shared schema validation, basic input normalising,
 * honeypot rejection, and an in-memory sliding-window rate limit.
 */
import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rateLimit";
import { contactApiSchema } from "@/lib/validations";

function clean(value: string): string { return value.replace(/[<>]/g, "").trim(); }

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";
  const limit = checkRateLimit(ip);
  if (!limit.allowed) return NextResponse.json({ error: "Unable to process request." }, { status: 429, headers: { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) } });

  try {
    const body: unknown = await request.json();
    const parsed = contactApiSchema.safeParse(body);
    if (!parsed.success || parsed.data.website) return NextResponse.json({ error: "Unable to process request." }, { status: 400 });
    const data = { name: clean(parsed.data.name), email: clean(parsed.data.email), company: parsed.data.company ? clean(parsed.data.company) : undefined, message: clean(parsed.data.message) };
    console.info("Contact enquiry received", { ...data, email: "[redacted]" });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Unable to process request." }, { status: 400 });
  }
}