/**
 * CTASection.tsx
 *
 * Reusable conversion band used at the end of high-intent pages.
 */

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

interface CTASectionProps {
  title?: string;
  text?: string;
}

export function CTASection({
  title = "Ready to make energy a competitive advantage?",
  text = "Tell us where you are today. We will map the clearest next move for your site, your team, and your targets.",
}: CTASectionProps) {
  return (
    <Section bg="lime-soft" narrow className="text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo">Start with one conversation</p>
      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black uppercase leading-tight text-black sm:text-6xl">{title}</h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-black/70">{text}</p>
      <div className="mt-9">
        <Button href="/contact" variant="indigo" size="lg">
          Talk to Apollo <ArrowUpRight size={17} aria-hidden="true" />
        </Button>
      </div>
    </Section>
  );
}