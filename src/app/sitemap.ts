/** Public route index used by search crawlers. */
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apollo-energy-management.vercel.app";
	const paths = ["/", "/products", "/about", "/contact", "/privacy", "/terms", "/cookies"];
	const localePaths = ["/en", "/de"].flatMap((locale) => paths.map((path) => `${locale}${path === "/" ? "" : path}`));
	return [...paths, ...localePaths].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}