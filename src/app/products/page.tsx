/** Product catalogue page for Apollo's industrial energy platform. */
import type { Metadata } from "next";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = { title: "Products", description: "Explore Apollo's energy monitoring, storage, retrofit, and carbon reporting products.", openGraph: { title: "Products | Apollo Green Solutions", description: "Explore Apollo's energy monitoring, storage, retrofit, and carbon reporting products.", type: "website", url: "/products", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions products" }] } };
export default function ProductsPage() {
	return <><ProductGrid heading="Our products." showViewAllLink={false} /><CTASection title="Find the right starting point." /></>;
}