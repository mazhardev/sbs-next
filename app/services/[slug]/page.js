import Link from "next/link";
import { notFound } from "next/navigation";
import ContactPanel from "../../components/ContactPanel";
import { ArrowIcon, ServiceIcon, WhatsAppIcon } from "../../components/Icons";
import JsonLd from "../../components/JsonLd";
import { ClientLogos, FinalCta, IndustryPills, MetricGrid, ProcessSteps, SectionHeading } from "../../components/Sections";
import { cta, metrics, services, site } from "../../data";
import { breadcrumbSchema, faqSchema, serviceMetadata, serviceSchema } from "../../seo";

const serviceFaqs = {
  "erp-implementation": [
    { question: "What does SBS include in an ERP implementation project?", answer: "SBS supports ERP selection, process design, configuration, integrations, data migration, testing, training, go-live, and post-launch optimization." },
    { question: "Which ERP platforms does SBS work with?", answer: "SBS supports ERP and accounting ecosystems including SAP, Odoo, Microsoft Dynamics, QuickBooks, POS, HRMS, and connected finance or tax tools." },
    { question: "Can SBS integrate ERP with tax and finance workflows?", answer: "Yes. SBS designs ERP integrations for tax compliance, finance reporting, operations, dashboards, and automated controls." },
  ],
  "sap-implementation": [
    { question: "What does an SAP implementation with SBS include?", answer: "SBS supports the fit assessment, roadmap, process design, configuration, data migration, integrations, testing, training, go-live, and post-launch support." },
    { question: "Can SBS connect SAP to our tax and finance processes?", answer: "Yes. SBS designs SAP integrations for tax compliance, finance reporting, operations, and automated controls." },
    { question: "How do we know if SAP is the right ERP for us?", answer: "SBS works across SAP, Odoo, and Microsoft Dynamics, so the assessment starts from your processes and growth plans rather than a single product." },
  ],
  "odoo-implementation": [
    { question: "What does an Odoo implementation with SBS include?", answer: "SBS supports the fit assessment, roadmap, workflow setup, data migration, integrations, testing, training, go-live, and ongoing support." },
    { question: "Can Odoo connect to our existing tools?", answer: "SBS plans integrations between Odoo and your finance, tax, and operations tools so teams work from the same data." },
    { question: "How do we know if Odoo is the right ERP for us?", answer: "SBS works across Odoo, SAP, and Microsoft Dynamics, so the assessment starts from your processes and growth plans rather than a single product." },
  ],
  "digital-transformation-automation": [
    { question: "How does SBS approach digital transformation?", answer: "SBS begins with process discovery, identifies manual bottlenecks, designs practical automation, and implements scalable digital workflows." },
    { question: "What business processes can be automated?", answer: "Common automation areas include approvals, finance workflows, reporting, compliance tasks, customer operations, inventory, and management dashboards." },
    { question: "Does SBS provide transformation strategy only or implementation too?", answer: "SBS provides both strategy and execution, from roadmap design to workflow automation, system integration, reporting, and adoption support." },
  ],
  "tax-compliance-advisory": [
    { question: "Which tax compliance areas does SBS support?", answer: "SBS supports VAT, GST, corporate tax, multi-country compliance, compliance reviews, audit support, and documentation readiness." },
    { question: "Can SBS support GCC and ASPAC compliance requirements?", answer: "Yes. SBS supports regional compliance programs across GCC, ASPAC, and international delivery environments." },
    { question: "How does SBS reduce tax compliance risk?", answer: "SBS strengthens process controls, improves documentation, automates reporting, and aligns ERP data with regulatory obligations." },
  ],
  "tax-technology": [
    { question: "What are tax technology solutions?", answer: "Tax technology solutions use ERP integrations, tax engines, e-invoicing tools, and automated reporting to improve compliance accuracy and speed." },
    { question: "Can SBS implement e-invoicing?", answer: "Yes. SBS helps design and implement e-invoicing workflows, digital gateways, reporting logic, and ERP-to-tax platform integrations." },
    { question: "Does SBS support tax engine implementation?", answer: "SBS supports tax engine design, configuration, testing, ERP integration, and reporting alignment for multi-jurisdiction environments." },
  ],
  "accounting-financial-solutions": [
    { question: "What accounting systems can SBS improve?", answer: "SBS improves accounting setups across ERP, accounting software, reporting tools, bookkeeping processes, and finance control frameworks." },
    { question: "Does SBS provide MIS reporting support?", answer: "Yes. SBS builds structured MIS reporting, dashboards, financial reporting workflows, and audit-ready documentation." },
    { question: "Can SBS standardize bookkeeping processes?", answer: "SBS can standardize charts of accounts, bookkeeping procedures, reconciliations, approval workflows, and reporting calendars." },
  ],
  "business-process-optimization": [
    { question: "What is business process optimization?", answer: "Business process optimization redesigns workflows, roles, controls, and system usage to improve speed, accuracy, cost efficiency, and visibility." },
    { question: "Does SBS develop SOPs?", answer: "Yes. SBS creates practical SOPs, governance models, approval matrices, and documentation that support consistent execution." },
    { question: "Can process optimization reduce operating costs?", answer: "Yes. By removing duplicate steps, improving controls, and automating manual work, SBS helps businesses reduce avoidable effort and cost." },
  ],
  "managed-services-outsourcing": [
    { question: "What managed services does SBS provide?", answer: "SBS provides finance, accounting, tax compliance, back-office, process support, and continuous system monitoring services." },
    { question: "Who should use managed finance services?", answer: "Growing businesses, lean finance teams, international companies, and organizations needing reliable compliance and reporting support can benefit." },
    { question: "Can SBS support clients remotely?", answer: "Yes. SBS serves clients across ASPAC and international markets with a flexible delivery model for remote support." },
  ],
};

const serviceBenefits = [
  "Clear operating model before technology configuration",
  "Stronger data accuracy, reporting, and management visibility",
  "Reduced manual work through automation and standardization",
  "Scalable systems that support multi-country growth",
];

const serviceFit = {
  "erp-implementation": {
    headline: "ERP Implementation Services That Connect Finance, Tax, and Operations",
    pains: ["Finance, sales, and inventory sit in separate tools", "Reports depend on days of spreadsheet work", "An earlier system rollout stalled or was never adopted"],
    title: "Built for finance, tax, and operations teams",
    text: "SBS helps businesses move from disconnected tools and manual reporting to integrated ERP systems with clearer controls, better visibility, and stronger adoption.",
  },
  "sap-implementation": {
    headline: "SAP Implementation Services for Finance, Tax, and Operations Teams",
    pains: ["You are planning a move to SAP and need a clear roadmap", "SAP is live but disconnected from tax and reporting", "Your teams still work around the system in spreadsheets"],
    title: "Built around how your business runs",
    text: "SBS combines SAP delivery with finance, tax, and process experience, so the system reflects your controls and reporting needs as well as the technical design.",
  },
  "odoo-implementation": {
    headline: "Odoo Implementation Services for Growing Businesses",
    pains: ["You have outgrown spreadsheets and basic accounting tools", "Sales, inventory, and finance do not share the same data", "You want one system without enterprise-scale complexity"],
    title: "Built for teams ready to consolidate",
    text: "SBS configures Odoo around your workflows and connects it to your finance and tax processes, so growing teams get one reliable view of the business.",
  },
  "digital-transformation-automation": {
    headline: "Digital Transformation Consulting That Replaces Manual Work",
    pains: ["Approvals and reporting still run on email and spreadsheets", "Manual steps create delays and avoidable errors", "Leaders lack a real-time view of operations"],
    title: "Built for teams ready to reduce manual work",
    text: "SBS helps identify high-friction workflows and convert them into practical automated processes that improve speed, accountability, and reporting.",
  },
  "tax-compliance-advisory": {
    headline: "Tax Compliance Advisory Across GCC, ASPAC, and Global Markets",
    pains: ["Rules differ across every country you operate in", "VAT, GST, and corporate tax filings feel like a risk each period", "Documentation is not ready when an audit arrives"],
    title: "Built for regional and multi-country compliance",
    text: "SBS helps tax and finance teams strengthen documentation, reporting controls, and compliance processes across ASPAC and international markets.",
  },
  "tax-technology": {
    headline: "Tax Technology Solutions for Automated, Digital Compliance",
    pains: ["E-invoicing requirements are arriving faster than your systems", "Tax data is re-keyed between your ERP and filing tools", "Tax reporting takes too long and invites errors"],
    title: "Built for digital compliance readiness",
    text: "SBS helps connect ERP, e-invoicing, tax engines, and automated reporting so compliance teams can reduce errors and respond faster to regulatory change.",
  },
  "accounting-financial-solutions": {
    headline: "Accounting Automation and Financial Reporting Without the Rework",
    pains: ["Month-end depends on manual reconciliations", "Management reports arrive late or do not match", "Bookkeeping differs across teams or entities"],
    title: "Built for cleaner finance operations",
    text: "SBS helps standardize accounting systems, reporting calendars, MIS dashboards, reconciliations, and audit-ready documentation.",
  },
  "business-process-optimization": {
    headline: "Business Process Optimization That Removes Waste and Adds Control",
    pains: ["Work is duplicated across teams and systems", "Processes depend on a few people instead of clear SOPs", "Costs keep rising without better visibility"],
    title: "Built for scalable operating models",
    text: "SBS helps redesign processes, document SOPs, improve governance, and remove duplicate manual steps that slow teams down.",
  },
  "managed-services-outsourcing": {
    headline: "Finance and Accounting Outsourcing You Can Rely On",
    pains: ["Your finance team is stretched by routine work", "Compliance deadlines compete with growth priorities", "Hiring in-house for every function is not practical"],
    title: "Built for reliable ongoing support",
    text: "SBS helps businesses run finance, accounting, tax compliance, and back-office processes through structured managed services and global delivery support.",
  },
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? serviceMetadata(service) : {};
}

function relatedServices(service) {
  const others = services.filter((item) => item.slug !== service.slug);
  const sameCategory = others.filter((item) => item.category === service.category);
  const rest = others.filter((item) => item.category !== service.category);
  return [...sameCategory, ...rest].slice(0, 3);
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const fit = serviceFit[service.slug];
  const faqs = serviceFaqs[service.slug] || [];
  const schema = [
    serviceSchema(service),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
      { name: service.title, path: `/services/${service.slug}/` },
    ]),
    faqSchema(faqs),
  ];

  return (
    <>
      <JsonLd data={schema} />
      <section className="serviceHero">
        <div className="serviceHeroLayout">
          <div className="serviceHeroCopy">
            <p className="eyebrow">{service.category}</p>
            <h1>{fit.headline}</h1>
            <p>{service.description} SBS helps organizations across GCC, ASPAC, and international markets build smarter, scalable business systems.</p>
            <ul className="checkList light">
              {service.includes.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="ctaActions">
              <a className="primaryButton heroFormLink" href="#consultation" data-cta="service-hero-consultation">{cta.consultation.label}</a>
              <a className="secondaryButton light" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
            <MetricGrid dark items={metrics.slice(0, 3)} />
          </div>
          <div className="formCard" id="consultation">
            <h2>Talk to SBS about {service.category === "ERP Implementation" ? service.title.split(" Implementation")[0] : "your project"}</h2>
            <p>Share a few details and send them to us by WhatsApp or email.</p>
            <ContactPanel defaultService={service.title} />
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="sectionShell">
        <SectionHeading eyebrow="Sound Familiar?" title="Where teams usually come to us" />
        <div className="painGrid">
          {fit.pains.map((pain) => <p className="painCard reveal" key={pain}>{pain}</p>)}
        </div>
      </section>

      <section className="softBand">
        <div className="sectionShell splitSection">
          <SectionHeading eyebrow="Service Overview" title={fit.title} text={`${service.details} ${fit.text}`} />
          <div className="glassPanel reveal">
            <h3>What is included</h3>
            <ul className="checkList">
              {service.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="outcomeLine"><strong>Outcome:</strong> {service.outcome}</p>
          </div>
        </div>
      </section>

      <section className="sectionShell">
        <SectionHeading eyebrow="Delivery Model" title="From strategy to support" text="The SBS delivery model keeps implementation structured, transparent, and aligned with business priorities." />
        <ProcessSteps />
      </section>

      <section className="softBand">
        <div className="sectionShell splitSection alignStart">
          <div>
            <SectionHeading eyebrow="Business Value" title="Benefits for decision-makers" />
            <ul className="checkList">
              {serviceBenefits.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Industries" title="Industries we support" />
            <IndustryPills />
          </div>
        </div>
      </section>

      <section className="sectionShell narrowShell">
        <SectionHeading eyebrow="FAQs" title="Common questions" />
        <div className="faqList">
          {faqs.map((faq) => (
            <details className="faqItem" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sectionShell relatedSection">
        <SectionHeading eyebrow="Related Services" title="Often delivered together" />
        <div className="relatedGrid">
          {relatedServices(service).map((item) => (
            <Link className="relatedLink" href={`/services/${item.slug}/`} key={item.slug} prefetch={false}>
              <ServiceIcon slug={item.slug} />
              <span>{item.title}</span>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </section>

      <FinalCta service={service.slug} />
    </>
  );
}
