import { Section } from "@/components/ui/Section";
import { getMessages, type Locale } from "@/lib/i18n";

type LegalKind = "privacy" | "terms" | "cookies";

export function LocalizedLegalPage({ locale, kind }: { locale: Locale; kind: LegalKind }) {
  const legal = getMessages(locale).legal;
  const title = kind === "privacy" ? legal.privacyTitle : kind === "terms" ? legal.termsTitle : legal.cookiesTitle;
  const paragraphs = kind === "privacy" ? legal.privacy : kind === "terms" ? legal.terms : legal.cookies;

  return (
    <Section bg="black" narrow>
      <p className="text-sm font-bold uppercase tracking-widest text-lime">{legal.eyebrow}</p>
      <h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">{title}</h1>
      <p className="mt-6 text-sm text-gray-500">{legal.updated}</p>
      <div className="mt-12 space-y-8 text-gray-300 leading-8">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
