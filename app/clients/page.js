import { FinalCta, IndustryPills, PageHero, SectionHeading } from "../components/Sections";
import { asset, clients } from "../data";
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
        <SectionHeading
          eyebrow="Client Network"
          title="Organizations supported by SBS"
          text="A practical mix of regional operators, trading groups, manufacturers, technology teams, and growth-focused businesses."
        />
        <div className="clientDirectory">
          {clients.map((client) => (
            <a className="clientDirectoryCard reveal" href={client.href} target="_blank" rel="noreferrer" key={client.name}>
              <img src={asset(client.logo)} alt="" width="48" height="48" loading="lazy" decoding="async" />
              <div>
                <h3>{client.name}</h3>
                <p>{client.industry}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="softBand">
        <div className="sectionShell">
          <SectionHeading eyebrow="Industries" title="Sectors we support" />
          <IndustryPills />
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="Value" title="What our clients value" />
        <div className="approachGrid">
          {values.map((value, index) => (
            <article className="approachCard reveal" key={value}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="sectionShell clientTestimonialSection">
        <div className="testimonialCard reveal">
          <p>
            &ldquo;Through Tax Advisory and Automation, Smart Brain Solutions has
            helped transform our processes into a seamless, efficient system.&rdquo;
          </p>
          <span>Client Transformation Partner</span>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
