import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Understand how Apollo Green Solutions uses cookies and similar technologies.",
  openGraph: {
    title: "Cookie Policy | Apollo Green Solutions",
    description: "Understand how Apollo Green Solutions uses cookies and similar technologies.",
    type: "website",
    url: "/cookies",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions cookie policy" }],
  },
};

export default function CookiesPage() {
  return (
    <Section bg="black" narrow>
      <p className="text-sm font-bold uppercase tracking-widest text-lime">Legal</p>
      <h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">Cookie Policy</h1>
      <p className="mt-6 text-sm text-gray-500">Last updated: September 23, 2026</p>
      <Card className="mt-12" padding="lg" hover={false}>
        <div className="space-y-8 text-gray-300 leading-8">
          <p>Cookies are small text files stored on your device when you visit a website. Apollo Green Solutions uses limited cookies and similar technologies to keep the site secure, remember essential preferences, and understand basic website performance.</p>
          <p>Essential cookies are needed for parts of the website to function. Where optional analytics or communication tools are enabled, they are used to improve the experience and are handled according to our privacy policy.</p>
          <p>You can manage or remove cookies through your browser settings. Disabling some cookies may affect the availability or performance of certain website features.</p>
          <p>We may update this policy when our website or service providers change. The date above indicates when this page was last reviewed.</p>
        </div>
      </Card>
    </Section>
  );
}
