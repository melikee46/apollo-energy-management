/** Product catalogue page for Apollo's industrial energy platform. */
import type { Metadata } from "next";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Products", description: "Explore Apollo's energy monitoring, storage, retrofit, and carbon reporting products." };
export default function ProductsPage() { return <><ProductGrid /><CTASection title="Find the right starting point." /></>; }