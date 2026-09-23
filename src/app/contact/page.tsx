/** Contact page for consultation enquiries. */
import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
	title: "Contact",
	description: "Start a conversation about your site's energy performance.",
	openGraph: {
		title: "Contact Apollo Green Solutions",
		description: "Start a conversation about your site's energy performance.",
		type: "website",
		url: "/contact",
		images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact Apollo Green Solutions" }],
	},
};

export default function ContactPage() {
	return (
		<Section bg="black" className="py-16 lg:py-20">
			<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
				<div className="flex flex-col justify-center">
					<p className="text-sm font-bold uppercase tracking-widest text-lime">Contact Apollo</p>
					<h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">
						Let&apos;s find your next move.
					</h1>
					<p className="mt-8 max-w-md text-lg leading-8 text-gray-300">
						Share a little about your site and your goals. Our team will come back with a focused first conversation.
					</p>
					<div className="mt-10 space-y-4 text-sm text-gray-300">
						<div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-4">
							<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">Email</p>
							<a href="mailto:hello@apollo-greensolutions.com" className="mt-2 inline-block text-base font-semibold text-white hover:text-lime">hello@apollo-greensolutions.com</a>
						</div>
						<div className="rounded-2xl border border-gray-800 bg-gray-950/70 p-4">
							<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">Response window</p>
							<p className="mt-2 text-base font-semibold text-white">Within 1–2 business days</p>
						</div>
					</div>
				</div>
				<div className="rounded-[2rem] border border-gray-800 bg-gray-950 p-6 sm:p-8 lg:p-10">
					<ContactForm />
				</div>
			</div>
		</Section>
	);
}