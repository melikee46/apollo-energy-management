/** Contact page for consultation enquiries. */
import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Contact", description: "Start a conversation about your site's energy performance." };
export default function ContactPage() { return <Section bg="black"><div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"><div><p className="text-sm font-bold uppercase tracking-widest text-lime">Contact Apollo</p><h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">Let&apos;s find your next move.</h1><p className="mt-8 max-w-md text-lg leading-8 text-gray-300">Share a little about your site and your goals. Our team will come back with a focused first conversation.</p></div><div className="rounded-[2rem] border border-gray-800 bg-gray-950 p-6 sm:p-10"><ContactForm /></div></div></Section>; }