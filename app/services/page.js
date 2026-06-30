import { FinalCta, PageHero, SectionHeading } from "../components/Sections";
import JsonLd from "../components/JsonLd";
import { services } from "../data";
import { buildMetadata, serviceSchema } from "../seo";

export const metadata = {
  ...buildMetadata("services"),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={services.map(serviceSchema)} />
      <PageHero
        eyebrow="Services"
        title="Services Built for Smarter Business Transformation"
        subtitle="From ERP implementation to tax technology and managed services, SBS helps businesses modernize operations with practical, scalable solutions."
      />
      <section className="sectionShell">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-End Consulting, Implementation, and Managed Support"
        />
        <div className="serviceDetailStack">
          {services.map((service, index) => (
            <article className="serviceDetail reveal" key={service.title}>
              <div>
                <span className="eyebrow">{String(index + 1).padStart(2, "0")} / {service.icon}</span>
                <h2>{service.title}</h2>
                <p>{service.details}</p>
                <strong>{service.outcome}</strong>
                <a className="textLink" href={`/services/${service.slug}/`}>View {service.title}</a>
              </div>
              <ul>
                {service.includes.map((item) => (
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
