"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const allCategory = "All Services";

const categoryOptions = [
  allCategory,
  "ERP Implementation",
  "Digital Transformation",
  "Accounting & Financial services",
  "Tax & Compliance Advisory",
  "Tax Technology",
  "Managed Services / BPO",
];

const categoryVisuals = {
  [allCategory]: {
    eyebrow: "Service Portfolio",
    title: "Integrated transformation support",
    text: "Choose a category to compare focused services, deliverables, and outcomes across technology, finance, tax, and managed support.",
  },
  "ERP Implementation": {
    eyebrow: "ERP Implementation",
    title: "Connected systems from design to launch",
    text: "ERP roadmaps, integrations, finance workflows, data migration, testing, and post-launch support.",
  },
  "Digital Transformation": {
    eyebrow: "Digital Transformation",
    title: "Automated workflows with clearer control",
    text: "Process redesign, automation, dashboards, SOPs, and practical adoption support for modern operations.",
  },
  "Accounting & Financial services": {
    eyebrow: "Accounting & Financial services",
    title: "Cleaner finance operations",
    text: "Accounting setup, MIS reporting, bookkeeping standardization, reconciliations, and audit-ready documentation.",
  },
  "Tax & Compliance Advisory": {
    eyebrow: "Tax & Compliance Advisory",
    title: "Structured compliance confidence",
    text: "VAT, GST, corporate tax, audit support, risk management, and multi-country compliance governance.",
  },
  "Tax Technology": {
    eyebrow: "Tax Technology",
    title: "Digital compliance infrastructure",
    text: "Tax engines, e-invoicing, ERP-tax integration, automated reporting, and digital gateway workflows.",
  },
  "Managed Services / BPO": {
    eyebrow: "Managed Services / BPO",
    title: "Reliable ongoing operational support",
    text: "Finance, accounting, tax compliance, back-office process support, and continuous system monitoring.",
  },
};

function ServiceGraphic({ category }) {
  const visual = categoryVisuals[category] || categoryVisuals[allCategory];

  return (
    <aside className="serviceVisualPanel reveal" key={category}>
      <div className={`serviceGraphic ${category === allCategory ? "all" : ""}`} aria-hidden="true">
        <span className="graphicRing" />
        <span className="graphicCore" />
        <span className="graphicNode nodeA" />
        <span className="graphicNode nodeB" />
        <span className="graphicNode nodeC" />
        <span className="graphicBar barA" />
        <span className="graphicBar barB" />
        <span className="graphicBar barC" />
      </div>
      <p className="eyebrow">{visual.eyebrow}</p>
      <h2>{visual.title}</h2>
      <p>{visual.text}</p>
    </aside>
  );
}

export default function ServicesExplorer({ services }) {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [isOpen, setIsOpen] = useState(false);

  const filteredServices = useMemo(() => {
    if (selectedCategory === allCategory) {
      return services;
    }

    return services.filter((service) => service.category === selectedCategory);
  }, [selectedCategory, services]);

  const selectedLabel = selectedCategory === allCategory ? "Select service category" : selectedCategory;

  function selectCategory(category) {
    setSelectedCategory(category);
    setIsOpen(false);
  }

  return (
    <div className="servicesExplorer">
      <div className="serviceFilterBar">
        <div>
          <p className="eyebrow">Filter Services</p>
          <h2>Choose a service category</h2>
        </div>
        <div className="filterDropdown">
          <button
            className="filterTrigger"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span>{selectedLabel}</span>
            <span className="filterChevron" aria-hidden="true" />
          </button>
          <div className={`filterMenu ${isOpen ? "isOpen" : ""}`} role="listbox" aria-label="Service category">
            {categoryOptions.map((category) => (
              <button
                className={category === selectedCategory ? "isSelected" : ""}
                type="button"
                role="option"
                aria-selected={category === selectedCategory}
                key={category}
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="servicesExperience">
        <ServiceGraphic category={selectedCategory} />
        <div className="filteredServiceGrid" key={selectedCategory}>
          {filteredServices.map((service, index) => (
            <article className="filteredServiceCard" style={{ "--card-delay": `${index * 70}ms` }} key={service.title}>
              <div className="filteredCardHead">
                <span className="iconBadge">{service.icon}</span>
                <span className="serviceCategoryTag">{service.category}</span>
              </div>
              <h2>{service.title}</h2>
              <p>{service.details}</p>
              <strong>{service.outcome}</strong>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="textLink" href={`/services/${service.slug}/`}>View {service.title}</Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
