/**
 * Hero.tsx
 *
 * Primary landing section for Apollo Green Solutions. It keeps the first
 * viewport focused on the energy-intelligence proposition and two clear CTAs.
 */

import { ArrowUpRight, Activity } from "lucide-react";
import { ApolloLogo } from "@/components/icons/ApolloLogo";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export function Hero() {
  return (
    <Section bg="black" grid className="min-h-[720px] pt-16 lg:min-h-[800px]">
      <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div className="max-w-3xl">
          <Badge variant="outline">Industrial energy intelligence</Badge>
          <h1 className="mt-8 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-display-2xl">
            Make every
            <span className="block text-lime">watt count.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300 sm:text-xl">
            Apollo turns complex industrial energy systems into measurable,
            actionable performance. Monitor, optimise, and decarbonise from one
            intelligent platform.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" size="lg">
              Book a consultation <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              Explore platform
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-8 rounded-full bg-lime/10 blur-3xl" aria-hidden="true" />
          <div className="relative aspect-square rounded-[2rem] border border-lime/30 bg-gray-950 p-8 shadow-glow-lime-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Live site overview
              </span>
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime">
                <span className="h-2 w-2 rounded-full bg-lime shadow-glow-lime-sm" />
                Online
              </span>
            </div>
            <div className="flex h-[calc(100%-3rem)] flex-col justify-between pt-8">
              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Energy efficiency</p>
                    <p className="mt-2 text-5xl font-black text-white">94.8%</p>
                  </div>
                  <Activity className="mb-2 text-lime" size={32} aria-hidden="true" />
                </div>
                <div className="mt-8 flex h-28 items-end gap-2">
                  {[42, 55, 48, 72, 64, 82, 76, 94, 88, 100, 92, 96].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t bg-lime/80" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-indigo p-4">
                  <p className="text-xs uppercase tracking-wider text-white/70">Peak demand</p>
                  <p className="mt-2 text-2xl font-black text-white">-32%</p>
                </div>
                <div className="rounded-2xl bg-lime-soft p-4 text-black">
                  <p className="text-xs uppercase tracking-wider text-black/60">CO₂ avoided</p>
                  <p className="mt-2 text-2xl font-black">1.2M t</p>
                </div>
              </div>
            </div>
          </div>
          <ApolloLogo size={42} showText={false} animate className="absolute -right-5 -top-5" />
        </div>
      </div>
    </Section>
  );
}