import { FinalCta, PageHero, SectionHeading } from "../components/Sections";
import ServicesExplorer from "../components/ServicesExplorer";
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
        className="servicesHero"
        videoSrc="/videos/basatne-1080p.mp4"
        visualLabels={["Accounting", "Tax Technology", "ERP Automation"]}
        eyebrow="Services"
        title="Services Built for Smarter Business Transformation"
        subtitle="From ERP implementation to tax technology and managed services, SBS helps businesses modernize operations with practical, scalable solutions."
      />
      <section className="sectionShell">
        <SectionHeading
          eyebrow="Capabilities"
          title="End-to-End Consulting, Implementation, and Managed Support"
          text="Serving clients across ASPAC and international markets with practical services that connect technology, finance, tax, and operational execution."
        />
        <ServicesExplorer services={services} />
      </section>
      <FinalCta />
    </>
  );
}
