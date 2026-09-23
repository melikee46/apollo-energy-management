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
import { NAV_LINKS, PRODUCTS } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Exact match for home, prefix match for everything else
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo ───────────────────────────────────────────────────────── */}
          <Link href="/" aria-label="Apollo Green Solutions — home">
            <ApolloLogo size={32} showText animate={false} />
          </Link>

          {/* ── Desktop nav links ───────────────────────────────────────────── */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => link.label === "Products" ? (
              <div key={link.href} className="group relative">
                <Link href={link.href} className={["inline-flex items-center gap-1 rounded-pill px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-150", isActive(link.href) ? "bg-lime text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"].join(" ")}>
                  {link.label}<ChevronDown size={14} aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-gray-800 bg-gray-950 p-2 opacity-0 shadow-card-dark transition-all group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
                  {PRODUCTS.map((product) => <Link key={product.id} href={`/products#${product.id}`} className="block rounded-xl px-3 py-3 text-sm text-gray-300 hover:bg-lime hover:text-black"><span className="block font-bold">{product.name}</span><span className="mt-1 block text-xs opacity-70">{product.tagline}</span></Link>)}
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={["rounded-pill px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-150", isActive(link.href) ? "bg-lime text-black" : "text-gray-400 hover:bg-white/5 hover:text-white"].join(" ")}>{link.label}</Link>
            ))}
          </nav>

          {/* ── Desktop CTA ────────────────────────────────────────────────── */}
          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Contact Us
            </Button>
          </div>

          {/* ── Mobile hamburger ───────────────────────────────────────────── */}
          <button
            className="md:hidden rounded-pill p-2 text-gray-400 hover:text-lime transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
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
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={[
                    "rounded-pill px-4 py-3 text-sm font-semibold uppercase tracking-wider transition-all",
                    isActive(link.href)
                      ? "bg-lime text-black"
                      : "text-gray-400 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-4 border-l border-gray-800 pl-4">
                <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">Products</p>
                {PRODUCTS.map((product) => <Link key={product.id} href={`/products#${product.id}`} onClick={() => setMobileOpen(false)} className="block rounded-pill px-4 py-2 text-sm text-gray-400 hover:text-lime">{product.name}</Link>)}
              </div>
              <div className="pt-2 border-t border-gray-800 mt-1">
                <Button
                  href="/contact"
                  size="sm"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
