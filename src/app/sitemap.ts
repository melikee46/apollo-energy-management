/** Public route index used by search crawlers. */
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apollo-green-solutions.vercel.app"; return ["/", "/products", "/about", "/contact"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() })); }