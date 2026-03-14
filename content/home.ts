export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  featureCards: { title: string; subtitle: string; body: string }[];
};

export type LogosContent = {
  title: string;
  subtitle: string;
  logos: string[];
};

export type FeaturesContent = {
  title: string;
  intro: string;
  items: { title: string; body: string }[];
};

export type MetricsContent = {
  title: string;
  blurb: string;
  stats: { label: string; value: string }[];
  snapshot: string[];
};

export type PricingContent = {
  title: string;
  blurb: string;
  ctas: { sales: { label: string; href: string }; terms: { label: string; href: string } };
  plans: { name: string; price: string; desc: string; features: string[]; cta: { label: string; href: string } }[];
};

export type SecurityContent = {
  title: string;
  blurb: string;
  checklist: string[];
  badges: string[];
  cta: { label: string; href: string };
};

export type DocsSupportContent = {
  title: string;
  blurb: string;
  links: { label: string; link: string }[];
  supportBullets: string[];
  supportBadge: string;
  supportCta: { label: string; href: string };
};

export type LegalContent = {
  title: string;
  blurb: string;
  docs: { label: string; link: string; tag?: string }[];
  corporate: string[];
  note: string;
};

export type CtaContent = {
  title: string;
  blurb: string;
  productLinks: { label: string; href: string }[];
  resourceLinks: { label: string; href: string }[];
  footer: string;
};

export type HomeContent = {
  hero: HeroContent;
  logos: LogosContent;
  features: FeaturesContent;
  metrics: MetricsContent;
  pricing: PricingContent;
  security: SecurityContent;
  docs: DocsSupportContent;
  legal: LegalContent;
  cta: CtaContent;
};

export const defaultHomeContent: HomeContent = {
  hero: {
    eyebrow: "Landyze Launch Stack",
    title: "Launch, brand, and scale with the minimal platform agencies trust.",
    subtitle:
      "Landyze is the starter kit your agency deserves. TypeScript, Next.js 16 App Router, built-in theming, and ready-for-anything landing sections.",
    primaryCta: { label: "Explore features", href: "#features" },
    secondaryCta: { label: "See how Landyze works", href: "#cta" },
    featureCards: [
      { title: "Deploy", subtitle: "Fast, secure launch", body: "Built for Vercel, Railway, and modern cloud—configure in minutes." },
      { title: "Brand", subtitle: "Agency, product, or SaaS", body: "Section system is endlessly flexible for sales sites, portals, and dashboards." },
      { title: "Develop", subtitle: "Modern DX", body: "App Router, TypeScript, Drizzle ORM, and strict CI for confidence." },
      { title: "Customize", subtitle: "Take it further", body: "Edit, swap, or theme any part—the Landyze starter won't hold you back." },
    ],
  },
  logos: {
    title: "Agencies and teams who shipped fast",
    subtitle: "Landyze is used by top growth agencies, SaaS studios, and product teams.",
    logos: ["Stripe", "Monday.com", "Linear", "Segment", "Notion", "OpenAI", "Loom", "Figma", "Intercom", "Salesforce"],
  },
  features: {
    title: "Agency features from day one",
    intro: "Landyze is production-aligned: scalable, agency-friendly, and prepped for enterprise options.",
    items: [
      { title: "Security & Compliance", body: "Role-based access, audit and logging paths, env safety, and built-in GDPR controls." },
      { title: "Data & Observability", body: "Production health endpoints and hooks for logging, tracing, billing, and DPA reporting." },
      { title: "Multi-use, Multi-tenant", body: "Structure fits agency, SaaS, or client project—real code, not smoke and mirrors." },
      { title: "Docs & Playbooks", body: "Guides and onboarding mapped to how real agencies ship. No friction, no rabbit holes." },
      { title: "Performance", body: "Fast by default: edge-opt, image CDN, and modern performance patterns." },
      { title: "Team Flow", body: "Prettier, ESLint, and strict CI so your team can hand off and iterate without stress." },
    ],
  },
  metrics: {
    title: "From dev kickoff to prod demo — confidently",
    blurb: "Get the timeline your clients expect. Landyze brings proven infra, fast launch, and maintainable code.",
    stats: [
      { label: "Minutes to deploy", value: "6" },
      { label: "Pages ready to ship", value: "14+" },
      { label: "Dev handoff speed", value: "Twice as fast" },
      { label: "Teams onboarded", value: "25+" },
    ],
    snapshot: [
      "Next.js App Router + API endpoints for true server actions",
      "Drizzle ORM with real migrations/seed included",
      "Plug-and-play for any auth (JWT, OAuth, SAML, or custom)",
      "Observability setup: error boundaries, structured logging, status endpoints",
      "Billing-ready: Stripe slot, usage tracking, webhook examples",
    ],
  },
  pricing: {
    title: "Packages for all agency sizes",
    blurb: "Start free, upgrade as your client roster grows. Landyze supports hobby, pro, and enterprise scaling.",
    ctas: {
      sales: { label: "Contact sales", href: "mailto:hi@chirag.co" },
      terms: { label: "Review terms", href: "#legal" },
    },
    plans: [
      {
        name: "Starter",
        price: "$0",
        desc: "Ideal for prototypes, MVPs, and solo/early agencies.",
        features: ["Up to 3 teammates", "Email support", "Open source license"],
        cta: { label: "Launch free", href: "https://vercel.com/new" },
      },
      {
        name: "Growth",
        price: "$49",
        desc: "For growing agencies, SaaS with teams, or product launches.",
        features: ["Unlimited teammates", "Stripe billing ready", "Priority email support"],
        cta: { label: "Start trial", href: "https://vercel.com/new" },
      },
      {
        name: "Enterprise",
        price: "Custom",
        desc: "Enterprise-grade support, audits, and compliance.",
        features: ["Security review reports", "SSO/SCIM/SAML hooks", "Dedicated onboarding"],
        cta: { label: "Book a demo", href: "https://vercel.com/new" },
      },
    ],
  },
  security: {
    title: "Enterprise trust, startup speed",
    blurb: "Landyze is built for trust: audit history, compliance controls, and ops-friendly docs from day one.",
    checklist: [
      "Mapped to SOC2, GDPR, and agency RFP needs",
      "Pre-drafted DPA + audit kit for clients",
      "Data and vendor checklist templates included",
      "Incident playbook and ready-to-use RACI documentation",
    ],
    badges: ["SOC2", "GDPR", "HIPAA", "ISO 27001", "PCI Ready", "CCPA"],
    cta: { label: "Request security pack", href: "mailto:hi@chirag.co" },
  },
  docs: {
    title: "Real documentation + human support",
    blurb: "Guides, handoff playbooks, and customer support channels. Built for real team launches.",
    links: [
      { label: "API reference", link: "https://nextjs.org/docs" },
      { label: "Runbooks", link: "https://vercel.com/changelog" },
      { label: "Status page", link: "https://status.example.com" },
      { label: "Implementation guide", link: "https://vercel.com/templates" },
    ],
    supportBullets: [
      "Measured response: 2-hr SLA for high-urgency launch issues",
      "Full runbook and handoff plan for agency teams",
      "Quarterly code reviews (Growth & Enterprise)",
      "Sandbox and preview support for client demos",
    ],
    supportBadge: "24/7 option for Enterprise",
    supportCta: { label: "Contact support", href: "mailto:hi@chirag.co" },
  },
  legal: {
    title: "Procurement-ready, zero hassle",
    blurb: "We provide agency- and client-side paperwork, including MSA, DPA, and privacy docs.",
    docs: [
      { label: "Master Service Agreement", link: "https://example.com/msa", tag: "PDF" },
      { label: "Data Processing Addendum", link: "https://example.com/dpa", tag: "PDF" },
      { label: "Privacy Policy", link: "https://example.com/privacy", tag: "PDF" },
      { label: "Acceptable Use", link: "https://example.com/aup", tag: "PDF" },
    ],
    corporate: [
      "HQ: San Francisco, CA • Remote first",
      "EIN & W-9 available",
      "Onboarding collateral for clients",
      "Production SLAs for Growth/Enterprise",
      "Accessibility: WCAG 2.1 AA aligned",
    ],
    note: "Need a custom clause? Email hi@chirag.co — fast review guaranteed.",
  },
  cta: {
    title: "Landyze: Launch clarity for agencies",
    blurb: "A calm, extensible foundation for growing agencies and product teams. Real docs, real code, great handoffs.",
    productLinks: [
      { label: "Docs", href: "https://nextjs.org/docs" },
      { label: "Features", href: "#features" },
      { label: "Templates", href: "https://vercel.com/templates" },
    ],
    resourceLinks: [
      { label: "Changelog", href: "https://vercel.com/changelog" },
      { label: "GitHub", href: "https://github.com/" },
      { label: "Support", href: "mailto:hi@chirag.co" },
    ],
    footer: "Made by Landyze • Production-grade by design • MIT licensed",
  },
};

// Helper for future overrides (e.g., reading JSON from env or file)
export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}