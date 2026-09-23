/** Search crawler policy for the public Apollo site. */
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }, sitemap: "https://apollo-green-solutions.vercel.app/sitemap.xml" }; }