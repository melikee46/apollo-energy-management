/**
 * FeatureGrid.tsx
 *
 * Compact proof section describing the operating model behind Apollo's
 * platform without duplicating product-specific copy.
 */

import { BarChart3, Leaf, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const FEATURES = [
  { icon: ActivityIcon, title: "See the system", text: "One live view across meters, assets, storage, and production operations." },
  { icon: Zap, title: "Act at the edge", text: "Fast control loops respond to demand and anomalies before they become downtime." },
  { icon: BarChart3, title: "Prove the outcome", text: "Board-ready reporting connects every intervention to cost and carbon impact." },
  { icon: Leaf, title: "Build resilience", text: "Modernise existing infrastructure while progressing toward a lower-carbon future." },
];

function ActivityIcon({ size = 24 }: { size?: number }) {
  return <ShieldCheck size={size} aria-hidden="true" />;
}

export function FeatureGrid() {
  return (
    <Section bg="indigo" id="approach">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-lime">The Apollo approach</p>
        <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-6xl">Operational clarity at every scale.</h2>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <Card key={title} variant="light" padding="md">
            <Icon className="text-indigo" size={28} aria-hidden="true" />
            <h3 className="mt-10 text-xl font-black uppercase">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-black/70">{text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}