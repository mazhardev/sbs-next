import { FinalCta, LeadershipGrid, PageHero, SectionHeading } from "../components/Sections";
import { buildMetadata } from "../seo";

const beliefs = [
  "Simplifying processes through smart technology",
  "Driving efficiency through automation",
  "Creating value through innovation",
];

export const metadata = {
  ...buildMetadata("about"),
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SBS"
        title="About Smart Brain Solutions"
        subtitle="Technology, finance, compliance, and transformation expertise working together to build smarter business systems."
      />
      <section className="sectionShell splitSection">
        <SectionHeading
          eyebrow="Company Story"
          title="Redefining how businesses operate in a digital-first world"
          text="At SBS, we are redefining how businesses operate in a digital-first world. We combine technology and transformation expertise to create intelligent, scalable, and future-ready solutions that drive real business impact."
        />
        <div className="missionStack">
          <article className="glassPanel reveal">
            <span className="iconBadge">M</span>
            <h3>Mission</h3>
            <p>To simplify complex business operations through smart technology, automation, ERP systems, financial process optimization, and compliance-focused transformation.</p>
          </article>
          <article className="glassPanel reveal">
            <span className="iconBadge">V</span>
            <h3>Vision</h3>
            <p>To become a trusted global partner for businesses seeking smarter, scalable, and future-ready systems.</p>
          </article>
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="Beliefs" title="The Principles Behind Our Work" />
        <div className="approachGrid">
          {beliefs.map((belief, index) => (
            <article className="approachCard reveal" key={belief}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{belief}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="Leadership" title="Leadership Team" />
        <LeadershipGrid />
        <p className="visionStatement">
          Together, the leadership team at SBS is committed to building intelligent,
          integrated, and future-ready business systems, enabling organizations to
          scale efficiently and succeed in a rapidly evolving digital landscape.
        </p>
      </section>
      <FinalCta />
    </>
  );
}
