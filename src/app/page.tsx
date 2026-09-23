import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";

export const metadata: Metadata = {
  title: "Industrial energy intelligence",
  description: "Monitor, optimise, and decarbonise industrial energy systems with Apollo.",
  openGraph: {
    title: "Industrial energy intelligence | Apollo Green Solutions",
    description: "Monitor, optimise, and decarbonise industrial energy systems with Apollo.",
    type: "website",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions industrial energy intelligence" }],
  },
};

export default function Home() {
  return (
    <><Hero /><FeatureGrid /><ProductGrid /><CTASection /></>
  );
}
