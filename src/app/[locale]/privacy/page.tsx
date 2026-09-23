import type { Metadata } from "next";
import { LocalizedLegalPage } from "@/components/sections/LocalizedLegalPage";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };
export function generateMetadata({ params }: Props): Metadata { const locale = getLocale(params.locale); const messages = getMessages(locale); return { title: messages.legal.privacyTitle, description: messages.metadata.privacyDescription, openGraph: { title: `${messages.legal.privacyTitle} | Apollo Green Solutions`, description: messages.metadata.privacyDescription, type: "website", url: `/${locale}/privacy`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: messages.legal.privacyTitle }] } }; }
export default function LocalePrivacy({ params }: Props) { return <LocalizedLegalPage locale={getLocale(params.locale)} kind="privacy" />; }
function getLocale(value: string): Locale { if (!isLocale(value)) notFound(); return value; }
