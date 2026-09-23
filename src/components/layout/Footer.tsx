/**
 * Footer.tsx
 *
 * Client Component — pathname detection keeps locale links and copy aligned.
 * Three-column link grid pulled from FOOTER_LINKS in lib/data.ts.
 *
 * Design decisions:
 *  - Dark gray-900 background distinguishes footer from the black page body
 *    while staying within the brand palette.
 *  - Lime hover on links reinforces the accent colour as the interactive cue.
 *  - Year is computed at render time (new Date()) — stays correct without
 *    needing a separate client component or manual update.
 *  - Logo repeated in footer is standard B2B SaaS pattern; reinforces brand
 *    at the end of the reading journey.
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ApolloLogo } from "@/components/icons/ApolloLogo";
import { getFooterLinks, getMessages, localizePath, type Locale } from "@/lib/i18n";

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const routeLocale: Locale | null = pathname.startsWith("/de") ? "de" : pathname.startsWith("/en") ? "en" : null;
  const locale = routeLocale ?? "en";
  const messages = getMessages(locale);
  const localized = routeLocale !== null;
  const footerLinks = getFooterLinks(locale);
  const hrefForRoute = (href: string) => localized ? localizePath(locale, href) : href;

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Main grid ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <ApolloLogo size={30} showText animate={false} />
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xs">
              {messages.footer.brand}
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={hrefForRoute(link.href)}
                      className="text-sm text-gray-500 hover:text-lime transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-700">
            &copy; {year} Apollo Green Solutions. {messages.footer.copyright}
          </p>
          <p className="text-xs text-gray-800">
            {messages.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
