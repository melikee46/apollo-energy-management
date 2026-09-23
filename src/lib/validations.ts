/**
 * validations.ts
 *
 * Zod schemas shared between the ContactForm client component and the
 * /api/contact server route. Single source of truth for validation rules
 * ensures client and server always enforce identical constraints —
 * no client-only validation loopholes.
 *
 * Why Zod here instead of separate client/server schemas?
 * If the schema lives in two places they inevitably drift. One Zod schema
 * used with zodResolver on the client AND safeParse on the server guarantees
 * they are always in sync without any extra effort.
 *
 * `website` is the honeypot field: hidden from real users via CSS,
 * auto-filled by bots. Its presence triggers silent rejection server-side.
 */

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters")
    // Character class covers A-Z, a-z, accented/extended Latin chars (0x00C0-0x024F),
    // spaces, apostrophes, and hyphens — avoids the /u flag which requires es2015+ target.
    .regex(
      /^[A-Za-z\u00C0-\u024F\s''-]+$/,
      "Name contains invalid characters"
    ),

  email: z
    .string()
    .email("Please enter a valid email address")
    .max(254, "Email address is too long"),

  company: z
    .string()
    .max(120, "Company name must be at most 120 characters")
    .optional(),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),

  /**
   * Honeypot field.
   * - On the client form it is aria-hidden + sr-only + tabIndex=-1
   * - Real users never see or tab to it, so it always stays empty
   * - Bots that auto-fill every input will populate it
   * - Server rejects any submission where this is non-empty (silently)
   * - max(0) means any non-empty value is a Zod validation failure
   */
  website: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Re-export under a server-facing alias for clarity in the API route
export const contactApiSchema = contactFormSchema;
export type ContactApiData = ContactFormData;
