import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { TeamSection } from "@/components/sections/TeamSection";
import { Section } from "@/components/ui/Section";
import { getMessages, getServiceStats, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return { title: messages.metadata.aboutTitle, description: messages.metadata.aboutDescription, openGraph: { title: `${messages.metadata.aboutTitle} | Apollo Green Solutions`, description: messages.metadata.aboutDescription, type: "website", url: `/${locale}/about`, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions team" }] } };
}

export default function LocaleAbout({ params }: Props) {
  const locale = getLocale(params.locale);
  const messages = getMessages(locale);
  return <><Section bg="black" grid><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-widest text-lime">{messages.about.eyebrow}</p><h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">{messages.about.title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">{messages.about.text}</p></div><div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">{getServiceStats(locale).map((stat) => <div key={stat.label} className="border-t border-lime pt-4"><p className="text-4xl font-black text-lime">{stat.value}</p><p className="mt-2 text-sm text-gray-400">{stat.label}</p></div>)}</div></Section><TeamSection locale={locale} /><Section bg="black" id="careers" narrow><p className="text-sm font-bold uppercase tracking-widest text-lime">{messages.about.careers}</p><h2 className="mt-4 text-4xl font-black uppercase text-white sm:text-6xl">{messages.about.careersTitle}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">{messages.about.careersText}</p><a href={localizePath(locale, "/contact")} className="mt-8 inline-flex rounded-pill bg-lime px-6 py-3 text-sm font-black uppercase tracking-wider text-black hover:bg-lime-dim">{messages.about.careersCta}</a></Section><CTASection locale={locale} /></>;
}

function getLocale(value: string): Locale {
  if (!isLocale(value)) notFound();
  return value;
}
