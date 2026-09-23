import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return { title: messages.metadata.contactTitle, description: messages.metadata.contactDescription, openGraph: { title: `${messages.metadata.contactTitle} | Apollo Green Solutions`, description: messages.metadata.contactDescription, type: "website", url: `/${locale}/contact`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Apollo Green Solutions" }] } };
}

export default function LocaleContact({ params }: Props) {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return <Section bg="black"><div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><p className="text-sm font-bold uppercase tracking-widest text-lime">{messages.contact.eyebrow}</p><h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">{messages.contact.title}</h1><p className="mt-8 max-w-md text-lg leading-8 text-gray-300">{messages.contact.text}</p></div><div className="rounded-[2rem] border border-gray-800 bg-gray-950 p-6 sm:p-10"><ContactForm locale={locale} /></div></div></Section>;
}

function getLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
