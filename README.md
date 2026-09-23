# Apollo Green Solutions

Apollo Green Solutions is a B2B marketing site for an industrial energy management company. The site presents a practical energy intelligence platform for organisations that want to monitor, optimise, and decarbonise their operations.

The product story covers four connected areas:

- **IoT energy monitoring:** real-time telemetry and anomaly detection across industrial assets.
- **BESS optimisation:** battery energy storage dispatch, peak-demand reduction, and resilience.
- **Industrial retrofit:** non-invasive upgrades for legacy equipment and infrastructure.
- **Carbon reporting:** Scope 1, 2, and 3 tracking with standards-aware sustainability reporting.

## Live Site

**Vercel URL:** `Deploy after publication: add the production URL here`

The production URL is not available yet. After the first Vercel deployment, replace the placeholder above and set the same value as `NEXT_PUBLIC_SITE_URL` in the Vercel project environment variables.

## Technology Stack

| Technology | Why it is used |
| --- | --- |
| [Next.js 14 App Router](https://nextjs.org/docs/app) | Provides server-first rendering, route-level metadata, static pages, and a clean structure for a Vercel deployment. |
| [TypeScript](https://www.typescriptlang.org/) | Makes shared content models, component props, form payloads, and API boundaries explicit and safer to change. |
| [Tailwind CSS](https://tailwindcss.com/) | Keeps the visual system close to the component markup while centralising Apollo's colour, spacing, shadow, and typography tokens. |
| [Framer Motion](https://www.framer.com/motion/) | Adds restrained page, card, and interaction motion without turning an industrial B2B interface into a distracting product demo. |
| [react-hook-form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Provides lightweight form state and one shared validation schema for both the contact form and the server API route. |
| [lucide-react](https://lucide.dev/) | Supplies consistent, accessible interface icons without introducing a second visual language. |

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm
- Git

### Local setup

Clone the repository and enter the project directory:

```bash
git clone https://github.com/melikee46/apollo-energy-management.git
cd apollo-energy-management
```

Install dependencies:

```bash
npm install
```

Create the local environment file from the safe template:

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in the values required for your environment. Do not commit `.env.local`; it is intentionally ignored by git. The current contact demo can run without an email provider, but production delivery and shared rate limiting should be configured before launch.

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Validation commands

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
├── app/                  Next.js routes, page metadata, API routes, robots, and sitemap
├── components/
│   ├── ui/               Reusable primitives: Button, Badge, Card, and Section
│   ├── sections/         Page sections such as Hero, ProductGrid, TeamSection, and ContactForm
│   ├── layout/           Navbar, Footer, and page transition layout components
│   └── icons/            Brand-specific SVG icons, including the Apollo logo
└── lib/                  Central data, shared Zod validation, and rate limiting
```

Content such as navigation links, products, team members, statistics, and footer links is centralised in `src/lib/data.ts`. This keeps content changes separate from presentation logic and gives the TypeScript compiler a single source of truth for shared structures.

## Design Decisions

### High-contrast industrial palette

The visual system uses a black foundation, neon lime accent, pastel lime surface, royal indigo section blocks, and white foreground text. Black gives the site the authority and focus expected of an industrial operations tool. Neon lime signals energy, status, and action. Royal indigo creates a strong section break and adds depth without relying on a dark-blue-only interface.

### Pills and controlled glow

Pill-shaped navigation items and calls to action make the interface feel direct and easy to scan. Neon glow is reserved for the Apollo mark, important calls to action, and selected status cues so it feels like an energy signal rather than decoration applied everywhere.

### Motion with restraint

Motion is limited to page entrance transitions, subtle card lift, and small button feedback. The goal is to make the interface feel responsive while preserving the calm, operational character expected by a B2B industrial audience. The interface remains usable when motion is reduced by the browser or operating system.

## Security and Reliability

The project includes the following baseline protections:

- **Environment management:** real `.env`, `.env.local`, and related environment files are ignored. Only `.env.local.example`, which contains empty placeholders and no secrets, is tracked.
- **Shared input validation:** the contact form and `/api/contact` route use the same Zod schema, preventing the client and server rules from drifting apart.
- **Input normalisation:** submitted text is trimmed and angle brackets are removed before the current handler logs the enquiry.
- **Honeypot protection:** a hidden `website` field rejects automated submissions without exposing implementation details through a specific error message.
- **Rate limiting:** the contact endpoint uses a sliding-window in-memory limiter. A shared Redis-backed limiter should replace it for a multi-instance production deployment.
- **Security headers:** `next.config.mjs` configures CSP, `X-Frame-Options`, `X-Content-Type-Options`, HSTS, Referrer-Policy, and Permissions-Policy headers.
- **Generic API errors:** the contact endpoint does not return internal validation or processing details to callers.

These controls matter because the contact route accepts untrusted public input, while the rest of the site should remain deployable without exposing configuration or weakening browser isolation.

## What I Would Improve With More Time

- Replace the in-memory rate limiter with Upstash Redis for consistent limits across Vercel instances.
- Connect the contact route to a transactional email provider and add delivery observability without logging personal message content.
- Add an OG image and a small set of real product or installation photographs once approved brand assets are available.
- Add automated end-to-end tests for navigation, mobile menu behaviour, form validation, honeypot rejection, and rate-limit responses.
- Add a CMS or content workflow if product specifications and team content will be edited by non-developers.

## Deployment

The project is structured for Vercel:

1. Import `https://github.com/melikee46/apollo-energy-management.git` into Vercel.
2. Configure `NEXT_PUBLIC_SITE_URL` with the final production URL.
3. Add any email or shared rate-limit credentials as Vercel environment variables, never in source control.
4. Deploy the `main` branch.

After deployment, update the **Live Site** section above and the GitHub repository's **About → Website** field with the production URL.
