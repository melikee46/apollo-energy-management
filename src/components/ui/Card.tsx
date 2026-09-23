/**
 * Card.tsx
 *
 * Reusable card surface with two visual variants:
 *  - 'dark' : dark gray background for use on black sections (most common)
 *  - 'light': pastel lime-soft background for use in light sections,
 *             maintains contrast with dark text per accessibility guidelines
 *
 * The hover animation uses Framer Motion whileHover for a subtle lift + border
 * glow — giving tactile feedback without consumer-product bounciness.
 *
 * hover=false disables animations for static contexts (e.g. stat cards).
 *
 * 'use client' required for Framer Motion whileHover.
 */
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardVariant = "dark" | "light";
type CardPadding = "sm" | "md" | "lg";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  hover?: boolean;
  padding?: CardPadding;
}

const VARIANT_CLASSES: Record<CardVariant, string> = {
  dark:  "bg-gray-900 border border-gray-800 text-white shadow-card-dark",
  light: "bg-lime-soft border border-lime/20 text-black shadow-card-light",
};

const PADDING_CLASSES: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

// Hover shadow per variant — applied via Framer Motion so CSS shadow-card
// transitions smoothly rather than snapping
const HOVER_SHADOW: Record<CardVariant, string> = {
  dark:  "0 4px 24px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,255,107,0.2)",
  light: "0 8px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.08)",
};

export function Card({
  children,
  variant = "dark",
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <motion.div
      className={[
        "rounded-2xl",
        VARIANT_CLASSES[variant],
        PADDING_CLASSES[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      whileHover={
        hover
          ? { y: -4, boxShadow: HOVER_SHADOW[variant] }
          : undefined
      }
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
