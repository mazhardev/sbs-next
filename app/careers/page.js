import { PageHero, SectionHeading } from "../components/Sections";
import { site } from "../data";
import { buildMetadata } from "../seo";

const careerAreas = [
  {
    title: "ERP & Systems Consulting",
    text: "Help businesses select, implement, integrate, and improve the systems that run their operations.",
  },
  {
    title: "Finance Transformation",
    text: "Build clearer reporting, stronger controls, and more efficient accounting and finance processes.",
  },
  {
    title: "Tax Advisory & Compliance",
    text: "Support practical tax technology, compliance, and multi-jurisdiction advisory engagements.",
  },
  {
    title: "Automation & Digital Delivery",
    text: "Turn repetitive workflows into connected, scalable digital solutions with measurable impact.",
  },
];

const waysOfWorking = [
  {
    number: "01",
    title: "Think beyond the task",
    text: "Understand the business problem, question assumptions, and design for long-term value.",
  },
  {
    number: "02",
    title: "Own the outcome",
    text: "Work with clarity, communicate early, and follow through on the commitments you make.",
  },
  {
    number: "03",
    title: "Learn across disciplines",
    text: "Grow at the intersection of technology, finance, tax, operations, and advisory work.",
  },
];

export const metadata = {
  ...buildMetadata("careers"),
};

export default function CareersPage() {
  const applicationSubject = encodeURIComponent("Career application - Smart Brain Solutions");

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build smarter systems with us"
        subtitle="Join a multidisciplinary team helping businesses improve how they operate through ERP, finance, tax, automation, and practical advisory."
        actions={false}
      />

      <section className="sectionShell careerIntro">
        <SectionHeading
          eyebrow="Grow With SBS"
          title="Do meaningful work across business and technology"
          text="We value curious people who can connect technical possibilities with real operational needs. At SBS, you will collaborate across disciplines, solve complex problems, and keep learning as our clients grow."
        />
        <aside className="careerApplicationCard reveal">
          <span className="careerStatus">Open applications</span>
          <h2>Introduce yourself</h2>
          <p>
            We review profiles based on current project and team needs. Send your CV,
            preferred area of work, location, and availability to our team.
          </p>
          <a className="primaryButton" href={`mailto:${site.email}?subject=${applicationSubject}`}>
            Email Your CV
          </a>
          <small>{site.email}</small>
        </aside>
      </section>

      <section className="careerAreasSection">
        <div className="sectionShell">
          <SectionHeading
            eyebrow="Career Areas"
            title="Where you can make an impact"
            text="Bring your expertise, develop new capabilities, and work on practical transformation programs across our core disciplines."
          />
          <div className="careerAreaGrid">
            {careerAreas.map((area) => (
              <article className="careerAreaCard reveal" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionShell">
        <SectionHeading
          eyebrow="How We Work"
          title="A place for ownership, curiosity, and growth"
        />
        <div className="careerPrinciples">
          {waysOfWorking.map((item) => (
            <article className="careerPrinciple reveal" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionShell careerApply reveal">
        <div>
          <p className="eyebrow">Your Next Step</p>
          <h2>Interested in joining Smart Brain Solutions?</h2>
          <p>
            Email your CV and a short introduction. If your experience aligns with an
            opportunity, our team will contact you directly.
          </p>
        </div>
        <a className="primaryButton" href={`mailto:${site.email}?subject=${applicationSubject}`}>
          Apply by Email
        </a>
      </section>
    </>
  );
}
