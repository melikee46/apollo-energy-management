/**
 * next.config.mjs
 *
 * Security headers are set here at the framework level rather than in
 * middleware so they apply to all responses (pages, API routes, static assets)
 * without adding per-request overhead.
 *
 * CSP uses a strict allowlist. 'unsafe-inline' for styles is required by
 * Tailwind's JIT output in dev; tighten with nonces in a future iteration.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict React mode for catching side-effect bugs early.
  reactStrictMode: true,

  // Optimise production bundle — removes React DevTools in prod automatically.
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
      ? { exclude: ["error", "warn"] }
      : false,
  },

  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            // Prevent browsers from MIME-sniffing responses
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Block the site from being embedded in iframes (clickjacking protection)
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Minimal referrer information for privacy
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Force HTTPS for 1 year; include subdomains
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            // Restrict browser features
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            // Content Security Policy
            // - default-src: only self
            // - script-src: self + 'unsafe-eval' needed for Next.js HMR in dev
            // - style-src: self + unsafe-inline for Tailwind
            // - img-src: self + data URIs (for Next/Image inline placeholders)
            // - connect-src: self + Vercel analytics
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://vitals.vercel-insights.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  images: {
    // Allow external image domains here if needed in future.
    // For now, all images are local so no remotePatterns required.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
