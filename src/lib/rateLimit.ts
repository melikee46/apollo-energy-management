/**
 * rateLimit.ts
 *
 * Sliding-window in-memory rate limiter for the contact form API route.
 * Uses a Map<ip, timestamp[]> to track request timestamps per IP.
 *
 * Why in-memory instead of Redis?
 * For a portfolio/MVP deployment this is sufficient and has zero external
 * dependencies. The known limitations are documented below and in the README.
 *
 * Known limitations (acknowledged in README "What I'd improve" section):
 *  - State resets on server restart / cold start — acceptable for demo use.
 *  - Not shared across multiple Node.js instances (e.g. Vercel edge replicas).
 *    For multi-instance production, replace with Upstash Redis:
 *    UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (env vars pre-wired
 *    in .env.local.example).
 *  - This is defence-in-depth, not the only layer — honeypot runs alongside.
 */

/** Request timestamps keyed by client IP address */
const rateLimitMap = new Map<string, number[]>();

/** Sliding window duration: 1 minute */
const WINDOW_MS = 60_000;

/** Maximum contact form submissions per IP within the window */
const MAX_REQUESTS = 5;

/** Maximum map size before a cleanup sweep runs (prevents unbounded growth) */
const MAX_MAP_SIZE = 10_000;

export interface RateLimitResult {
  allowed: boolean;
  /** Milliseconds until the client may retry. 0 when allowed. */
  retryAfterMs: number;
}

/**
 * Checks whether the given IP is within the rate limit.
 * Side-effect: records the current request timestamp on allowed requests.
 */
export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  // Filter out timestamps outside the current window
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => t > windowStart
  );

  if (timestamps.length >= MAX_REQUESTS) {
    // Oldest timestamp in the window determines when the window slides free
    const oldestInWindow = timestamps[0];
    const retryAfterMs = WINDOW_MS - (now - oldestInWindow);
    return { allowed: false, retryAfterMs };
  }

  // Record this request
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);

  // Periodic cleanup: if the map grows very large, purge fully-expired entries.
  // This runs O(n) but only once per MAX_MAP_SIZE insertions — negligible cost.
  // Array.from is used here because Map.entries() is not directly iterable
  // in all tsconfig target settings without --downlevelIteration.
  if (rateLimitMap.size > MAX_MAP_SIZE) {
    Array.from(rateLimitMap.entries()).forEach(([key, times]: [string, number[]]) => {
      if (times.every((t: number) => t <= windowStart)) {
        rateLimitMap.delete(key);
      }
    });
  }

  return { allowed: true, retryAfterMs: 0 };
}
