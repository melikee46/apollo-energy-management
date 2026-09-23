/**
 * Footer.tsx
 *
 * Server Component — purely static markup, no interactivity needed.
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

import Link from "next/link";
import { ApolloLogo } from "@/components/icons/ApolloLogo";
import { FOOTER_LINKS } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Main grid ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <ApolloLogo size={30} showText animate={false} />
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xs">
              Industrial-grade energy intelligence for a decarbonised economy.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
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
            &copy; {year} Apollo Green Solutions. All rights reserved.
          </p>
          <p className="text-xs text-gray-800">
            Built for a zero-carbon industrial future.
          </p>
        </div>
      </div>
    </footer>
  );
}
