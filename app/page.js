import Link from "next/link";
import { ArrowIcon, ServiceIcon } from "./components/Icons";
import JsonLd from "./components/JsonLd";
import { ClientLogos, CtaButtons, FinalCta, LeadershipGrid, MetricGrid, ProcessSteps, SectionHeading, ServicesGrid } from "./components/Sections";
import { outcomes, platforms, site } from "./data";
import { organizationSchema, professionalServiceSchema, websiteSchema } from "./seo";

const intentLinks = [
  { slug: "sap-implementation", label: "SAP implementation", note: "S/4HANA planning, rollout, and integration" },
  { slug: "odoo-implementation", label: "Odoo implementation", note: "One connected system for growing teams" },
  { slug: "erp-implementation", label: "Choosing or replacing an ERP", note: "Selection, design, and integration" },
  { slug: "tax-compliance-advisory", label: "Tax advisory and compliance", note: "VAT, GST, and corporate tax across markets" },
];

const approach = [
  { title: "Technology + business integration", text: "Systems designed around finance, tax, and operating realities." },
  { title: "Global experience, practical execution", text: "Regional understanding with structured project delivery." },
  { title: "Automation-driven solutions", text: "Less manual work, stronger controls, and faster reporting." },
  { title: "Scalable, future-ready systems", text: "Foundations that keep working as you add markets and teams." },
];

const jurisdictions = [
  { region: "GCC", countries: ["Saudi Arabia", "United Arab Emirates", "Bahrain", "Qatar"] },
  { region: "MENA", countries: ["Egypt"] },
  { region: "ASPAC", countries: ["Pakistan", "Singapore", "Australia", "New Zealand"] },
];

export default function Home() {
  return (
    <>
      <JsonLd data={[organizationSchema(), professionalServiceSchema(), websiteSchema()]} />
      <section className="homeHero">
        <div className="heroLayout">
          <div className="heroCopy">
            <p className="eyebrow">ERP implementation and advisory</p>
            <h1>ERP, Tax Technology &amp; Automation That Connect Your Whole Business</h1>
            <p>
              Smart Brain Solutions implements SAP, Odoo, and Microsoft Dynamics,
              then connects them to your tax, accounting, and reporting so every
              team works from the same numbers.
            </p>
            <CtaButtons light />
            <a className="heroChatLink" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
              Prefer to chat? Message us on WhatsApp
            </a>
          </div>
          <aside className="intentCard">
            <h2>What do you need help with?</h2>
            {intentLinks.map((item) => (
              <Link className="intentLink" href={`/services/${item.slug}/`} key={item.slug} data-cta={`hero-intent-${item.slug}`} prefetch={false}>
                <ServiceIcon slug={item.slug} />
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.note}</small>
                </span>
                <ArrowIcon />
              </Link>
            ))}
            <Link className="textLink" href="/services/" prefetch={false}>See all services</Link>
          </aside>
        </div>
        <div className="heroMetrics">
          <MetricGrid dark />
        </div>
      </section>

      <ClientLogos />

      <section className="sectionShell">
        <SectionHeading
          eyebrow="Services"
          title="Integrated services for modern business transformation"
          text="A complete consulting and implementation model for ERP, finance, compliance, automation, and managed operations."
        />
        <ServicesGrid />
      </section>

      <section className="softBand">
        <div className="sectionShell">
          <SectionHeading eyebrow="How We Work" title="A clear path from first call to go-live" />
          <ProcessSteps />
          <div className="platformRow">
            <span>Platforms we work with</span>
            <div className="chipList">
              {platforms.map((platform) => <span key={platform}>{platform}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="darkBand">
        <div className="sectionShell">
          <SectionHeading
            eyebrow="Impact"
            title="High-impact transformation outcomes"
            text="Measurable improvements across ERP, finance, tax, and automation programs."
          />
          <MetricGrid dark items={outcomes} />
          <Link className="textLink light" href="/impact/" prefetch={false}>See our impact</Link>
        </div>
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Why SBS" title="Why our approach works" />
        <div className="approachGrid">
          {approach.map((item, index) => (
            <article className="approachCard reveal" key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="softBand">
        <div className="sectionShell">
          <SectionHeading eyebrow="Leadership" title="Experienced transformation leadership" />
          <LeadershipGrid />
        </div>
      </section>

      <section className="sectionShell">
        <SectionHeading
          eyebrow="Global Reach"
          title="Regional understanding, connected delivery"
          text="SBS supports transformation programs across key GCC, MENA, and ASPAC markets."
        />
        <div className="regionGrid">
          {jurisdictions.map((group) => (
            <article className="regionCard reveal" key={group.region}>
              <h3>{group.region}</h3>
              <p>{group.countries.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
