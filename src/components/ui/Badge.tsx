/**
 * Badge.tsx
 *
 * Small pill label for product categories, section eyebrows, and status chips.
 * Keeps the pill/capsule motif consistent throughout the design system.
 *
 * Four variants matching the brand palette:
 *  - 'lime'   : solid lime bg + black text — high-emphasis labels
 *  - 'indigo' : solid indigo bg + white text — used on indigo sections
 *  - 'outline': transparent + lime border/text — on dark backgrounds
 *  - 'dark'   : subtle gray bg — secondary / muted labels
 *
 * Server Component — no interactivity, no state.
 */

import type { ReactNode } from "react";

type BadgeVariant = "lime" | "indigo" | "outline" | "dark";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  lime:    "bg-lime text-black font-bold",
  indigo:  "bg-indigo text-white font-semibold",
  outline: "border border-lime text-lime font-semibold",
  dark:    "bg-gray-800 text-gray-400 font-medium border border-gray-700",
};

export function Badge({
  children,
  variant = "lime",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1",
        "rounded-pill px-3 py-1",
        "text-xs uppercase tracking-widest",
        VARIANT_CLASSES[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
