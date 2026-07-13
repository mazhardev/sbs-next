import Image from "next/image";
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
  { country: "USA", city: "Dallas", image: "/images/locations/dallas.png" },
  { country: "USA", city: "Miami", image: "/images/locations/miami.png" },
  { country: "Canada", city: "Toronto", image: "/images/locations/toronto.png" },
  { country: "UAE", city: "Dubai", image: "/images/locations/dubai.png" },
  { country: "KSA", city: "Riyadh", image: "/images/locations/riyadh.png" },
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
        <SectionHeading
          eyebrow="Locations"
          title="Global Reach, Local Expertise"
          text="With strategically located hubs worldwide, SBS provides seamless consulting, faster fulfillment, and localized support for businesses and consumers."
        />
        <div className="locationGrid">
          {locations.map((location, index) => (
            <article
              className="locationCard reveal"
              style={{ "--card-delay": `${index * 70}ms` }}
              key={`${location.country}-${location.city}`}
              aria-label={`${location.city}, ${location.country}`}
            >
              <Image
                src={location.image}
                alt={`${location.city}, ${location.country}`}
                fill
                sizes="(max-width: 680px) calc(100vw - 68px), (max-width: 1020px) 45vw, 216px"
                className="locationPhoto"
              />
            </article>
          ))}
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
