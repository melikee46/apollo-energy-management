import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/sections/LocalizedLegalPage";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };
export function generateMetadata({ params }: Props): Metadata { const locale = getLocale(params.locale); const messages = getMessages(locale); return { title: messages.legal.cookiesTitle, description: messages.metadata.cookiesDescription, openGraph: { title: `${messages.legal.cookiesTitle} | Apollo Green Solutions`, description: messages.metadata.cookiesDescription, type: "website", url: `/${locale}/cookies`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: messages.legal.cookiesTitle }] } }; }
export default function LocaleCookies({ params }: Props) { return <LocalizedLegalPage locale={getLocale(params.locale)} kind="cookies" />; }
function getLocale(value: string): Locale { if (!isLocale(value)) notFound(); return value; }
