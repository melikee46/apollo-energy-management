/**
 * Button.tsx
 *
 * Pill-shaped CTA button — the primary interactive element per brand spec.
 * All edges are fully rounded (rounded-pill = border-radius:9999px).
 *
 * Three variants:
 *  - 'primary'  : lime bg + black text + glow on hover
 *  - 'secondary': transparent + lime border/text, fills lime on hover
 *  - 'ghost'    : transparent, white text, no border, hover text → lime
 *
 * Three sizes: sm, md, lg — covering nav, inline, and hero CTAs.
 *
 * Accepts an optional `href` prop to render as a Next.js <Link> instead
 * of a <button> — avoids wrapping every link CTA in a separate component.
 *
 * Framer Motion whileHover/whileTap: subtle scale only — appropriate for
 * a B2B industrial audience; no bounce or spring exaggeration.
 *
 * 'use client' required for Framer Motion.
 */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "indigo" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

interface ButtonProps extends BaseProps {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  type?: never;
  onClick?: () => void;
}

type Props = ButtonProps | LinkButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-lime text-black font-bold hover:bg-lime-dim hover:shadow-glow-lime-sm",
  secondary:
    "bg-transparent border-2 border-lime text-lime font-bold hover:bg-lime hover:text-black",
  indigo:
    "bg-indigo text-white font-bold hover:bg-indigo-dark hover:shadow-glow-indigo",
  ghost:
    "bg-transparent text-white font-semibold hover:text-lime",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

const BASE_CLASSES = [
  "inline-flex items-center justify-center gap-2",
  "rounded-pill",
  "uppercase tracking-wider",
  "transition-colors duration-150",
  "will-change-transform",
  "cursor-pointer select-none",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black",
].join(" ");

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled = false,
  ...rest
}: Props) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    disabled ? "opacity-40 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in rest && rest.href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={rest.href}
          className={classes}
          onClick={rest.onClick}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  const { type = "button", onClick } = rest as ButtonProps;

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
