import { FinalCta, PageHero, SectionHeading } from "../components/Sections";
import { industries } from "../data";
import { buildMetadata } from "../seo";

const values = [
  "Strong blend of technology + tax + business expertise",
  "Proven experience in ERP and digital transformation",
  "Reliable delivery with high accuracy and accountability",
  "Ability to handle complex, multi-country environments",
];

export const metadata = {
  ...buildMetadata("clients"),
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Our Clients"
        subtitle="We work with growing businesses, mid-sized enterprises, and global organizations seeking to modernize their operations and strengthen compliance through technology."
      />
      <section className="sectionShell">
        <SectionHeading eyebrow="Value" title="What Our Clients Value" />
        <div className="approachGrid">
          {values.map((value, index) => (
            <article className="approachCard reveal" key={value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="sectionShell splitSection">
        <div className="testimonialCard reveal">
          <p>
            &ldquo;From ERP implementation to tax automation, Smart Brain Solutions
            has helped transform our processes into a seamless, efficient system.&rdquo;
          </p>
          <span>Client Transformation Partner</span>
        </div>
        <div>
          <SectionHeading eyebrow="Industries" title="Industries We Support" />
          <div className="industryGrid">
            {industries.map((industry) => (
              <article className="industryCard reveal" key={industry}>{industry}</article>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
