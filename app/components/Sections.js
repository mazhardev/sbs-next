import Link from "next/link";
import { clients, industries, insights, leaders, metrics, outcomes, services, site } from "../data";
import AnimatedMetricGrid from "./AnimatedMetricGrid";

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

export function ServiceCard({ service, index = 0 }) {
  return (
    <article className="serviceCard reveal" style={{ "--card-delay": `${index * 70}ms` }}>
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
      {shown.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}

export function MetricGrid({ compact = false }) {
  return <AnimatedMetricGrid compact={compact} />;
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

export function ClientsShowcase({ compact = false }) {
  const sliderClients = [...clients, ...clients];

  return (
    <section className={compact ? "sectionShell clientsSection compact" : "sectionShell clientsSection"}>
      <div className="clientsHeader">
        <SectionHeading
          eyebrow="Clients / Industries"
          title="Trusted by teams transforming operations"
          text="SBS supports ambitious businesses across metals, retail, food, technology, finance, logistics, and real estate with practical transformation programs."
        />
      </div>

      <div className="clientOrbitWrap reveal">
        <div className="clientOrbit" aria-hidden="true">
          {clients.slice(0, 6).map((client, index) => (
            <span className={`orbitLogo orbitLogo${index + 1}`} key={client.name}>
              {client.initials}
            </span>
          ))}
          <strong>SBS</strong>
        </div>
      </div>

      <div className="clientSlider" aria-label="Client logo carousel">
        <div className="clientTrack">
          {sliderClients.map((client, index) => (
            <a
              className="clientLogo reveal"
              href={client.href}
              target={client.href.startsWith("http") ? "_blank" : undefined}
              rel={client.href.startsWith("http") ? "noreferrer" : undefined}
              style={{ "--card-delay": `${(index % clients.length) * 70}ms` }}
              key={`${client.name}-${index}`}
            >
              <span>{client.initials}</span>
              <strong>{client.name}</strong>
              <small>{client.industry}</small>
            </a>
          ))}
        </div>
      </div>

      <div className="industryPillGrid">
        {industries.map((industry, index) => (
          <article
            className="industryPill reveal"
            style={{ "--card-delay": `${index * 55}ms` }}
            key={industry}
          >
            <span>{industry.split(" ").map((part) => part[0]).join("").replace(/[^A-Z]/g, "").slice(0, 2)}</span>
            <strong>{industry}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LeadershipGrid() {
  return (
    <div className="leadershipGrid">
      {leaders.map((leader, index) => (
        <article className={`leaderCard reveal slide-${index % 2 === 0 ? "left" : "right"}`} key={leader.name}>
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
      {insights.map((post, index) => {
        const postPath = `/insights/#${post.slug}`;
        const postUrl = new URL(postPath, site.url).toString();
        const shareText = encodeURIComponent(`${post.title} | ${site.name}`);
        const shareUrl = encodeURIComponent(postUrl);

        return (
          <article
            className="blogCard reveal"
            id={post.slug}
            style={{ "--card-delay": `${index * 80}ms` }}
            key={post.title}
          >
            <div className={`blogVisual insightVisual${index + 1} ${post.visual}`} aria-label={`${post.title} featured visual`}>
              <span className="insightOrb" />
              <span className="insightGlyph">{post.category.split(" ")[0]}</span>
              <div className="visualBars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="blogMeta">
              <span>{post.category}</span>
            </div>
            <div className="categoryTags" aria-label={`${post.title} categories`}>
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div className="blogActions">
              <div className="shareActions" aria-label={`Share ${post.title}`}>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Share on LinkedIn
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Share on Facebook
                </a>
              </div>
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
        <h2>Keep the conversation moving across Insights and social channels</h2>
        <p>
          Share publications from the website to LinkedIn or Facebook, and use
          the official SBS pages to bring social updates back to the knowledge hub.
        </p>
      </div>
      <div className="followActions" aria-label="Official Smart Brain Solutions social pages">
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={site.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
      </div>
    </section>
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
        <Link className="primaryButton" href="/contact/">Get Consultation</Link>
        <a className="secondaryButton" href={`https://wa.me/${site.whatsapp}`}>WhatsApp Us</a>
      </div>
    </section>
  );
}
