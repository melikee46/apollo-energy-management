import type { Config } from "tailwindcss";

/**
 * tailwind.config.ts
 *
 * Apollo Green Solutions — Centralised design tokens.
 * All brand colours, typography scale, and shadows live here.
 * Components reference only token names — no arbitrary values scattered across files.
 *
 * Palette rationale:
 *  - Black base: industrial authority, high-contrast canvas
 *  - Lime (#E3F5B9): soft-energy accent — CTAs, logo glow, highlighted words
 *  - Lime-soft (#EAF7D1): pastel light surface — card/section backgrounds with dark text
 *  - Indigo (#1E1EDB): bold section break — interrupts the black rhythm, adds brand depth
 *  - White: headings and body copy on dark backgrounds
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand core ──────────────────────────────────────────────
        lime: {
          DEFAULT: "#E3F5B9",   // pastel accent — buttons, glows, highlights
          soft: "#EAF7D1",      // pastel surface — card/section backgrounds
          dim: "#D1E39D",       // slightly deeper for hover states
        },
        indigo: {
          DEFAULT: "#1E1EDB",   // royal indigo — full-section block colour
          dark: "#1414A8",      // hover / active state
          light: "#4444EE",     // lighter tint for accents on indigo bg
        },
        // ── Neutrals ────────────────────────────────────────────────
        black: "#000000",
        white: "#FFFFFF",
        gray: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#1a1a1a",
          700: "#262626",
          600: "#404040",
          500: "#666666",
          400: "#999999",
          300: "#cccccc",
          200: "#e5e5e5",
          100: "#f5f5f5",
        },
      },

      fontFamily: {
        // Inter loaded via next/font — geometric, legible, B2B-appropriate
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "display-2xl": ["4.5rem",  { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-xl":  ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg":  ["3rem",    { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-md":  ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.015em" }],
        "display-sm":  ["1.875rem",{ lineHeight: "1.25", letterSpacing: "-0.01em" }],
      },

      letterSpacing: {
        widest2: "0.2em",
        widest3: "0.3em",
      },

      borderRadius: {
        // Pill shape is the dominant UI element per brand spec
        pill: "9999px",
      },

      boxShadow: {
        // Neon glow effects for logo and accent elements
        "glow-lime":    "0 0 20px rgba(227,245,185,0.28), 0 0 60px rgba(227,245,185,0.12)",
        "glow-lime-sm": "0 0 10px rgba(227,245,185,0.24), 0 0 30px rgba(227,245,185,0.10)",
        "glow-indigo":  "0 0 24px rgba(30,30,219,0.5),  0 0 60px rgba(30,30,219,0.2)",
        "card-dark":    "0 2px 8px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
        "card-light":   "0 2px 12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.06)",
      },

      backgroundImage: {
        // Subtle grid overlay — gives the geometric / data-viz feel
        "grid-dark": "linear-gradient(rgba(227,245,185,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(227,245,185,0.03) 1px, transparent 1px)",
        "grid-indigo": "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },

      backgroundSize: {
        "grid-60": "60px 60px",
        "grid-40": "40px 40px",
      },

      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow":  "spin 12s linear infinite",
      },

      keyframes: {
        glowPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(227,240,184,0.45))" },
          "50%":       { filter: "drop-shadow(0 0 20px rgba(227,240,184,0.7))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
