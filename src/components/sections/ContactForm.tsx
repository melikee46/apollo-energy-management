/**
 * ContactForm.tsx
 *
 * Client-side contact form using the shared Zod schema. The server route
 * repeats validation, sanitisation, honeypot, and rate limiting before any
 * future delivery integration is added.
 */
"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import type { Locale } from "@/lib/i18n";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const german = locale === "de";
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(data: ContactFormData) {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("Request failed");
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="sr-only" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
      <Field label={german ? "Name" : "Name"} error={errors.name?.message}><input {...register("name")} autoComplete="name" className="field" /></Field>
      <Field label={german ? "Geschäftliche E-Mail" : "Work email"} error={errors.email?.message}><input {...register("email")} type="email" autoComplete="email" className="field" /></Field>
      <Field label={german ? "Unternehmen" : "Company"} error={errors.company?.message}><input {...register("company")} autoComplete="organization" className="field" /></Field>
      <Field label={german ? "Wie können wir helfen?" : "How can we help?"} error={errors.message?.message}><textarea {...register("message")} rows={6} className="field resize-y" /></Field>
      <button type="submit" disabled={isSubmitting} className="w-full rounded-pill bg-lime px-6 py-4 text-sm font-black uppercase tracking-wider text-black transition hover:bg-lime-dim hover:shadow-glow-lime-sm disabled:cursor-wait disabled:opacity-50">{isSubmitting ? (german ? "Wird gesendet ..." : "Sending...") : (german ? "Anfrage senden" : "Send enquiry")}</button>
      {status === "success" && <p className="rounded-xl bg-lime/10 p-4 text-sm text-lime" role="status">{german ? "Vielen Dank. Ihre Nachricht wurde empfangen." : "Thanks. Your message has been received."}</p>}
      {status === "error" && <p className="rounded-xl bg-red-500/10 p-4 text-sm text-red-300" role="alert">{german ? "Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." : "We could not send your message. Please try again."}</p>}
    </form>
  );
}

interface FieldProps { label: string; error?: string; children: ReactNode }
function Field({ label, error, children }: FieldProps) {
  return <div><label className="mb-2 block text-xs font-bold uppercase tracking-widest text-gray-300">{label}</label>{children}{error && <p className="mt-2 text-xs text-red-300">{error}</p>}</div>;
}