import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return { title: messages.metadata.homeTitle, description: messages.metadata.homeDescription, openGraph: { title: messages.metadata.homeTitle, description: messages.metadata.homeDescription, type: "website", url: `/${locale}`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions" }] } };
}

export default function LocaleHome({ params }: Props) {
  const locale = getLocale(params.locale);
  return <><Hero locale={locale} /><FeatureGrid locale={locale} /><ProductGrid locale={locale} /><CTASection locale={locale} /></>;
}

function getLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
