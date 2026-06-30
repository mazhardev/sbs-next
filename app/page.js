import Link from "next/link";
import { FinalCta, InsightsGrid, LeadershipGrid, MetricGrid, OutcomeGrid, SectionHeading, ServicesGrid } from "./components/Sections";

const approach = [
  "Technology + Business Integration",
  "Global Experience with Practical Execution",
  "Automation-Driven Solutions",
  "Scalable, Future-Ready Systems",
];

export default function Home() {
  return (
    <>
      <section className="homeHero">
        <div className="heroCopy reveal">
          <p className="eyebrow">Smart Brain Solutions</p>
          <h1>Build Smarter, Scalable & Future-Ready Business Systems</h1>
          <p>
            Smart Brain Solutions helps businesses transform operations through
            ERP implementation, digital automation, tax technology, accounting
            systems, and compliance advisory.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/contact/">Get Consultation</Link>
            <Link className="secondaryButton light" href="/services/">Explore Services</Link>
          </div>
        </div>
        <div className="heroVisual reveal" aria-label="ERP dashboard and automation preview">
          <div className="dashboardMock">
            <div className="dashTop"><span /><span /><span /></div>
            <div className="dashGrid">
              <div className="dashPanel wide"><b>ERP Control Center</b><i /></div>
              <div className="dashPanel"><strong>98%</strong><span>Data accuracy</span></div>
              <div className="dashPanel"><strong>10+</strong><span>Jurisdictions</span></div>
              <div className="dashPanel chart"><i /><i /><i /></div>
              <div className="dashPanel finance">VAT Ready</div>
            </div>
          </div>
          <div className="node nodeOne">Tax Engine</div>
          <div className="node nodeTwo">Automation</div>
          <div className="node nodeThree">Global Delivery</div>
        </div>
      </section>

      <section className="sectionShell statsLift">
        <MetricGrid />
      </section>

      <section className="splitSection sectionShell">
        <div>
          <SectionHeading
            eyebrow="About SBS"
            title="Redefining Business Operations for a Digital-First World"
            text="At Smart Brain Solutions, we redefine how businesses operate in a digital-first world. We combine technology and transformation expertise to create intelligent, scalable, and future-ready solutions that drive real business impact."
          />
        </div>
        <div className="glassPanel reveal">
          <h3>Consulting built around execution</h3>
          <p>
            SBS connects ERP platforms, tax compliance, finance operations, and
            automation into one practical transformation roadmap.
          </p>
        </div>
      </section>

      <section className="sectionShell">
        <SectionHeading
          eyebrow="Services"
          title="Integrated Services for Modern Business Transformation"
          text="A complete consulting and implementation model for ERP, finance, compliance, automation, and managed operations."
        />
        <ServicesGrid />
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Approach" title="Why Our Approach Works" />
        <div className="approachGrid">
          {approach.map((item, index) => (
            <article className="approachCard reveal" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionShell impactBand">
        <SectionHeading
          eyebrow="Impact"
          title="Measurable Transformation Outcomes"
          text="SBS focuses on practical improvements that leaders can see in reporting, speed, compliance, and operational control."
        />
        <OutcomeGrid />
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Leadership" title="Experienced Transformation Leadership" />
        <LeadershipGrid />
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Insights" title="Featured Insights" />
        <InsightsGrid />
      </section>

      <FinalCta />
    </>
  );
}
