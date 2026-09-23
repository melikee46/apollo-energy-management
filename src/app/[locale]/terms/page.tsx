import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/sections/LocalizedLegalPage";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };
export function generateMetadata({ params }: Props): Metadata { const locale = getLocale(params.locale); const messages = getMessages(locale); return { title: messages.legal.termsTitle, description: messages.metadata.termsDescription, openGraph: { title: `${messages.legal.termsTitle} | Apollo Green Solutions`, description: messages.metadata.termsDescription, type: "website", url: `/${locale}/terms`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: messages.legal.termsTitle }] } }; }
export default function LocaleTerms({ params }: Props) { return <LocalizedLegalPage locale={getLocale(params.locale)} kind="terms" />; }
function getLocale(value: string): Locale { if (!isLocale(value)) notFound(); return value; }
