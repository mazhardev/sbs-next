import { ClientLogos, FinalCta, LeadershipGrid, PageHero, SectionHeading } from "../components/Sections";
import { buildMetadata } from "../seo";

const beliefs = [
  "Smart technology for simpler operations",
  "Automation that improves control and speed",
  "Practical innovation with measurable value",
];

const expertise = [
  {
    label: "Purpose",
    visualPath: "M5 7h14v10H5z M8 10h3v4H8z M13 9h3v5h-3z",
    title: "Simplify Business Operations",
    text: "We help organizations replace fragmented processes with connected systems, clearer reporting, and stronger decision-making.",
  },
  {
    label: "ERP Focus",
    visualPath: "M12 4v4m0 8v4M4 12h4m8 0h4M8.5 8.5l-3-3m10 3 3-3m-10 10-3 3m10-3 3 3M9 9h6v6H9z",
    title: "Integrated Digital Foundations",
    text: "Our work centers on ERP selection, implementation, integration, and optimization across finance, tax, operations, and management reporting.",
  },
  {
    label: "Advisory Expertise",
    visualPath: "M5 18V9m5 9V5m5 13v-6m4 6V7M3 20h18",
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
        title="About Smart Brain Solutions"
        subtitle="A technology and advisory company helping businesses build smarter ERP, finance, tax, and compliance systems."
      />
      <ClientLogos />
      <section className="sectionShell splitSection">
        <SectionHeading
          eyebrow="Company Story"
          title="Focused on smarter, scalable business systems"
          text="SBS helps businesses modernize operations through ERP, automation, tax technology, accounting systems, and business process advisory. Our approach is practical, integrated, and built around measurable operational impact."
        />
        <div className="missionStack">
          <article className="glassPanel reveal">
            <h3>Mission</h3>
            <p>To simplify complex operations through smart systems, automation, financial process optimization, and compliance-focused transformation.</p>
          </article>
          <article className="glassPanel reveal">
            <h3>Vision</h3>
            <p>To be a trusted partner for organizations seeking scalable, future-ready business systems.</p>
          </article>
        </div>
      </section>
      <section className="softBand">
        <div className="sectionShell">
          <SectionHeading eyebrow="What We Do" title="A connected view of technology and advisory" />
          <div className="expertiseFlow">
            {expertise.map((item) => (
              <article className="expertiseCard reveal" key={item.label}>
                <span className="iconBadge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={item.visualPath} /></svg>
                </span>
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="Beliefs" title="The principles behind our work" />
        <div className="approachGrid threeUp">
          {beliefs.map((belief, index) => (
            <article className="approachCard reveal" key={belief}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{belief}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="softBand">
        <div className="sectionShell">
          <SectionHeading eyebrow="Leadership" title="Leadership team" />
          <LeadershipGrid />
          <p className="visionStatement">
            Together, the leadership team at SBS is committed to building intelligent,
            integrated, and future-ready business systems, enabling organizations to
            scale efficiently and succeed in a rapidly evolving digital landscape.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
