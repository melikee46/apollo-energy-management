/**
 * Section.tsx
 *
 * Top-level page section wrapper. Responsibilities:
 *  - Consistent horizontal padding across all breakpoints (px-4/6/8)
 *  - Consistent max-width container (max-w-7xl, or max-w-4xl when narrow=true)
 *  - Consistent vertical rhythm (py-20 lg:py-28)
 *  - Background variant selection (black | indigo | lime-soft | white | gray-dark)
 *  - Optional subtle grid overlay for the geometric/data-viz brand aesthetic
 *
 * Using a shared wrapper guarantees the page-section rhythm
 * (black → indigo → lime-soft) stays visually consistent without
 * copy-pasting padding and max-width classes into every page.
 *
 * Server Component — pure layout, no interactivity.
 */

import type { ReactNode } from "react";

type SectionBg = "black" | "indigo" | "lime-soft" | "white" | "gray-dark";

interface SectionProps {
  children: ReactNode;
  bg?: SectionBg;
  /** Renders a faint grid overlay (lime on dark, white on indigo) */
  grid?: boolean;
  className?: string;
  id?: string;
  /** Constrains content to max-w-4xl instead of max-w-7xl */
  narrow?: boolean;
}

const BG_CLASSES: Record<SectionBg, string> = {
  "black":     "bg-black",
  "indigo":    "bg-indigo",
  "lime-soft": "bg-lime-soft",
  "white":     "bg-white",
  "gray-dark": "bg-gray-900",
};

// Grid overlay is colour-specific: lime-tinted on dark, white-tinted on indigo
const GRID_CLASSES: Record<SectionBg, string> = {
  "black":     "bg-grid-dark",
  "indigo":    "bg-grid-indigo",
  "lime-soft": "",   // grid not used on light bg — too busy
  "white":     "",
  "gray-dark": "bg-grid-overlay",
};

export function Section({
  children,
  bg = "black",
  grid = false,
  className = "",
  id,
  narrow = false,
}: SectionProps) {
  const gridClass = grid ? GRID_CLASSES[bg] : "";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${BG_CLASSES[bg]} ${className}`}
    >
      {/* Grid overlay — decorative, pointer-events disabled */}
      {grid && gridClass && (
        <div
          className={`absolute inset-0 pointer-events-none ${gridClass} bg-grid-60`}
          aria-hidden="true"
        />
      )}

      <div
        className={[
          "relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28",
          narrow ? "max-w-4xl" : "max-w-7xl",
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
