import Link from "next/link";
import { insights, leaders, metrics, outcomes, services, site } from "../data";

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="pageHero">
      <div className="sectionShell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="sectionHeading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export function ServiceCard({ service }) {
  return (
    <article className="serviceCard reveal">
      <span className="iconBadge">{service.icon}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <strong>{service.outcome}</strong>
      <Link href={`/services/${service.slug}/`}>Learn More</Link>
    </article>
  );
}

export function ServicesGrid({ limit }) {
  const shown = limit ? services.slice(0, limit) : services;
  return (
    <div className="servicesGrid">
      {shown.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}

export function MetricGrid({ compact = false }) {
  return (
    <div className={compact ? "metricGrid compact" : "metricGrid"}>
      {metrics.map((metric) => (
        <div className="metricCard reveal" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export function OutcomeGrid() {
  return (
    <div className="outcomeGrid">
      {outcomes.map((outcome) => (
        <article className="outcomeCard reveal" key={outcome.label}>
          <strong>{outcome.value}</strong>
          <p>{outcome.label}</p>
        </article>
      ))}
    </div>
  );
}

export function LeadershipGrid() {
  return (
    <div className="leadershipGrid">
      {leaders.map((leader) => (
        <article className="leaderCard reveal" key={leader.name}>
          <div className="avatar">{leader.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
          <div>
            <h3>{leader.name}</h3>
            <span>{leader.role}</span>
            <p>{leader.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function InsightsGrid() {
  return (
    <div className="insightsGrid">
      {insights.map((post, index) => (
        <article className="blogCard reveal" key={post.title}>
          <div className="blogVisual">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="blogMeta">
            <span>{post.category}</span>
            <span>{post.date}</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <Link href="/insights/">Read More</Link>
        </article>
      ))}
    </div>
  );
}

export function FinalCta() {
  return (
    <section className="finalCta sectionShell reveal">
      <div>
        <p className="eyebrow">Next Step</p>
        <h2>Ready to transform your business operations?</h2>
        <p>Let&apos;s turn your ideas into intelligent, scalable solutions.</p>
      </div>
      <div className="ctaActions">
        <Link className="primaryButton" href="/contact/">Contact SBS</Link>
        <a className="secondaryButton" href={`https://wa.me/${site.whatsapp}`}>WhatsApp Us</a>
      </div>
    </section>
  );
}
