import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Apollo Green Solutions handles personal data, hosting-level security, and user rights for website visitors and contacts.",
  openGraph: {
    title: "Privacy Policy | Apollo Green Solutions",
    description: "How Apollo Green Solutions handles personal data, hosting-level security, and user rights for website visitors and contacts.",
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

      <div className="mt-12 space-y-10 text-gray-300 leading-8">
        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">1. Introduction</h2>
          <p>
            Apollo Green Solutions values the trust of people who visit our website, submit enquiries, or contact our team. This Privacy Policy explains which personal data we collect, whether it is provided directly by the user or generated automatically through system usage, and how we use and protect it.
          </p>
          <p>
            The categories of data we may collect include contact information such as name, work email, company name, and the content of a message sent through our contact forms. We may also process automatically generated usage data such as IP address, browser type, page activity, and referral information when a visitor interacts with the website or receives hosted content.
          </p>
          <p>
            Some information is necessary for the delivery of our services and for communication with users. Other data may be optional and collected only where we have a legitimate interest or the user has provided consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">2. Collection, processing method and location</h2>
          <p>
            Personal data is collected primarily through direct input in contact forms, email communication, and website activity recorded by the runtime environment. We process data in a secure, access-controlled environment and limit access to personnel who need it to answer enquiries, support product-related questions, maintain the website, and meet legal and operational responsibilities.
          </p>
          <p>
            Our website is built using Next.js and hosted on Vercel. Processing occurs primarily within the infrastructure provided by those services, and data may be stored in secure cloud environments operated by our hosting and technical vendors. We apply reasonable administrative, technical and organisational measures, including secure configuration, encrypted transport, access restrictions, and logging controls, to reduce the risk of unauthorised access or accidental disclosure.
          </p>
          <p>
            We retain personal data only for as long as necessary for the purposes described in this policy, or for any longer period required by applicable law, regulatory obligations, or legitimate legal claims. When data is no longer required, it is deleted or anonymised in a secure manner.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">3. Purposes of processing</h2>
          <p>
            We process personal data for the following purposes: to respond to enquiries and provide follow-up communication; to manage our platform and hosting services; to display third-party embedded content when required for functional or informational purposes; and to support marketing or advertising activities where legally permissible and in accordance with user preferences.
          </p>
          <p>
            We do not sell personal data. In limited cases, we may share information with trusted hosting, infrastructure, analytics, or service providers who assist us in keeping the website secure and operational. Any such sharing is subject to contractual safeguards and confidentiality obligations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">4. Purpose-specific information</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><span className="font-semibold text-white">Contact form and direct communication:</span> when a user submits an enquiry, we process their name, email address, company name, and message to reply, assess the request, and provide follow-up information about our services.</li>
            <li><span className="font-semibold text-white">Hosting and platform services:</span> our website runs on Next.js and is hosted on Vercel, which may process operational and security-related data necessary to serve the site, monitor uptime, and protect the application against abuse.</li>
            <li><span className="font-semibold text-white">Third-party embedded content:</span> if we display embedded media, forms, calendars or other widgets from third parties, those providers may process limited data in accordance with their own privacy terms, such as usage or interaction information.</li>
            <li><span className="font-semibold text-white">Advertising and marketing:</span> where applicable, we may use aggregated or consent-based data to evaluate campaign performance or support relevant user communications, always within applicable legal boundaries.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">5. Additional information for EU/EEA users (GDPR)</h2>
          <p>
            For users in the European Union and the EEA, the legal basis for processing personal data may include consent, the performance of a contract, compliance with a legal obligation, or our legitimate interests in operating and securing the website, responding to enquiries, and improving service quality. Where we rely on consent, the user may withdraw it at any time without affecting the lawfulness of processing carried out before withdrawal.
          </p>
          <p>
            We retain personal data only for the time necessary to fulfil the purpose for which it was collected, or as required by law. Typical retention periods may relate to contractual obligations, dispute handling, regulatory record-keeping, or the need to provide continuity of client communication.
          </p>
          <p>
            Under applicable data protection laws, users may have the right to access their personal data, request correction of inaccurate information, obtain restriction or erasure of data in certain circumstances, request data portability, object to processing based on legitimate interests, and withdraw consent where consent is the legal basis for processing. Users may also file a complaint with a competent supervisory authority.
          </p>
          <p>
            To exercise these rights, please contact us using the contact form or the email address listed on the website. We will respond to requests in accordance with applicable law and may ask for verification of identity where necessary to protect against unauthorised access.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">6. Additional information</h2>
          <p>
            We may disclose personal data where required by law, court order, regulatory authority, or to protect our legal rights, the integrity of the website, or the safety of users and employees. System logs, operational diagnostics, and security monitoring may be retained to maintain service integrity and support incident response.
          </p>
          <p>
            This Privacy Policy may be updated from time to time to reflect material changes in our operations, legal requirements, or the services we provide. The date at the top of this page indicates the most recent revision. Continued use of the website after an update constitutes acceptance of the revised policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">7. Definitions</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><span className="font-semibold text-white">Personal Data:</span> any information relating to an identified or identifiable natural person.</li>
            <li><span className="font-semibold text-white">Usage Data:</span> information collected automatically about how the website is used, such as page views, device information, and technical telemetry.</li>
            <li><span className="font-semibold text-white">User:</span> any visitor, customer, or contact who accesses the website or submits information.</li>
            <li><span className="font-semibold text-white">Data Controller:</span> Apollo Green Solutions, as the party determining the purposes and means of processing.</li>
            <li><span className="font-semibold text-white">Data Processor:</span> a third-party provider that processes personal data on our behalf under contract.</li>
            <li><span className="font-semibold text-white">Cookie:</span> a small text file stored by a browser to remember information or support technical functionality.</li>
            <li><span className="font-semibold text-white">Tracker:</span> any script or technology used to collect interaction or technical data, including analytics or embedded service tools.</li>
            <li><span className="font-semibold text-white">EU/EEA:</span> countries in the European Union and the European Economic Area.</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
