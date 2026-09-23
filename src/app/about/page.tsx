/** Company page with Apollo's operating principles, outcomes, and team. */
import type { Metadata } from "next";
import { TeamSection } from "@/components/sections/TeamSection";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { SERVICE_STATS } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "Meet the people building practical energy intelligence at Apollo Green Solutions." };
export default function AboutPage() {
  return <><Section bg="black" grid><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-widest text-lime">About Apollo</p><h1 className="mt-6 text-5xl font-black uppercase leading-none text-white sm:text-7xl">Energy progress, made practical.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">We combine industrial engineering, intelligent software, and sustainability expertise to help teams make better decisions with the energy systems they already have.</p></div><div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">{SERVICE_STATS.map((stat) => <div key={stat.label} className="border-t border-lime pt-4"><p className="text-4xl font-black text-lime">{stat.value}</p><p className="mt-2 text-sm text-gray-400">{stat.label}</p></div>)}</div></Section><TeamSection /><CTASection title="Build the next chapter with us." /></>;
}