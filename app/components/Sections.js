import Link from "next/link";
import { asset, clients, cta, deliveryProcess, industries, insights, leaders, metrics, services, site } from "../data";
import { ArrowIcon, ServiceIcon } from "./Icons";

export function CtaButtons({ service, light = false, label = "hero" }) {
  const suffix = service ? `&service=${service}` : "";

  return (
    <div className="ctaActions">
      <Link className="primaryButton" href={`${cta.consultation.href}${suffix}`} data-cta={`${label}-consultation`} prefetch={false}>
        {cta.consultation.label}
      </Link>
      <Link className={`secondaryButton ${light ? "light" : ""}`.trim()} href={`${cta.proposal.href}${suffix}`} data-cta={`${label}-proposal`} prefetch={false}>
        {cta.proposal.label}
      </Link>
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, className = "", actions = true }) {
  return (
    <section className={`pageHero ${className}`.trim()}>
      <div className="sectionShell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {actions ? <CtaButtons light /> : null}
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
      <ServiceIcon slug={service.slug} />
      <h3>
        <Link href={`/services/${service.slug}/`} prefetch={false}>{service.title}</Link>
      </h3>
      <p>{service.description}</p>
      <strong>{service.outcome}</strong>
      <span className="cardArrow">Learn more <ArrowIcon /></span>
    </article>
  );
}

export function ServicesGrid({ exclude }) {
  const shown = exclude ? services.filter((service) => service.slug !== exclude) : services;

  return (
    <div className="servicesGrid">
      {shown.map((service) => <ServiceCard key={service.slug} service={service} />)}
    </div>
  );
}

export function MetricGrid({ items = metrics, dark = false }) {
  return (
    <div className={dark ? "metricGrid dark" : "metricGrid"}>
      {items.map((metric) => (
        <div className="metricCard" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ClientLogos({ title = "Trusted by teams across the region" }) {
  return (
    <section className="logoBand" aria-label="Selected SBS clients">
      <div className="logoBandShell">
        <p>{title}</p>
        <div className="logoStrip">
          {clients.map((client) => (
            <div className="logoItem" key={client.name}>
              <img src={asset(client.logo)} alt="" width="40" height="40" loading="lazy" decoding="async" />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryPills() {
  return (
    <div className="industryPillGrid">
      {industries.map((industry) => <span className="industryPill" key={industry}>{industry}</span>)}
    </div>
  );
}

export function ProcessSteps() {
  return (
    <ol className="processGrid">
      {deliveryProcess.map((step, index) => (
        <li className="processStep reveal" key={step.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function LeadershipGrid() {
  return (
    <div className="leadershipGrid">
      {leaders.map((leader) => (
        <article className="leaderCard reveal" key={leader.name}>
          <div className="avatar" aria-hidden="true">{leader.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
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
      {insights.map((post) => {
        const postPath = `/insights/#${post.slug}`;
        const postUrl = new URL(postPath, site.url).toString();
        const shareText = encodeURIComponent(`${post.title} | ${site.name}\n${postUrl}`);
        const shareUrl = encodeURIComponent(postUrl);

        return (
          <article className="blogCard reveal" id={post.slug} key={post.title}>
            <div className="blogMeta">
              <span>{post.category}</span>
              <span className="blogStatus">{post.date}</span>
            </div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div className="categoryTags" aria-label={`${post.title} categories`}>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="shareActions" aria-label={`Share ${post.title}`}>
              <a
                href={`https://www.linkedin.com/feed/?shareActive=true&text=${shareText}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Share ${post.title} on LinkedIn`}
              >
                Share on LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Share ${post.title} on Facebook`}
              >
                Share on Facebook
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function SocialFollowSection() {
  return (
    <section className="sectionShell followSection reveal">
      <div>
        <p className="eyebrow">Follow Us</p>
        <h2>Get new insights as they are published</h2>
        <p>Follow Smart Brain Solutions for updates on ERP, tax technology, and business transformation.</p>
      </div>
      <div className="followActions" aria-label="Official Smart Brain Solutions social pages">
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
      </div>
    </section>
  );
}

export function FinalCta({ service }) {
  return (
    <section className="finalCta">
      <div className="finalCtaInner">
        <div>
          <h2>Ready to transform your business operations?</h2>
          <p>Tell us about your systems and goals. We will help you plan the next step.</p>
        </div>
        <CtaButtons light service={service} label="final" />
      </div>
    </section>
  );
}
