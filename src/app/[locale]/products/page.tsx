import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { getMessages, isLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return { title: messages.metadata.productsTitle, description: messages.metadata.productsDescription, openGraph: { title: `${messages.metadata.productsTitle} | Apollo Green Solutions`, description: messages.metadata.productsDescription, type: "website", url: `/${locale}/products`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions products" }] } };
}

export default function LocaleProducts({ params }: Props) {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return <><ProductGrid locale={locale} heading={messages.products.heading} showViewAllLink={false} /><CTASection locale={locale} /></>;
}

function getLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
