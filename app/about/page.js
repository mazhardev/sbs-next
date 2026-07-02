import { FinalCta, LeadershipGrid, PageHero, SectionHeading } from "../components/Sections";
import { buildMetadata } from "../seo";

const beliefs = [
  "Smart technology for simpler operations",
  "Automation that improves control and speed",
  "Practical innovation with measurable value",
];

const expertise = [
  {
    label: "Purpose",
    title: "Simplify Business Operations",
    text: "We help organizations replace fragmented processes with connected systems, clearer reporting, and stronger decision-making.",
  },
  {
    label: "ERP Focus",
    title: "Integrated Digital Foundations",
    text: "Our work centers on ERP selection, implementation, integration, and optimization across finance, tax, operations, and management reporting.",
  },
  {
    label: "Advisory Expertise",
    title: "ERP, Tax, Accounting & Business Advisory",
    text: "SBS combines system knowledge with tax, accounting, compliance, and process advisory experience to deliver practical transformation.",
  },
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
        subtitle="A technology and advisory firm helping businesses build smarter ERP, finance, tax, and compliance systems."
      />
      <section className="sectionShell splitSection">
        <SectionHeading
          eyebrow="Company Story"
          title="Focused on smarter, scalable business systems"
          text="SBS helps businesses modernize operations through ERP, automation, tax technology, accounting systems, and business process advisory. Our approach is practical, integrated, and built around measurable operational impact."
        />
        <div className="missionStack">
          <article className="glassPanel valuesBlock reveal">
            <span className="iconBadge">M</span>
            <h3>Mission</h3>
            <p>To simplify complex operations through smart systems, automation, financial process optimization, and compliance-focused transformation.</p>
          </article>
          <article className="glassPanel valuesBlock reveal">
            <span className="iconBadge">V</span>
            <h3>Vision</h3>
            <p>To be a trusted partner for organizations seeking scalable, future-ready business systems.</p>
          </article>
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="What We Do" title="A connected view of technology and advisory" />
        <div className="expertiseFlow">
          {expertise.map((item, index) => (
            <article className="expertiseCard reveal" style={{ "--card-delay": `${index * 90}ms` }} key={item.label}>
              <span className="iconBadge">{item.label.slice(0, 3)}</span>
              <small>{item.label}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="Beliefs" title="The Principles Behind Our Work" />
        <div className="approachGrid">
          {beliefs.map((belief, index) => (
            <article className="approachCard valuesBlock reveal" key={belief}>
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
