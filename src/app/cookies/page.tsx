import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Apollo Green Solutions uses essential cookies, session controls, and preference management across the website.",
  openGraph: {
    title: "Cookie Policy | Apollo Green Solutions",
    description: "How Apollo Green Solutions uses essential cookies, session controls, and preference management across the website.",
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

      <div className="mt-12 space-y-10 text-gray-300 leading-8">
        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">1. Introduction</h2>
          <p>
            Cookies and similar technologies are used on websites to remember user preferences, protect operational stability, and improve the quality of the experience. Apollo Green Solutions uses a limited set of cookies to support the website, maintain security, and ensure that essential functions continue to work correctly.
          </p>
          <p>
            A cookie is a small text file stored on the browser. It may contain an identifier, session information, or preference data. In some cases, similar technologies such as browser storage or embedded tracking scripts may be used to measure basic usage or enable third-party widgets. We use these tools carefully and only where necessary or where the user has given consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">2. Necessary cookies</h2>
          <p>
            Certain cookies are strictly necessary for the website to function. They support security checks, route stability, session continuity, and technical operations provided by our hosting environment. These cookies are generally set by the website itself or by our infrastructure provider, such as Vercel, and are essential for reliability and abuse prevention.
          </p>

          <div className="overflow-hidden rounded-2xl border border-gray-800">
            <table className="min-w-full text-left text-sm text-gray-300">
              <thead className="bg-gray-950 text-xs uppercase tracking-wider text-gray-400">
                <tr>
                  <th className="px-4 py-3">Cookie category</th>
                  <th className="px-4 py-3">Purpose</th>
                  <th className="px-4 py-3">Typical duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white">Necessary / session</td>
                  <td className="px-4 py-3">Maintain secure browser sessions, preserve routing state, and support website availability.</td>
                  <td className="px-4 py-3">Session or short-lived</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white">Security</td>
                  <td className="px-4 py-3">Detect suspicious activity, protect against abuse, and support infrastructure-level security controls.</td>
                  <td className="px-4 py-3">Short-lived or persistent</td>
                </tr>
                <tr className="border-t border-gray-800">
                  <td className="px-4 py-3 font-medium text-white">Hosting / infrastructure</td>
                  <td className="px-4 py-3">Support platform operations, caching, and fault handling across the Next.js/Vercel delivery layer.</td>
                  <td className="px-4 py-3">Varies by provider</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">3. Experience and functionality cookies</h2>
          <p>
            We may also use cookies or browser storage for experience-related purposes, such as remembering a user choice or enabling a functional widget. If we include third-party content or widgets on the website, those services may set their own cookies related to display, analytics, or interaction tracking. In these cases, their own privacy and cookie policies apply in addition to this document.
          </p>
          <p>
            Experience cookies are not required for the website to operate, and we only use them where they provide a real value to the user experience or support a necessary integration. Where consent is required, we will request it before enabling such cookies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">4. Managing preferences</h2>
          <p>
            Users can manage cookie preferences at any time through their browser settings. If you do not want cookies to be stored, you may disable them or set your browser to notify you before accepting them. Please note that some features of the site may not work as intended if essential cookies are blocked.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-lime underline-offset-4 hover:underline">Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noreferrer" className="text-lime underline-offset-4 hover:underline">Firefox</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-lime underline-offset-4 hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer" className="text-lime underline-offset-4 hover:underline">Edge</a></li>
          </ul>
          <p>
            If we offer a consent banner or preference tool in the future, the user will be able to grant or withdraw consent for non-essential cookies through that interface as well.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">5. Consequences of rejecting cookies</h2>
          <p>
            If cookies are rejected or disabled, some website functions may be limited. For example, form state may not be preserved, session continuity may be interrupted, or embedded functionality may not load correctly. Blocking necessary cookies can also affect the website security features and operational stability.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-black uppercase tracking-wider text-white">6. Definitions</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li><span className="font-semibold text-white">Cookie:</span> a small text file stored by the browser.</li>
            <li><span className="font-semibold text-white">Tracking technology:</span> scripts or browser features used to collect technical or usage information.</li>
            <li><span className="font-semibold text-white">Necessary cookies:</span> cookies that are essential to provide the website and keep it secure.</li>
            <li><span className="font-semibold text-white">Functional cookies:</span> cookies used for user experience or product functionality.</li>
            <li><span className="font-semibold text-white">Third-party widget:</span> any external tool or embedded service that may set cookies or collect limited interaction data.</li>
          </ul>
        </section>
      </div>
    </Section>
  );
}
