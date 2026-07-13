import Link from "next/link";
import ImpactCounters from "./components/ImpactCounters";
import { ClientsShowcase, FinalCta, InsightsGrid, LeadershipGrid, MetricGrid, SectionHeading, ServicesGrid } from "./components/Sections";
import JsonLd from "./components/JsonLd";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "./seo";

const approach = [
  "Technology + Business Integration",
  "Global Experience with Practical Execution",
  "Automation-Driven Solutions",
  "Scalable, Future-Ready Systems",
];

const locations = [
  { country: "Saudi Arabia", code: "SA", region: "GCC", x: "39%", y: "38%" },
  { country: "United Arab Emirates", code: "AE", region: "GCC", x: "52%", y: "45%" },
  { country: "Bahrain", code: "BH", region: "GCC", x: "40%", y: "51%" },
  { country: "Qatar", code: "QA", region: "GCC", x: "53%", y: "58%" },
  { country: "Egypt", code: "EG", region: "GCC", x: "28%", y: "47%" },
  { country: "Pakistan", code: "PK", region: "ASPAC", x: "62%", y: "34%" },
  { country: "Singapore", code: "SG", region: "ASPAC", x: "69%", y: "56%" },
  { country: "Australia", code: "AU", region: "ASPAC", x: "62%", y: "74%" },
  { country: "New Zealand", code: "NZ", region: "ASPAC", x: "81%", y: "68%" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), professionalServiceSchema(), websiteSchema()]} />
      <section className="homeHero">
        <div className="heroVideo" aria-hidden="true">
          <iframe
            src="https://player.vimeo.com/video/1028479256?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&playsinline=1"
            title="Technology transformation background video"
            allow="autoplay; fullscreen; picture-in-picture"
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
            <div className="networkField" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <div className="dashboardMock">
              <div className="dashTop">
                <span /><span /><span />
                <b>SBS Operations Cloud</b>
              </div>
              <div className="dashGrid">
                <div className="dashPanel wide">
                  <b>Connected ERP Workflow</b>
                  <div className="workflowTrack">
                    <span>Lead</span><span>Approve</span><span>Invoice</span><span>Report</span>
                  </div>
                  <i />
                </div>
                <div className="dashPanel"><strong>98%</strong><span>Data accuracy</span></div>
                <div className="dashPanel"><strong>10+</strong><span>Jurisdictions</span></div>
                <div className="dashPanel chart"><i /><i /><i /></div>
                <div className="dashPanel finance"><span>Advisory status</span><strong>Tax Ready</strong></div>
              </div>
            </div>
            <div className="automationFlow" aria-hidden="true">
              <span>ERP</span><i /><span>AI</span><i /><span>Tax</span>
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

      <ClientsShowcase compact />

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
        <ServicesGrid summaryOnly />
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Approach" title="Why Our Approach Works" />
        <div className="approachGrid">
          {approach.map((item, index) => (
            <article className="approachCard reveal" key={item}>
              <span className="approachNumber">{String(index + 1).padStart(2, "0")}</span>
              <div className="approachGraphic" aria-hidden="true">
                <span />
                <i />
                <b />
              </div>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="sectionShell impactBand">
        <SectionHeading
          eyebrow="Impact"
          title="High-Impact Transformation Outcomes"
          text="A clearer view of delivery scale, operational improvements, and measurable transformation results across ERP, finance, tax, and automation programs."
        />
        <ImpactCounters />
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Leadership" title="Experienced Transformation Leadership" />
        <LeadershipGrid />
      </section>

      <section className="sectionShell locationsSection">
        <div className="locationsMotion" aria-hidden="true">
          <iframe
            src="https://player.vimeo.com/video/1028479256?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&playsinline=1"
            title="Global technology network background video"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            tabIndex={-1}
          />
        </div>
        <div className="locationsContent">
          <SectionHeading
            eyebrow="GCC / ASPAC Jurisdictions"
            title="Global Reach, Local Expertise"
            text="SBS supports transformation programs across key GCC and ASPAC markets with regional understanding, connected delivery, and practical execution."
          />
          <div className="jurisdictionLayout">
            <div className="jurisdictionGlobe reveal" aria-label="GCC and ASPAC jurisdictions supported by SBS">
              <div className="globeCore" aria-hidden="true">
                <span /><i /><b />
              </div>
              {locations.map((location) => (
                <span
                  className={`globePin globePin-${location.region.toLowerCase()}`}
                  style={{ "--pin-x": location.x, "--pin-y": location.y }}
                  key={location.country}
                >
                  <i>{location.code}</i>
                  <strong>{location.country}</strong>
                </span>
              ))}
            </div>
            <div className="jurisdictionList">
              {locations.map((location, index) => (
                <article
                  className={`jurisdictionCard jurisdictionCard-${location.region.toLowerCase()} reveal`}
                  style={{ "--card-delay": `${index * 55}ms` }}
                  key={location.country}
                >
                  <span>{location.code}</span>
                  <div><small>{location.region}</small><strong>{location.country}</strong></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Insights" title="Featured Insights" />
        <InsightsGrid />
      </section>

      <FinalCta />
    </>
  );
}
