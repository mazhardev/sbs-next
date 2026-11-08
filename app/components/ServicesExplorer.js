"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ServiceIcon } from "./Icons";

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

export default function ServicesExplorer({ services }) {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);

  const filteredServices = useMemo(() => {
    if (selectedCategory === allCategory) {
      return services;
    }

    return services.filter((service) => service.category === selectedCategory);
  }, [selectedCategory, services]);

  return (
    <div className="servicesExplorer">
      <div className="filterChips" role="group" aria-label="Filter services by category">
        {categoryOptions.map((category) => (
          <button
            className={category === selectedCategory ? "isSelected" : ""}
            type="button"
            aria-pressed={category === selectedCategory}
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="filteredServiceGrid">
        {filteredServices.map((service) => (
          <article className="filteredServiceCard" key={service.slug}>
            <div className="filteredCardHead">
              <ServiceIcon slug={service.slug} />
              <span className="serviceCategoryTag">{service.category}</span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.details}</p>
            <strong>{service.outcome}</strong>
            <ul className="checkList">
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="textLink" href={`/services/${service.slug}/`} prefetch={false}>View {service.title}</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
