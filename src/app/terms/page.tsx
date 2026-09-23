import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review the terms that govern use of the Apollo Green Solutions website.",
  openGraph: {
    title: "Terms of Service | Apollo Green Solutions",
    description: "Review the terms that govern use of the Apollo Green Solutions website.",
    type: "website",
    url: "/terms",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions terms of service" }],
  },
};

export default function TermsPage() {
  return (
    <Section bg="black" narrow>
      <p className="text-sm font-bold uppercase tracking-widest text-lime">Legal</p>
      <h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">Terms of Service</h1>
      <p className="mt-6 text-sm text-gray-500">Last updated: September 23, 2026</p>
      <Card className="mt-12" padding="lg" hover={false}>
        <div className="space-y-8 text-gray-300 leading-8">
          <p>These terms govern your use of the Apollo Green Solutions website. By accessing the site, you agree to use it lawfully and in a way that does not interfere with its operation or security.</p>
          <p>Website content is provided for general information about our products and services. It is not a substitute for site-specific engineering, financial, legal, or regulatory advice, and performance outcomes depend on the conditions of each installation.</p>
          <p>You may not copy, misuse, or attempt to reverse engineer the site or its content without our written permission. We may update, suspend, or remove website content as our services evolve.</p>
          <p>To ask a question about these terms or our services, please contact the Apollo Green Solutions team through the contact page.</p>
        </div>
      </Card>
    </Section>
  );
}
