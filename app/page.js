import Link from "next/link";
import { FinalCta, InsightsGrid, LeadershipGrid, MetricGrid, OutcomeGrid, SectionHeading, ServicesGrid } from "./components/Sections";
import JsonLd from "./components/JsonLd";
import { clients, industries } from "./data";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "./seo";

const approach = [
  "Technology + Business Integration",
  "Global Experience with Practical Execution",
  "Automation-Driven Solutions",
  "Scalable, Future-Ready Systems",
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), professionalServiceSchema(), websiteSchema()]} />
      <section className="homeHero">
        <div className="heroVideo" aria-hidden="true">
          <iframe
            src="https://player.vimeo.com/video/1028479256?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
            title=""
            allow="autoplay; fullscreen"
            tabIndex={-1}
          />
        </div>
        <div className="heroCopy reveal">
          <h1>Build Smarter, Scalable & Future-Ready Business Systems</h1>
          <p>
            Smart Brain Solutions helps businesses transform operations through
            ERP implementation, digital automation, tax advisory, accounting
            systems, and compliance advisory.
          </p>
          <div className="heroActions">
            <Link className="primaryButton" href="/contact/">Get Consultation</Link>
            <Link className="secondaryButton light" href="/services/">Explore Services</Link>
          </div>
        </div>
      </section>

      <section className="platformShowcase">
        <div className="sectionShell platformLayout">
          <div className="platformCopy reveal">
            <p className="eyebrow">Connected Enterprise Systems</p>
            <h2>One intelligent view across finance, operations, and compliance.</h2>
            <p>
              Connect SAP, Odoo, Microsoft Dynamics, automation, and advisory
              workflows in a scalable operating model built for better decisions.
            </p>
            <div className="platformTags" aria-label="Supported enterprise platforms">
              <span>SAP S/4HANA</span>
              <span>Odoo</span>
              <span>Dynamics 365</span>
              <span>Automation</span>
            </div>
          </div>
          <div className="heroVisual reveal" aria-label="Connected ERP operations dashboard preview">
            <div className="dashboardMock">
              <div className="dashTop">
                <span /><span /><span />
                <b>SBS Operations Cloud</b>
              </div>
              <div className="dashGrid">
                <div className="dashPanel wide">
                  <b>Connected ERP Workflow</b>
                  <div className="workflowSteps">
                    <span>Lead</span><span>Approve</span><span>Invoice</span><span>Report</span>
                  </div>
                  <i />
                </div>
                <div className="dashPanel"><strong>98%</strong><span>Data accuracy</span></div>
                <div className="dashPanel"><strong>10+</strong><span>Jurisdictions</span></div>
                <div className="dashPanel chart"><i /><i /><i /></div>
                <div className="dashPanel finance"><small>Advisory status</small>Tax Ready</div>
              </div>
            </div>
            <div className="node nodeOne">SAP + Odoo</div>
            <div className="node nodeTwo">Automation</div>
            <div className="node nodeThree">Global Delivery</div>
          </div>
        </div>
      </section>

      <section className="sectionShell statsLift">
        <MetricGrid />
      </section>

      <section className="sectionShell clientIndustries">
        <div className="sectionHeading reveal">
          <p className="eyebrow">Clients / Industries</p>
          <h2>Trusted by teams transforming operations</h2>
          <p>
            SBS supports ambitious businesses across finance, manufacturing,
            retail, technology, healthcare, and logistics.
          </p>
        </div>
        <div className="industryOrbit reveal" aria-label="Industries supported by SBS">
          <div className="industryOrbitCore">SBS</div>
          {industries.map((industry, index) => (
            <span
              className="industryOrbitItem"
              key={industry}
              style={{ "--orbit-angle": `${index * 60}deg` }}
            >
              <b>{industry}</b>
            </span>
          ))}
        </div>
      </section>

      <section className="sectionShell selectedClients" aria-labelledby="selected-clients-title">
        <div className="sectionHeading">
          <p className="eyebrow">Selected Clients</p>
          <h2 id="selected-clients-title">Organizations we support</h2>
        </div>
        <div className="clientLogoGrid">
          {clients.map((client) => (
            <a
              className="clientLogoCard reveal"
              href={client.url}
              key={client.name}
              target="_blank"
              rel="noreferrer"
            >
              <span className="clientLogoMark">
                <img src={client.logo} alt="" width="64" height="64" loading="lazy" />
              </span>
              <strong>{client.name}</strong>
            </a>
          ))}
        </div>
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
