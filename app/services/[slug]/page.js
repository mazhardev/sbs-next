import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import { FinalCta, PageHero, SectionHeading } from "../../components/Sections";
import { industries, services } from "../../data";
import { breadcrumbSchema, faqSchema, serviceMetadata, serviceSchema } from "../../seo";

const serviceFaqs = {
  "erp-implementation": [
    { question: "What does SBS include in an ERP implementation project?", answer: "SBS supports ERP selection, process design, configuration, integrations, data migration, testing, training, go-live, and post-launch optimization." },
    { question: "Which ERP platforms does SBS work with?", answer: "SBS supports ERP and accounting ecosystems including SAP, Odoo, Microsoft Dynamics, QuickBooks, POS, HRMS, and connected finance or tax tools." },
    { question: "Can SBS integrate ERP with tax and finance workflows?", answer: "Yes. SBS designs ERP integrations for tax compliance, finance reporting, operations, dashboards, and automated controls." },
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

const deliveryProcess = [
  "Discovery and current-state assessment",
  "Future-state design and implementation roadmap",
  "Configuration, integration, migration, and testing",
  "Training, go-live support, and continuous optimization",
];

const serviceFit = {
  "erp-implementation": {
    title: "Built for finance, tax, and operations teams",
    text: "SBS helps businesses move from disconnected tools and manual reporting to integrated ERP systems with clearer controls, better visibility, and stronger adoption.",
  },
  "digital-transformation-automation": {
    title: "Built for teams ready to reduce manual work",
    text: "SBS helps identify high-friction workflows and convert them into practical automated processes that improve speed, accountability, and reporting.",
  },
  "tax-compliance-advisory": {
    title: "Built for regional and multi-country compliance",
    text: "SBS helps tax and finance teams strengthen documentation, reporting controls, and compliance processes across ASPAC and international markets.",
  },
  "tax-technology": {
    title: "Built for digital compliance readiness",
    text: "SBS helps connect ERP, e-invoicing, tax engines, and automated reporting so compliance teams can reduce errors and respond faster to regulatory change.",
  },
  "accounting-financial-solutions": {
    title: "Built for cleaner finance operations",
    text: "SBS helps standardize accounting systems, reporting calendars, MIS dashboards, reconciliations, and audit-ready documentation.",
  },
  "business-process-optimization": {
    title: "Built for scalable operating models",
    text: "SBS helps redesign processes, document SOPs, improve governance, and remove duplicate manual steps that slow teams down.",
  },
  "managed-services-outsourcing": {
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

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

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
      <PageHero
        eyebrow={service.primaryKeyword}
        title={service.title}
        subtitle={`${service.description} SBS helps organizations across ASPAC and international markets build smarter, scalable business systems.`}
      />
      <section className="sectionShell splitSection">
        <SectionHeading
          eyebrow="Service Overview"
          title={`Implementation-ready ${service.title}`}
          text={`${service.details} Our work combines business process understanding, technology delivery, finance discipline, and compliance awareness so the solution works beyond launch.`}
        />
        <div className="glassPanel reveal">
          <h2>{serviceFit[service.slug].title}</h2>
          <p>{serviceFit[service.slug].text}</p>
          <h3>Outcome focus</h3>
          <p>{service.outcome}</p>
        </div>
      </section>
      <section className="sectionShell serviceDetailStack">
        <article className="serviceDetail reveal">
          <div>
            <span className="eyebrow">What SBS Delivers</span>
            <h2>Key deliverables</h2>
            <p>Each engagement is structured around measurable business outcomes, reliable governance, and adoption by the teams who use the system daily.</p>
          </div>
          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="serviceDetail reveal">
          <div>
            <span className="eyebrow">Business Value</span>
            <h2>Benefits for decision-makers</h2>
            <p>SBS focuses on practical improvements for business owners, CFOs, COOs, finance teams, tax teams, and operations leaders.</p>
          </div>
          <ul>
            {serviceBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="serviceDetail reveal">
          <div>
            <span className="eyebrow">Delivery Model</span>
            <h2>Process from strategy to support</h2>
            <p>The SBS delivery model keeps implementation structured, transparent, and aligned with business priorities.</p>
          </div>
          <ul>
            {deliveryProcess.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="Industries" title="Industries and teams supported" />
        <div className="industryGrid">
          {industries.map((industry) => (
            <article className="industryCard reveal" key={industry}>{industry}</article>
          ))}
        </div>
      </section>
      <section className="sectionShell">
        <SectionHeading eyebrow="FAQs" title={`${service.title} FAQs`} />
        <div className="serviceDetailStack">
          {faqs.map((faq) => (
            <article className="listCard reveal" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="sectionShell">
        <div className="glassPanel reveal">
          <h2>Recommended next step</h2>
          <p>Discuss your current systems, compliance requirements, automation gaps, and reporting needs with SBS.</p>
          <Link className="primaryButton" href="/contact/">Get Consultation</Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
