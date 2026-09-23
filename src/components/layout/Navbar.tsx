/**
 * Navbar.tsx
 *
 * 'use client' — usePathname() is required to highlight the active nav link.
 * Mobile menu open/close state is local; no global state store needed.
 *
 * Design decisions:
 *  - Sticky + backdrop-blur: keeps nav accessible without fully obscuring
 *    page content — standard pattern for data-dense B2B interfaces.
 *  - Active link: filled lime pill (same treatment as CTA buttons)
 *    so the active indicator is unmistakably on-brand.
 *  - Mobile: AnimatePresence slide-down panel — avoids a full-screen overlay
 *    which would feel consumer-app-like; a compact dropdown fits the B2B tone.
 *  - All nav links sourced from lib/data.ts — no hardcoded hrefs here.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ApolloLogo } from "@/components/icons/ApolloLogo";
import { getMessages, getProducts, localizePath, type Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";

function FlagIcon({ country }: { country: "gb" | "de" }) {
  const isGerman = country === "de";

  return (
    <svg viewBox="0 0 24 18" className="h-[16px] w-[16px] shrink-0 overflow-visible" aria-hidden="true">
      {isGerman ? (
        <>
          <rect width="24" height="18" rx="2" fill="#111111" />
          <rect y="0" width="24" height="6" fill="#000000" />
          <rect y="6" width="24" height="6" fill="#DD0000" />
          <rect y="12" width="24" height="6" fill="#FFCE00" />
        </>
      ) : (
        <>
          <rect width="24" height="18" rx="2" fill="#012169" />
          <path d="M0 0L24 18M24 0L0 18" stroke="#fff" strokeWidth="3" />
          <path d="M0 0L24 18M24 0L0 18" stroke="#C8102E" strokeWidth="1.4" />
          <path d="M12 0V18M0 9H24" stroke="#fff" strokeWidth="5" />
          <path d="M12 0V18M0 9H24" stroke="#C8102E" strokeWidth="2.4" />
        </>
      )}
    </svg>
  );
}

function LanguageToggle({ locale, languagePath }: { locale: Locale; languagePath: string }) {
  const languages = [
    { code: "en" as const, label: "EN", flag: "gb" as const },
    { code: "de" as const, label: "DE", flag: "de" as const },
  ];

  return (
    <div className="flex items-center rounded-pill border border-gray-800 bg-white/5 p-1 shadow-card-dark">
      {languages.map(({ code, label, flag }) => {
        const active = locale === code;
        return (
          <Link
            key={code}
            href={localizePath(code, languagePath)}
            className="relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-pill px-2.5 py-2 text-center"
            aria-current={active ? "page" : undefined}
          >
            {active && (
              <motion.span
                layoutId="language-pill"
                className="absolute inset-0 rounded-pill bg-lime"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className={[
              "relative z-10 flex items-center gap-1.5",
              active ? "text-black" : "text-gray-500 hover:text-gray-200",
            ].join(" ")}>
              <FlagIcon country={flag} />
              <span className="text-[10px] font-black uppercase tracking-[0.18em]">{label}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const routeLocale: Locale | null = pathname.startsWith("/de") ? "de" : pathname.startsWith("/en") ? "en" : null;
  const locale = routeLocale ?? "en";
  const messages = getMessages(locale);
  const products = getProducts(locale);
  const languagePath = routeLocale ? pathname.slice(locale.length + 1) || "/" : pathname;
  const navLinks = [
    { label: messages.nav.home, href: "/" },
    { label: messages.nav.products, href: "/products" },
    { label: messages.nav.about, href: "/about" },
    { label: messages.nav.contact, href: "/contact" },
  ];
  const localHref = (href: string) => routeLocale ? localizePath(locale, href) : href;

  // Exact match for home, prefix match for everything else
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ───────────────────────────────────────────────────────── */}
          <Link href={localHref("/")} aria-label="Apollo Green Solutions — home">
            <ApolloLogo size={32} showText animate={false} />
          </Link>

          {/* ── Desktop nav links ───────────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => link.label === messages.nav.products ? (
              <div key={link.href} className="group relative">
                <Link href={localHref(link.href)} className={["inline-flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-150", isActive(localHref(link.href)) ? "bg-lime text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"].join(" ")}>
                  {link.label}<ChevronDown size={14} aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-gray-800 bg-gray-950 p-2 opacity-0 shadow-card-dark transition-all group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                  {products.map((product) => <Link key={product.id} href={localHref(`/products#${product.id}`)} className="block rounded-xl px-3 py-3 text-sm text-gray-300 hover:bg-lime hover:text-black"><span className="block font-bold">{product.name}</span><span className="mt-1 block text-xs opacity-70">{product.tagline}</span></Link>)}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={localHref(link.href)} className={["rounded-pill px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-150", isActive(localHref(link.href)) ? "bg-lime text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"].join(" ")}>{link.label}</Link>
            ))}
          </nav>

          {/* ── Desktop CTA ────────────────────────────────────────────────── */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <Button href={localHref("/contact")} size="sm">
              {messages.nav.contactUs}
            </Button>
            <LanguageToggle locale={locale} languagePath={languagePath} />
          </div>

          {/* ── Mobile hamburger ───────────────────────────────────────────── */}
          <button
            className="md:hidden rounded-pill p-2 text-gray-400 hover:text-lime transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? messages.nav.closeMenu : messages.nav.openMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-800 bg-black/95 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "rounded-pill px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all",
                    isActive(localHref(link.href))
                      ? "bg-lime text-black"
                      : "text-gray-400 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-4 border-l border-gray-800 pl-4">
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">{messages.nav.productLabel}</p>
                {products.map((product) => <Link key={product.id} href={localHref(`/products#${product.id}`)} onClick={() => setMobileOpen(false)} className="block rounded-pill px-4 py-2 text-sm text-gray-400 hover:text-lime">{product.name}</Link>)}
              </div>
              <div className="pt-3 border-t border-gray-800 mt-1">
                <Button
                  href={localHref("/contact")}
                  size="sm"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {messages.nav.contactUs}
                </Button>
                <div className="mt-3 flex justify-center">
                  <LanguageToggle locale={locale} languagePath={languagePath} />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
