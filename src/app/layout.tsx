import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const inter = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://apollo-energy-management.vercel.app"),
  title: { default: "Apollo Green Solutions", template: "%s | Apollo Green Solutions" },
  description: "Industrial-grade energy intelligence for a lower-carbon future.",
  openGraph: {
    title: "Apollo Green Solutions",
    description: "Industrial-grade energy intelligence for a lower-carbon future.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Apollo Green Solutions" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-16"><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
