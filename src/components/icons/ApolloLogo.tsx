/**
 * ApolloLogo.tsx
 *
 * Apollo Green Solutions brand mark — four-armed asterisk/windmill SVG.
 * Reinterpretation of the brand symbol spec: four symmetrical arms radiating
 * from a central point, giving an energy/rotation feel without being a
 * direct copy of any existing mark.
 *
 * Neon lime glow is achieved via SVG filter + drop-shadow — more reliable
 * than CSS box-shadow on non-rectangular SVG elements.
 *
 * Props:
 *  - size: pixel dimension (width = height)
 *  - animate: toggles the glowPulse Tailwind animation (keyframes in tailwind.config.ts)
 *  - showText: whether to render the wordmark beside the icon
 *  - className: additional classes on the wrapper
 *
 * Kept as a pure presentational component — no state, no side-effects.
 * 'use client' is NOT needed; SVG + static classes render fine on the server.
 */

interface ApolloLogoProps {
  size?: number;
  className?: string;
  animate?: boolean;
  showText?: boolean;
}

export function ApolloLogo({
  size = 40,
  className = "",
  animate = false,
  showText = true,
}: ApolloLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* ── Brand Mark SVG ─────────────────────────────────────────────────── */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          animate
            ? "animate-glow-pulse"
            : "drop-shadow-[0_0_8px_rgba(212,255,107,0.85)]"
        }
        role={showText ? undefined : "img"}
        aria-label={showText ? undefined : "Apollo Green Solutions"}
        aria-hidden="true"
        focusable="false"
      >
        {/*
          Four-armed windmill asterisk:
          Each arm is a narrow tapered triangle radiating from the centre (cx=20, cy=20).
          Arms are rotated 90° apart for perfect symmetry.
          The slight taper (wider at base, pointed at tip) creates the propeller/energy feel.
        */}

        {/* Top arm */}
        <path
          d="M20 20 L16.5 3.5 Q20 0.5 23.5 3.5 Z"
          fill="#D4FF6B"
        />
        {/* Right arm */}
        <path
          d="M20 20 L36.5 16.5 Q39.5 20 36.5 23.5 Z"
          fill="#D4FF6B"
        />
        {/* Bottom arm */}
        <path
          d="M20 20 L23.5 36.5 Q20 39.5 16.5 36.5 Z"
          fill="#D4FF6B"
        />
        {/* Left arm */}
        <path
          d="M20 20 L3.5 23.5 Q0.5 20 3.5 16.5 Z"
          fill="#D4FF6B"
        />
        {/* Centre dot — anchors the arms visually */}
        <circle cx="20" cy="20" r="3.5" fill="#D4FF6B" />
      </svg>

      {/* ── Wordmark ───────────────────────────────────────────────────────── */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-white font-black text-base uppercase tracking-wider">
            Apollo
          </span>
          <span className="text-lime text-[10px] font-bold uppercase tracking-widest">
            Green Solutions
          </span>
        </div>
      )}
    </div>
  );
}
