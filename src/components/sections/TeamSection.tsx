/**
 * TeamSection.tsx
 *
 * Renders the leadership data from lib/data.ts without inventing additional
 * biographies or profile imagery.
 */

import { TEAM_MEMBERS } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function TeamSection() {
  return (
    <Section bg="lime-soft" id="team">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-indigo">People behind the platform</p>
        <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-black sm:text-6xl">Engineering with purpose.</h2>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM_MEMBERS.map((member) => (
          <Card key={member.id} variant="light" hover={false} padding="md" className="border-black/10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo text-xl font-black text-lime">{member.initials}</div>
            <h3 className="mt-7 text-xl font-black uppercase">{member.name}</h3>
            <p className="mt-1 text-sm font-bold text-indigo">{member.role}</p>
            <p className="mt-5 text-sm leading-6 text-black/65">{member.bio}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}