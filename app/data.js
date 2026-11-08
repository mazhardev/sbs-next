// next/link adds the base path by itself. Plain images, icons, and manifest URLs need this helper.
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}

export const site = {
  name: "Smart Brain Solutions",
  shortName: "SBS",
  tagline: "Think Smart, Solve Better",
  url: "https://smartbrainsolution.com/",
  email: "info@smartbrainsolution.com",
  phone: "+92 331 7482664",
  whatsapp: "923317482664",
  whatsappSecondary: "923017855743",
  whatsappSecondaryLabel: "+92 301 78 55 743",
  address: "House #142, Takbeer Block, Bahria Town, Lahore",
  location: "Serving Across Global Markets",
  facebook: "https://www.facebook.com/profile.php?id=61590767773103",
  instagram: "https://www.instagram.com/smartbrainsolutions/",
  linkedin: "https://www.linkedin.com/company/134643924/",
  linkedinLabel: "Smart Brain Solutions",
};

// Advertising and analytics IDs. Leave a value empty to keep that tag switched off.
// With every value empty, no third-party script loads and no consent banner shows.
// Use gtmId alone if the agency manages tags in Tag Manager, or the direct IDs, not both for the same tag.
export const tracking = {
  gtmId: "", // GTM-XXXXXXX
  ga4Id: "", // G-XXXXXXXXXX
  googleAdsId: "", // AW-XXXXXXXXXX
  googleAdsLeadLabel: "", // Conversion label from the Google Ads lead conversion action
  metaPixelId: "", // Numeric Meta pixel ID
  requireConsent: true, // Tags load only after a visitor accepts the banner
};

export const cta = {
  consultation: { label: "Book a Consultation", href: "/contact/?intent=consultation" },
  proposal: { label: "Request a Proposal", href: "/contact/?intent=proposal" },
};

// Service pages carry their own lead form, so their consultation buttons stay on the page.
export function consultationHref(pathname = "") {
  return /^\/services\/[^/]+\/?$/.test(pathname) ? "#consultation" : cta.consultation.href;
}

export const navItems = [
  { label: "Services", href: "/services/" },
  { label: "Impact", href: "/impact/" },
  { label: "Clients", href: "/clients/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
  { label: "Contact", href: "/contact/" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  ...navItems,
  { label: "Careers", href: "/careers/" },
];

export const platforms = ["SAP S/4HANA", "Odoo", "Microsoft Dynamics 365", "QuickBooks", "POS", "HRMS"];

export const deliveryProcess = [
  { title: "Discover", text: "Assess your current systems, processes, and compliance requirements." },
  { title: "Design", text: "Agree the future-state design and a clear implementation roadmap." },
  { title: "Build", text: "Configure, integrate, migrate your data, and test before launch." },
  { title: "Launch", text: "Train your teams, support go-live, and keep optimizing afterward." },
];

export const services = [
  {
    title: "ERP Implementation & Integration",
    slug: "erp-implementation",
    category: "ERP Implementation",
    primaryKeyword: "ERP implementation services",
    secondaryKeywords: ["ERP integration company", "ERP consulting services", "SAP implementation services", "Odoo implementation services", "Microsoft Dynamics implementation"],
    description: "End-to-end ERP solutions tailored to finance, tax, operations, and reporting.",
    outcome: "Seamless operations and real-time visibility.",
    details:
      "Build a strong digital foundation with end-to-end ERP solutions tailored to your business.",
    includes: [
      "ERP selection, design, and implementation",
      "System integration for finance, tax, and operations",
      "Process re-engineering and optimization",
      "Ongoing support and system enhancements",
    ],
  },
  {
    title: "SAP Implementation & Integration",
    slug: "sap-implementation",
    category: "ERP Implementation",
    primaryKeyword: "SAP implementation services",
    secondaryKeywords: ["SAP S/4HANA implementation", "SAP consulting services", "SAP integration services", "SAP finance and tax integration"],
    description: "SAP S/4HANA planning, implementation, and integration for finance, tax, and operations.",
    outcome: "One SAP system your teams can rely on.",
    details: "Plan, configure, and launch SAP around the way your business actually runs.",
    includes: [
      "SAP fit assessment and implementation roadmap",
      "Process design, configuration, and testing",
      "Data migration and integration with finance, tax, and operations systems",
      "User training, go-live, and post-launch support",
    ],
  },
  {
    title: "Odoo Implementation & Integration",
    slug: "odoo-implementation",
    category: "ERP Implementation",
    primaryKeyword: "Odoo implementation services",
    secondaryKeywords: ["Odoo ERP implementation", "Odoo consulting services", "Odoo integration services", "Odoo for accounting and operations"],
    description: "Odoo planning, setup, and integration for growing finance and operations teams.",
    outcome: "A connected Odoo system that grows with you.",
    details: "Replace disconnected tools with one Odoo system configured for your workflows.",
    includes: [
      "Odoo fit assessment and implementation roadmap",
      "Finance, operations, and reporting workflow setup",
      "Data migration and integration with your existing tools",
      "User training, go-live, and ongoing support",
    ],
  },
  {
    title: "Digital Transformation & Automation",
    slug: "digital-transformation-automation",
    category: "Digital Transformation",
    primaryKeyword: "digital transformation consulting",
    secondaryKeywords: ["digital transformation company", "business automation services", "workflow automation solutions", "process automation company"],
    description: "Convert manual workflows into intelligent automated systems.",
    outcome: "Faster processes with reduced manual effort.",
    details: "Transform manual processes into intelligent, automated workflows.",
    includes: [
      "Business process automation",
      "Digital transformation strategy",
      "Workflow optimization",
      "Real-time reporting and dashboards",
    ],
  },
  {
    title: "Tax & Compliance Advisory",
    slug: "tax-compliance-advisory",
    category: "Tax & Compliance Advisory",
    primaryKeyword: "tax compliance advisory",
    secondaryKeywords: ["VAT compliance services", "GST compliance services", "corporate tax advisory", "GCC tax compliance", "ASPAC tax compliance"],
    description: "Multi-jurisdiction tax and compliance support for growing businesses.",
    outcome: "Reduced risk and stronger compliance.",
    details: "Navigate complex regulations with confidence across multiple jurisdictions.",
    includes: [
      "VAT / GST compliance and advisory",
      "Corporate tax support",
      "Multi-country compliance across GCC, ASPAC, and global markets",
      "Audit support and risk management",
    ],
  },
  {
    title: "Tax Technology & Digital Compliance",
    slug: "tax-technology",
    category: "Tax Technology",
    primaryKeyword: "tax technology solutions",
    secondaryKeywords: ["digital tax compliance", "e-invoicing implementation", "automated tax reporting", "ERP tax integration", "tax engine implementation"],
    description: "Tax engines, e-invoicing, ERP-tax integration, and automated reporting.",
    outcome: "Real-time compliance with fewer errors.",
    details: "Adopt advanced tools for modern, automated tax management.",
    includes: [
      "Tax engine and compliance tool implementation",
      "E-invoicing and digital gateway solutions",
      "Automated tax reporting",
      "ERP-tax system integration",
    ],
  },
  {
    title: "Accounting & Financial Services",
    slug: "accounting-financial-solutions",
    category: "Accounting & Financial services",
    primaryKeyword: "accounting automation",
    secondaryKeywords: ["accounting system setup", "financial reporting solutions", "MIS reporting services", "finance process optimization"],
    description: "Structured accounting systems, MIS reporting, and audit-ready documentation.",
    outcome: "Accurate financials and better decisions.",
    details: "Strengthen your financial operations with structured and reliable systems.",
    includes: [
      "Accounting system setup and optimization",
      "Financial reporting and MIS",
      "Bookkeeping standardization",
      "Audit-ready documentation",
    ],
  },
  {
    title: "Business Process Optimization & Advisory",
    slug: "business-process-optimization",
    category: "Digital Transformation",
    primaryKeyword: "business process optimization",
    secondaryKeywords: ["process redesign consulting", "SOP development services", "operational efficiency consulting", "business process improvement"],
    description: "Improve operational performance through redesigned processes and SOPs.",
    outcome: "Lean operations and stronger control.",
    details: "Enhance performance by redesigning how your business operates.",
    includes: [
      "Process assessment and redesign",
      "Cost optimization strategies",
      "SOP development and governance",
      "Operational performance improvement",
    ],
  },
  {
    title: "Managed Services & Outsourcing",
    slug: "managed-services-outsourcing",
    category: "Managed Services / BPO",
    primaryKeyword: "finance outsourcing services",
    secondaryKeywords: ["accounting outsourcing", "tax compliance outsourcing", "back office outsourcing", "managed accounting services"],
    description: "Finance, tax, back-office, and system support services.",
    outcome: "Cost efficiency and scalable operations.",
    details: "Focus on growth while SBS handles non-core operations.",
    includes: [
      "Finance and accounting outsourcing",
      "Tax compliance management",
      "Back-office and process support",
      "Continuous monitoring and system support",
    ],
  },
];

export const metrics = [
  { value: "50+", label: "Clients supported" },
  { value: "40+", label: "ERP & accounting implementations" },
  { value: "10+", label: "Jurisdictions covered" },
  { value: "20+", label: "Professionals led" },
];

export const outcomes = [
  { value: "50%", label: "Reduction in manual processes" },
  { value: "40%", label: "Improvement in data accuracy and reporting efficiency" },
  { value: "100+", label: "Hours saved annually" },
  { value: "Real-time", label: "Decision-making visibility" },
];

export const leaders = [
  {
    name: "Muhammad Awais Arshad",
    role: "Founder & CEO",
    description:
      "ERP and business transformation specialist leading end-to-end implementations, financial process optimization, and scalable operating models across SAP, Odoo, and Microsoft Dynamics.",
  },
  {
    name: "Muhammad Irfan",
    role: "Co-Founder & Director",
    description:
      "Tax and technology professional focused on digital compliance, ERP-enabled tax automation, and advisory-led transformation for growing organizations.",
  },
];

export const insights = [
  {
    title: "Reimagining Tax Compliance Through Automation",
    slug: "tax-compliance-automation",
    category: "Tax Advisory",
    tags: ["Tax Advisory", "Automation"],
    visual: "analytics",
    date: "Coming Soon",
    description:
      "How businesses are moving from manual processes to fully automated tax systems and what it means for future compliance.",
  },
  {
    title: "ERP Implementation: From Strategy to Success",
    slug: "erp-implementation-strategy",
    category: "ERP",
    tags: ["ERP", "Finance Transformation"],
    visual: "erp",
    date: "Coming Soon",
    description:
      "Key steps to ensure your ERP project delivers real value from planning to execution.",
  },
  {
    title: "Digital Transformation for Modern Enterprises",
    slug: "digital-transformation-modern-enterprises",
    category: "Automation",
    tags: ["Automation", "Finance Transformation"],
    visual: "featured",
    date: "Coming Soon",
    description:
      "How automation and integrated systems help businesses operate faster, smarter, and with greater control.",
  },
];

export const clients = [
  {
    name: "RIDA Middle East",
    href: "https://ridame.ae/",
    logo: "/images/clients/rida-middle-east.png",
    industry: "Construction / Real Estate",
    initials: "RM",
  },
  {
    name: "Basatne International LLC",
    href: "https://www.basatne.com/",
    logo: "/images/clients/basatne.png",
    industry: "Food & Beverage",
    initials: "BI",
  },
  {
    name: "Cartlow Group",
    href: "https://cartlow.com/intl/en",
    logo: "/images/clients/cartlow.png",
    industry: "Retail",
    initials: "CG",
  },
  {
    name: "Orbt",
    href: "https://orbt.com/en",
    logo: "/images/clients/orbt.png",
    industry: "Engineering and Technology",
    initials: "OR",
  },
  {
    name: "Allah Tawaqal Metals",
    href: "https://www.atmetalsltd.com/",
    logo: "/images/clients/allah-tawaqal-metals.png",
    industry: "Manufacturing",
    initials: "AT",
  },
  {
    name: "Flux Metal (Pvt) Limited",
    href: "https://www.fluxmetal.pk/",
    logo: "/images/clients/flux-metal.png",
    industry: "Manufacturing",
    initials: "FM",
  },
  {
    name: "Agro Alliances",
    href: "https://www.agroallianz.com.pk/",
    logo: "/images/clients/agro-alliances.svg",
    industry: "Food & Beverage",
    initials: "AA",
  },
];

export const industries = [
  "Financial Services",
  "Manufacturing",
  "Retail",
  "Food & Beverage",
  "Pharmaceuticals",
  "Engineering and Technology",
  "Construction / Real Estate",
  "Logistics",
];
