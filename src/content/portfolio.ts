/**
 * Visible copy is transcribed verbatim from research/brand-ia-copy-v3.md
 * (section 3, between VISIBLE-HOMEPAGE-START and VISIBLE-HOMEPAGE-END).
 * Only navigation labels, accessibility labels and href values are added here.
 */

export const links = {
  resume: "/resume.html",
  email: "agung.pprtm@gmail.com",
  mailto: "mailto:agung.pprtm@gmail.com",
  linkedin: "https://linkedin.com/in/apprtm",
  netMates: "https://netmates.cc",
} as const;

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "build", label: "How I Build" },
  { id: "toolkit", label: "Toolkit" },
  { id: "think", label: "How I Think" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "work", label: "Work" },
  { id: "products", label: "Personal Products" },
  { id: "contact", label: "Contact" },
];

export const brand = "Agung Pratama";
export const resumeActionLabel = "Résumé";

export const hero = {
  name: { first: "Agung", last: "Pratama" },
  eyebrow: "Principal Product Manager II at tiket.com",
  headline: "I make connected travel products clearer to use and run.",
  support:
    "At tiket.com, I work across customer-facing travel journeys and shared platform products. I use product evidence and system detail to move from portfolio choices into requirements and delivery.",
  primaryAction: { label: "View selected work", href: "#work" },
  secondaryAction: { label: "View résumé", href: links.resume },
  portrait: {
    src: "/zProfPic.png",
    alt: "Portrait of Agung Pratama, Principal Product Manager II at tiket.com",
  },
  proofCue: {
    label: "Current scope",
    items: ["Order", "Atlas Geo", "Ground Transport", "Domestic and international rail"],
  },
} as const;

export const about = {
  heading: "About Agung",
  paragraphs: [
    "Since 2016, I have worked across travel, commerce, marketplaces, logistics, and enterprise operations. The contexts changed, but each role asked me to connect a customer or partner journey with the transaction and operational systems behind it.",
    "Today at tiket.com, my scope covers products customers use directly and shared foundations across orders, location, and ground transport. Earlier roles at Tokopedia, Lion Parcel, Sorabel, Jualo, and Grab built range across seller, logistics, enterprise, marketplace, and e-commerce products.",
    "SQL, product analytics, automation, and AI-assisted inspection let me investigate product behaviour and system constraints directly. I can test assumptions and ask engineering partners more precise questions.",
  ],
  evidence: [
    "Product career since 2016",
    "Current: Travel platforms · Mobility",
    "Prior: Commerce · Marketplaces · Logistics · Enterprise",
    "Hands-on product: Net Mates",
  ],
} as const;

export const build = {
  label: "Capabilities",
  heading: "How I Build Products",
  intro:
    "The work spans portfolio choices, direct analysis, shared systems, and the operating discipline required to ship.",
  pillars: [
    {
      index: "01",
      title: "Set portfolio direction",
      summary:
        "I set product direction by defining the decision, the customer and business context, and the sequence of work. That keeps trade-offs and sequencing visible across a portfolio.",
      capabilities: [
        "Product strategy",
        "Roadmap planning",
        "RICE prioritisation",
        "OKR planning",
        "Executive stakeholder management",
      ],
    },
    {
      index: "02",
      title: "Find the evidence that changes the decision",
      summary:
        "I use direct analysis and experimentation to locate friction and test assumptions. Pricing, conversion, cross-sell, and operational evidence inform the decision rather than decorate it.",
      capabilities: [
        "SQL",
        "BigQuery",
        "Funnel analysis",
        "Pricing",
        "Conversion",
        "Cross-sell",
        "Experimentation",
      ],
    },
    {
      index: "03",
      title: "Shape connected product systems",
      summary:
        "I work across customer-facing flows and the shared products behind them. Order states, location context, APIs, partner operations, and reconciliation become one connected product problem when the scope demands it.",
      capabilities: [
        "Customer journeys",
        "Order lifecycle",
        "Status synchronisation",
        "API and microservice discovery",
        "Reconciliation",
        "Partner operations",
      ],
    },
    {
      index: "04",
      title: "Carry the decision through delivery",
      summary:
        "I translate direction into roadmaps, requirements, measures, and release conversations. I stay close to engineering and business partners, then use reporting, alerts, and workflow automation to keep recurring work visible.",
      capabilities: [
        "Product requirements",
        "Cross-functional delivery",
        "Risk and dependency management",
        "Release planning",
        "Automated reporting",
        "Configurable alerts",
        "Workflow tooling",
      ],
    },
  ],
} as const;

export const toolkit = {
  heading: "Toolkit",
  intro:
    "I use a selective toolkit to investigate products, make trade-offs explicit, and shorten recurring work. The method matters more than the logo.",
  groups: [
    {
      name: "Product decisions",
      items: ["Roadmapping", "RICE prioritisation", "OKR planning", "Experimentation", "A/B testing"],
    },
    { name: "Analysis and reporting", items: ["SQL", "BigQuery", "Tableau", "Looker"] },
    {
      name: "Systems and data",
      items: ["API and microservice discovery", "MongoDB", "Order-lifecycle analysis"],
    },
    {
      name: "Automation and inspection",
      items: [
        "Google Apps Script",
        "Automated reporting",
        "AI-assisted codebase and system inspection",
      ],
    },
  ],
} as const;

export const think = {
  label: "Product philosophy",
  heading: "How I Think",
  intro:
    "These principles guide where I look, what I question, and how I respond when a product resists a simple answer.",
  principles: [
    {
      index: "01",
      title: "Trace the whole journey",
      body: "I examine customer, partner, operational, financial, and system handoffs before narrowing the problem. A local fix can move failure somewhere less visible.",
    },
    {
      index: "02",
      title: "Separate the symptom from the decision",
      body: "A visible problem is not always the decision to make. I separate the symptom, affected user, constraint, and trade-off before choosing where to intervene.",
    },
    {
      index: "03",
      title: "Design for exceptions",
      body: "Order and operational products are defined by what happens when states diverge. I make recovery, status, and ownership part of the main product conversation.",
    },
    {
      index: "04",
      title: "Keep commercial mechanics visible",
      body: "Commercial mechanics are part of the product, not a review after design. I make their effect on customer choices and operations explicit.",
    },
    {
      index: "05",
      title: "Carry intent into implementation",
      body: "Implementation exposes assumptions that a roadmap cannot. I revisit the product choice when constraints change instead of defending requirements that no longer fit.",
    },
    {
      index: "06",
      title: "Use automation to remove repetition",
      body: "Automate stable repetition, not judgement. Reports, alerts, and workflow steps can be systematised; interpretation and product calls still need context.",
    },
  ],
} as const;

export const experience = {
  label: "Career",
  heading: "Professional Experience",
  intro:
    "A chronological view of the roles that built my range across travel, commerce, logistics, marketplaces, and enterprise operations.",
  action: { label: "View full résumé", href: links.resume },
  roles: [
    {
      company: "tiket.com",
      role: "Principal Product Manager II, Order Platform, Atlas Geo & Ground Transport",
      dates: "Sep 2022 – Present",
      current: true,
      body: "My scope covers product strategy and execution across Order Platform, Atlas Geo, and Ground Transport, including train, bus and shuttle, car rental, and airport transfer. The role combines portfolio planning, product analysis, cross-vertical coordination, and workflow automation across customer-facing and shared products.",
    },
    {
      company: "Tokopedia",
      role: "Lead Product Manager",
      dates: "Feb 2022 – Sep 2022",
      current: false,
      body: "I initiated a day-sales-of-inventory proof of concept and worked on seller fulfilment onboarding, first purchase, and automated stock allocation. I also led work to automate invoice generation for finance operations.",
    },
    {
      company: "tiket.com",
      role: "Senior Product Manager, Accommodation Partner Platform",
      dates: "Apr 2021 – Feb 2022",
      current: false,
      body: "I led the mobile revamp of the accommodation partner Extranet and shipped rate-management capabilities, including cross-sell and corporate rates and length-of-stay pricing. I partnered with engineering and business teams on partner operations and supply-side scalability.",
    },
    {
      company: "Lion Parcel",
      role: "Product Lead",
      dates: "Mar 2020 – Mar 2021",
      current: false,
      body: "I led a squad focused on digitising Lion Air Group passenger journeys and worked on driver-app acceptance flows that reduced dependence on manual dispatch.",
    },
    {
      company: "Sorabel",
      role: "Senior Product Manager, Enterprise, Feb 2020 – Mar 2020 · Product Manager, Commercial, Apr 2018 – Feb 2020",
      dates: "Apr 2018 – Mar 2020",
      current: false,
      body: "Across commercial and enterprise product roles, I worked on sourcing, production, merchandising, and ERP practices. The team moved manual sheet-based tracking into an in-house production system, enabled self-service analysis, contributed to service-architecture design, and introduced data monitoring and alerts.",
    },
    {
      company: "Jualo.com, powered by CARRO",
      role: "Product Manager, Core Features",
      dates: "Oct 2017 – Mar 2018",
      current: false,
      body: "I managed the core-feature backlog, translated business and partnership needs into requirements, and introduced JIRA workflows, dashboards, and development analytics. I also analysed user funnels and feature performance with design and engineering partners.",
    },
    {
      company: "Grab",
      role: "Associate Product Manager, E-Commerce Products",
      dates: "Oct 2016 – Oct 2017",
      current: false,
      body: "I managed e-commerce products across merchant acquisition, API transaction integrations, and finance reconciliation. For Grab Driver Referral and Ayo Mudik, I coordinated product lifecycle, performance analysis, and go-to-market work with regional, engineering, operations, marketing, and finance teams.",
    },
  ],
} as const;

export const education = {
  label: "Background",
  heading: "Education and relevant learning",
  intro: "Formal education provides the commercial base; current practice keeps the technical detail close.",
  institution: "Brawijaya University, Malang, Indonesia",
  credentials: [
    { term: "Degree", value: "Bachelor of Economics" },
    { term: "Major", value: "Financial Management" },
    { term: "Dates", value: "2011 – 2015" },
    { term: "GPA", value: "3.67/4.00" },
  ],
  practiceHeading: "Relevant working practice",
  practiceBody:
    "Studying economics and financial management gave me a base in commercial reasoning. My current learning stays embedded in the work: SQL and BigQuery analysis, experimentation, API and microservice discovery, automation, and AI-assisted inspection of systems and codebases.",
} as const;

export const work = {
  label: "Professional work",
  heading: "Selected Work",
  intro:
    "These four chapters show the range of my current remit without exposing internal architecture, customer data, partner terms, operational thresholds, or unpublished performance.",
  action: { label: "Discuss a product role", href: "#contact" },
  featured: {
    title: "Ground Transport",
    scope: ["Airport transfer", "Car rental", "Bus and shuttle"],
    body: "My current Ground Transport portfolio covers airport transfer, car rental, and bus and shuttle. I shape priorities across booking flows, availability, pricing, partner operations, and shared-platform needs, working with engineering and business teams through delivery.",
  },
  chapters: [
    {
      title: "Rail",
      scope: ["KAI", "Whoosh", "Shinkansen", "Domestic and international journeys"],
      body: "My rail scope spans KAI, Whoosh, and Shinkansen across domestic and international journeys. I work on journey decisions, pricing, analysis, and implementation while adapting product requirements to different operator and market contexts.",
    },
    {
      title: "Order",
      scope: ["Shared order experience across travel products"],
      body: "Order connects post-checkout experiences across travel products. My work includes lifecycle and status synchronisation, trip information, exception resolution, price breakdown, and financial reconciliation. I coordinate with product, engineering, operations, and finance partners so shared decisions work across verticals.",
    },
    {
      title: "Atlas Geo",
      scope: ["Current product remit"],
      body: "Atlas Geo is part of my current product scope. I work on its product direction, prioritisation, and delivery with product, engineering, and business partners.",
    },
  ],
} as const;

export const products = {
  label: "Hands-on product practice",
  heading: "Personal Products",
  intro:
    "Personal product work tests whether a product choice still makes sense once it becomes a flow someone can use.",
  featured: {
    title: "Net Mates",
    status: "Hobby product",
    url: links.netMates,
    urlLabel: "netmates.cc",
    body: "Net Mates is my hobby product and the clearest view of my work outside a company role. It gives me direct practice in defining flows, weighing implementation choices, and reviewing the live experience.",
    action: "Visit Net Mates",
  },
} as const;

export const contact = {
  label: "Contact",
  heading: "Let’s discuss product work across travel and transaction systems.",
  support:
    "Email me about Principal-level roles that need customer context, commercial judgement, operational detail, and close partnership with engineering.",
  emailActionLabel: "Email Agung",
} as const;

export const footer = {
  name: "Agung Pratama",
  title: "Principal Product Manager II",
  copyright: "© 2026 Agung Pratama",
} as const;
