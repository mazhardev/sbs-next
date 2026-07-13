import { services, site } from "./data";

export const baseUrl = site.url.replace(/\/$/, "");

const defaultImage = "/images/logo.jpeg";

export const pageSeo = {
  home: {
    path: "/",
    title: "ERP, Tax Technology & Automation | Smart Brain Solutions",
    description:
      "Build smarter business systems with ERP implementation, digital automation, tax technology, accounting solutions, and compliance advisory.",
    primaryKeyword: "ERP implementation services",
    keywords: ["digital transformation consulting", "tax technology solutions", "accounting automation"],
  },
  about: {
    path: "/about/",
    title: "About Smart Brain Solutions | ERP & Tax Experts",
    description:
      "Meet Smart Brain Solutions, a consulting partner serving clients across ASPAC and international markets with ERP, tax technology, finance, and automation.",
    primaryKeyword: "business transformation consulting",
    keywords: ["ERP consulting services", "tax technology solutions", "digital transformation company"],
  },
  services: {
    path: "/services/",
    title: "ERP, Tax & Automation Services | SBS",
    description:
      "Explore SBS services for ERP implementation, digital transformation, tax compliance, accounting automation, and managed finance support.",
    primaryKeyword: "ERP implementation services",
    keywords: ["tax compliance advisory", "business automation services", "finance outsourcing services"],
  },
  impact: {
    path: "/impact/",
    title: "Transformation Results & Impact | SBS",
    description:
      "See how SBS improves ERP delivery, process automation, tax compliance, reporting accuracy, and operational control for growing companies.",
    primaryKeyword: "business process optimization",
    keywords: ["ERP transformation results", "digital transformation outcomes", "finance process optimization"],
  },
  clients: {
    path: "/clients/",
    title: "Industries & Clients | Smart Brain Solutions",
    description:
      "SBS supports manufacturers, retailers, service firms, finance teams, and global organizations with ERP, tax, and automation programs.",
    primaryKeyword: "ERP consulting services",
    keywords: ["managed finance services", "multi-country tax compliance", "accounting automation"],
  },
  insights: {
    path: "/insights/",
    title: "ERP, Tax & Automation Insights | SBS",
    description:
      "Read practical insights on ERP implementation, tax automation, VAT/GST compliance, financial reporting, and business process improvement.",
    primaryKeyword: "ERP implementation insights",
    keywords: ["tax automation", "digital transformation", "MIS reporting services"],
  },
  careers: {
    path: "/careers/",
    title: "Careers at Smart Brain Solutions | Join SBS",
    description:
      "Explore careers at Smart Brain Solutions across ERP, finance, tax, automation, and business transformation consulting.",
    primaryKeyword: "Smart Brain Solutions careers",
    keywords: ["ERP consulting jobs", "finance transformation careers", "tax advisory jobs"],
  },
  contact: {
    path: "/contact/",
    title: "Contact SBS for ERP & Tax Consulting",
    description:
      "Contact Smart Brain Solutions for ERP implementation, tax technology, accounting automation, compliance advisory, and managed services.",
    primaryKeyword: "ERP consulting services",
    keywords: ["tax compliance advisory", "digital transformation company", "business consulting ASPAC"],
  },
};

export function absoluteUrl(path = "/") {
  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata(keyOrConfig) {
  const config = typeof keyOrConfig === "string" ? pageSeo[keyOrConfig] : keyOrConfig;
  const canonical = absoluteUrl(config.path);
  const title = config.title;
  const description = config.description;

  return {
    title,
    description,
    keywords: [config.primaryKeyword, ...(config.keywords || [])],
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl(defaultImage),
          width: 1254,
          height: 1254,
          alt: `${site.name} - ERP, tax technology, and business transformation consulting`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(defaultImage)],
    },
  };
}

export function serviceMetadata(service) {
  return buildMetadata({
    path: `/services/${service.slug}/`,
    title: `${service.title} | SBS`,
    description: `${service.description} Smart Brain Solutions delivers ${service.primaryKeyword.toLowerCase()} for clients across ASPAC and international markets.`,
    primaryKeyword: service.primaryKeyword,
    keywords: service.secondaryKeywords,
  });
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.shortName,
    url: baseUrl,
    email: site.email,
    telephone: site.phone,
    slogan: site.tagline,
    areaServed: ["ASPAC", "International"],
    sameAs: ["https://www.linkedin.com/company/smart-brain-solutions"],
    knowsAbout: services.map((service) => service.title),
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: baseUrl,
    email: site.email,
    telephone: site.phone,
    priceRange: "$$",
    areaServed: ["ASPAC", "International"],
    serviceType: services.map((service) => service.title),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/insights/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: baseUrl,
    },
    areaServed: ["ASPAC", "International"],
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} deliverables`,
      itemListElement: service.includes.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Smart Brain Solutions",
    url: absoluteUrl("/contact/"),
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      email: site.email,
      telephone: site.phone,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        areaServed: ["PK", "MY", "AE", "SA", "QA", "OM", "BH", "SG"],
        availableLanguage: ["English"],
      },
    },
  };
}
