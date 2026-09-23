/**
 * ProductGrid.tsx
 *
 * Product catalogue driven entirely by the central data module. Icon names
 * are resolved here so the data layer remains framework-independent.
 */

import { Activity, Battery, Leaf, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { getMessages, getProducts, localizePath, type Locale } from "@/lib/i18n";

const ICONS: Record<string, LucideIcon> = { Activity, Battery, Settings2, Leaf };

interface ProductGridProps {
  heading?: string;
  showViewAllLink?: boolean;
  locale?: Locale;
}

export function ProductGrid({
  heading = "Built for the real world.",
  showViewAllLink = true,
  locale = "en",
}: ProductGridProps) {
  const messages = getMessages(locale);
  const products = getProducts(locale);

  return (
    <Section bg="black" id="products" grid>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Badge variant="outline">{messages.products.eyebrow}</Badge>
          <h2 className="mt-5 text-4xl font-black uppercase text-white sm:text-6xl">{heading}</h2>
        </div>
        {showViewAllLink && (
          <a href={localizePath(locale, "/products")} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-lime hover:text-white">
            {messages.products.viewAll} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </div>
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {products.map((product) => {
          const Icon = ICONS[product.icon] ?? Activity;
          return (
            <div key={product.id} id={product.id}>
            <Card className="group" padding="lg">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime text-black">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{product.id}</span>
              </div>
              <h3 className="mt-8 text-2xl font-black uppercase text-white">{product.name}</h3>
              <p className="mt-2 font-semibold text-lime">{product.tagline}</p>
              <p className="mt-5 text-sm leading-7 text-gray-400">{product.description}</p>
              <div className="mt-7 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                {product.specs.slice(0, 2).map((spec) => (
                  <div key={spec.label}>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{spec.label}</p>
                    <p className="mt-1 text-sm font-semibold text-white">{spec.value}</p>
                  </div>
                ))}
              </div>
            </Card>
            </div>
          );
        })}
      </div>
    </Section>
  );
}