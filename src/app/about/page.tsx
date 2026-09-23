/** Company page with Apollo's operating principles, outcomes, and team. */
import type { Metadata } from "next";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SERVICE_STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the people building practical energy intelligence at Apollo Green Solutions.",
  openGraph: {
    title: "About Apollo Green Solutions",
    description: "Meet the people building practical energy intelligence at Apollo Green Solutions.",
    type: "website",
    url: "/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "The Apollo Green Solutions team" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <Section bg="black" grid>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-lime">About Apollo</p>
          <h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">
            Energy progress, made practical.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
            We combine industrial engineering, intelligent software, and sustainability expertise to help teams make better decisions with the energy systems they already have.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {SERVICE_STATS.map((stat) => (
            <div key={stat.label} className="border-t border-lime pt-4">
              <p className="text-4xl font-black text-lime">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <TeamSection />
      <Section bg="black" id="careers" narrow>
        <p className="text-sm font-bold uppercase tracking-widest text-lime">Careers</p>
        <h2 className="mt-4 text-4xl font-black uppercase text-white sm:text-6xl">
          Help build a more resilient energy future.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
          We are growing a team that cares about practical engineering, measurable outcomes, and the people who rely on critical infrastructure.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-flex rounded-pill bg-lime px-6 py-3 text-sm font-black uppercase tracking-wider text-black hover:bg-lime-dim"
        >
          Start a conversation
        </a>
      </Section>
      <CTASection title="Build the next chapter with us." />
    </>
  );
}