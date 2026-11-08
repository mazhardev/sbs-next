import { FinalCta, MetricGrid, PageHero, SectionHeading } from "../components/Sections";
import { metrics, outcomes } from "../data";
import { buildMetadata } from "../seo";

const impactSections = [
  {
    title: "Global & Multi-Industry Experience",
    items: [
      "Delivered solutions across global markets",
      "Supported 50+ clients across manufacturing, retail, pharmaceuticals, and services",
      "Managed multi-country compliance across 10+ jurisdictions",
    ],
  },
  {
    title: "ERP & Digital Transformation Excellence",
    items: [
      "SAP, Odoo, Microsoft Dynamics, QuickBooks, POS, and HRMS experience",
      "40+ ERP and accounting system implementations",
      "AS-IS / TO-BE process design",
      "System integrations and automation frameworks",
    ],
  },
  {
    title: "Leadership & Delivery Strength",
    items: [
      "Managed teams of 20+ professionals",
      "Delivered multiple concurrent projects",
      "Strong project management and stakeholder collaboration",
    ],
  },
  {
    title: "Client-Centric Transformation Approach",
    items: [
      "Understanding real business challenges",
      "Delivering practical, scalable solutions",
      "Training and change management",
      "Building long-term partnerships",
    ],
  },
];

export const metadata = {
  ...buildMetadata("impact"),
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Our Impact"
        subtitle="At Smart Brain Solutions, our impact is built on a powerful combination of technology expertise, business understanding, and execution-driven delivery."
      />
      <section className="sectionShell">
        <SectionHeading
          eyebrow="Outcomes"
          title="High-impact transformation outcomes"
          text="A clearer view of delivery scale, operational improvements, and measurable transformation results across ERP, finance, tax, and automation programs."
        />
        <MetricGrid items={outcomes} />
        <div className="metricGap">
          <MetricGrid items={metrics} />
        </div>
      </section>
      <section className="softBand">
        <div className="sectionShell impactListGrid">
          {impactSections.map((section) => (
            <article className="listCard reveal" key={section.title}>
              <h2>{section.title}</h2>
              <ul className="checkList">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <FinalCta />
    </>
  );
}
