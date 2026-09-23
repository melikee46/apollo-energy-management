/**
 * data.ts
 *
 * Single source of truth for all site content:
 * nav links, products, team members, stats, footer links.
 *
 * Centralised here so that:
 *  - Components never hard-code copy — any content update is a one-line change here.
 *  - TypeScript interfaces enforce shape consistency across every consumer.
 *  - The data layer has zero React/Next.js imports, keeping it portable and testable.
 *
 * Icon names are plain strings (e.g. 'Activity') that are resolved to actual
 * Lucide components in the consuming component (ProductGrid.tsx). This keeps
 * React out of the data layer while still being type-safe.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Lucide icon component name — resolved to the actual icon in ProductGrid.tsx */
  icon: string;
  specs: ProductSpec[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Two-letter initials rendered inside the avatar circle */
  initials: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home",     href: "/" },
  { label: "Products", href: "/products" },
  { label: "About",    href: "/about" },
  { label: "Contact",  href: "/contact" },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    id: "iot-monitoring",
    name: "GridSense IoT",
    tagline: "Real-Time Energy Intelligence",
    description:
      "Industrial-grade sensor mesh that delivers sub-second telemetry from every asset on your site — transformers, motors, HVAC, and production lines — unified in a single operational dashboard. Edge-based ML flags anomalies before they become failures.",
    icon: "Activity",
    specs: [
      { label: "Sampling Rate",    value: "100 ms" },
      { label: "Protocol Support", value: "Modbus, BACnet, MQTT" },
      { label: "Data Retention",   value: "10 years" },
      { label: "Edge Processing",  value: "On-device ML" },
    ],
  },
  {
    id: "bess",
    name: "VaultStore BESS",
    tagline: "Battery Storage Optimisation",
    description:
      "AI-driven battery energy storage systems that cut peak-demand charges by up to 40%, provide seamless UPS failover, and participate in grid-ancillary revenue streams automatically. Fully integrated with GridSense telemetry for closed-loop dispatch.",
    icon: "Battery",
    specs: [
      { label: "Round-Trip Efficiency", value: "≥ 94%" },
      { label: "Capacity Range",        value: "50 kWh – 10 MWh" },
      { label: "Response Time",         value: "< 20 ms" },
      { label: "Warranty",              value: "15 years" },
    ],
  },
  {
    id: "retrofit",
    name: "ReVolt Retrofit",
    tagline: "Modernise Without Replacement",
    description:
      "Extend the life and intelligence of legacy industrial equipment through non-invasive hardware overlays and firmware upgrades — achieving 20–35% efficiency gains without costly capital replacement. Compatible with any installation meeting IEC 60364 or NEC standards.",
    icon: "Settings2",
    specs: [
      { label: "Compatibility",    value: "IEC 60364 / NEC" },
      { label: "Installation",     value: "Non-invasive overlay" },
      { label: "Payback Period",   value: "18–36 months" },
      { label: "Efficiency Gain",  value: "20–35%" },
    ],
  },
  {
    id: "carbon",
    name: "CarbonLens",
    tagline: "Sustainability & Carbon Reporting",
    description:
      "Automated Scope 1, 2 and 3 emissions tracking aligned to GHG Protocol standards, with board-ready PDF and API-export reports for ESG disclosure, ISO 14064, and upcoming CSRD compliance. Direct integrations with utility, ERP, and supply-chain data sources.",
    icon: "Leaf",
    specs: [
      { label: "Standards",      value: "GHG Protocol, ISO 14064" },
      { label: "Reporting",      value: "CSRD, TCFD, CDP ready" },
      { label: "Data Sources",   value: "Direct + API integrations" },
      { label: "Export Formats", value: "PDF, CSV, REST API" },
    ],
  },
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t1",
    name: "Elif Saraç",
    role: "Chief Executive Officer",
    bio: "Former energy systems architect at Siemens Smart Infrastructure. Elif spent 12 years designing grid-scale automation before founding Apollo Green Solutions in 2019 to bring enterprise-grade energy intelligence to mid-market industrial clients.",
    initials: "ES",
  },
  {
    id: "t2",
    name: "Marcus Veen",
    role: "Chief Technology Officer",
    bio: "PhD in power electronics from TU Delft. Marcus leads all hardware and firmware development, holding 7 patents in battery management systems and edge-processing architectures for industrial IoT environments.",
    initials: "MV",
  },
  {
    id: "t3",
    name: "Lena Hoffmann",
    role: "Head of Sustainability",
    bio: "Certified GHG verifier and former ESG analyst at KPMG. Lena architects the CarbonLens reporting engine and advises clients on CSRD readiness and science-based targets alignment across Scope 1, 2 and 3.",
    initials: "LH",
  },
  {
    id: "t4",
    name: "Kerem Aydın",
    role: "VP of Engineering",
    bio: "Ex-Bosch engineering lead with 15 years in industrial automation. Kerem oversees field deployments and retrofit integrations, ensuring every installation meets IEC safety standards and client uptime requirements.",
    initials: "KA",
  },
];

// ─── About Page Stats ─────────────────────────────────────────────────────────

export const SERVICE_STATS: ServiceStat[] = [
  { value: "200+",   label: "Industrial Sites" },
  { value: "40%",    label: "Avg. Peak Demand Reduction" },
  { value: "1.2M t", label: "CO₂ Avoided Annually" },
  { value: "99.7%",  label: "Platform Uptime" },
];

// ─── Footer Links ─────────────────────────────────────────────────────────────

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us",  href: "/about" },
      { label: "Careers",   href: "/about#careers" },
      { label: "Contact",   href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "GridSense IoT",    href: "/products#iot-monitoring" },
      { label: "VaultStore BESS",  href: "/products#bess" },
      { label: "ReVolt Retrofit",  href: "/products#retrofit" },
      { label: "CarbonLens",       href: "/products#carbon" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",    href: "/privacy" },
      { label: "Terms of Service",  href: "/terms" },
      { label: "Cookie Policy",     href: "/cookies" },
    ],
  },
];
