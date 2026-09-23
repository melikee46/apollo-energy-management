import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Apollo Green Solutions collects, uses, and protects personal information.",
  openGraph: {
    title: "Privacy Policy | Apollo Green Solutions",
    description: "Learn how Apollo Green Solutions collects, uses, and protects personal information.",
    type: "website",
    url: "/privacy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions privacy policy" }],
  },
};

export default function PrivacyPage() {
  return (
    <Section bg="black" narrow>
      <p className="text-sm font-bold uppercase tracking-widest text-lime">Legal</p>
      <h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">Privacy Policy</h1>
      <p className="mt-6 text-sm text-gray-500">Last updated: September 23, 2026</p>
      <Card className="mt-12" padding="lg" hover={false}>
        <div className="space-y-8 text-gray-300 leading-8">
          <p>Apollo Green Solutions respects your privacy. This policy explains what information we collect when you use our website or contact our team, and how we use it to provide and improve our services.</p>
          <p>We may collect contact details, company information, and the contents of enquiries you submit. We use this information to respond to requests, provide relevant proposals, maintain site security, and meet our legal obligations.</p>
          <p>We do not sell personal information. We may share information with service providers who help us operate the website and communications, subject to appropriate confidentiality and security commitments.</p>
          <p>You may ask us to access, correct, or delete your personal information by contacting us through the contact page. We retain information only for as long as needed for the purposes described here or as required by law.</p>
        </div>
      </Card>
    </Section>
  );
}
