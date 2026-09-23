/**
 * CTASection.tsx
 *
 * Reusable conversion band used at the end of high-intent pages.
 */

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { getMessages, localizePath, type Locale } from "@/lib/i18n";

interface CTASectionProps {
  title?: string;
  text?: string;
}

export function CTASection({
  title = "Ready to make energy a competitive advantage?",
  text = "Tell us where you are today. We will map the clearest next move for your site, your team, and your targets.",
  locale = "en",
}: CTASectionProps & { locale?: Locale }) {
  const messages = getMessages(locale);
  return (
    <Section bg="lime-soft" narrow className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo">{messages.cta.eyebrow}</p>
      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black uppercase leading-tight text-black sm:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/70">{text}</p>
      <div className="mt-9">
        <Button href={localizePath(locale, "/contact")} variant="indigo" size="lg">
          {messages.cta.button} <ArrowUpRight size={17} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}