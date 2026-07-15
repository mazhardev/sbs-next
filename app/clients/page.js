import { ClientsShowcase, FinalCta, PageHero, SectionHeading } from "../components/Sections";
import { clients } from "../data";
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
    <div className="clientsPage">
      <PageHero
        className="clientsHero"
        videoSrc="/videos/basatne-1080p.mp4"
        eyebrow="Clients"
        title="Our Clients"
        subtitle="We work with growing businesses, mid-sized enterprises, and global organizations seeking to modernize their operations and strengthen compliance through technology."
      />
      <ClientsShowcase />
      <section className="sectionShell">
        <SectionHeading
          eyebrow="Client Network"
          title="Organizations supported by SBS"
          text="A practical mix of regional operators, trading groups, manufacturers, technology teams, and growth-focused businesses."
        />
        <div className="clientDirectory">
          {clients.map((client, index) => (
            <a
              className="clientDirectoryCard reveal"
              href={client.href}
              target={client.href.startsWith("http") ? "_blank" : undefined}
              rel={client.href.startsWith("http") ? "noreferrer" : undefined}
              style={{ "--card-delay": `${index * 70}ms` }}
              key={client.name}
            >
              <span>
                <img src={client.logo} alt="" width="48" height="48" loading="lazy" />
              </span>
              <div>
                <h3>{client.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>
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
    </div>
  );
}
