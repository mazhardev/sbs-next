import ContactPanel from "../components/ContactPanel";
import { WhatsAppIcon } from "../components/Icons";
import { PageHero } from "../components/Sections";
import JsonLd from "../components/JsonLd";
import { site } from "../data";
import { buildMetadata, contactPageSchema } from "../seo";

const nextSteps = [
  "We review your request and the systems involved.",
  "We arrange a discovery call with the right people.",
  "You receive a recommended approach and next steps.",
];

const socialLinks = [
  {
    label: "Facebook",
    href: site.facebook,
    path: "M14 8.5h2.3V5.1c-.4-.1-1.8-.2-3.3-.2-3.3 0-5.5 2-5.5 5.7v3.2H4v3.8h3.5V24h4.2v-6.4h3.4l.6-3.8h-4v-2.8c0-1.1.3-2.5 2.3-2.5Z",
  },
  {
    label: "Instagram",
    href: site.instagram,
    path: "M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5-2.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z",
  },
  {
    label: "LinkedIn",
    href: site.linkedin,
    path: "M5.3 8.8H1.5V22h3.8V8.8ZM3.4 2A2.2 2.2 0 1 0 3.3 6.4 2.2 2.2 0 0 0 3.4 2Zm18.7 12.4c0-4-2.1-5.9-5-5.9a4.3 4.3 0 0 0-3.9 2.1h-.1V8.8H9.5V22h3.8v-6.5c0-1.7.3-3.4 2.5-3.4s2.2 2 2.2 3.5V22h3.8v-7.6Z",
  },
];

export const metadata = {
  ...buildMetadata("contact"),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <PageHero
        eyebrow="Contact"
        title="Book a Consultation or Request a Proposal"
        subtitle="Tell us about your systems and goals, and take the first step toward a smarter operating model."
        actions={false}
      />
      <section className="sectionShell contactLayout">
        <div className="formCard" id="consultation">
          <h2>Tell us what you want to build</h2>
          <p>Share a few details and send them to us by WhatsApp or email.</p>
          <ContactPanel />
        </div>
        <aside className="contactAside">
          <a className="whatsappCard" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            <span>
              <strong>Chat on WhatsApp</strong>
              <small>Start a direct conversation with SBS</small>
            </span>
          </a>
          <article className="contactCard">
            <h3>Talk to us directly</h3>
            <a href={`tel:+${site.whatsapp}`}>{site.phone}</a>
            <a href={`tel:+${site.whatsappSecondary}`}>{site.whatsappSecondaryLabel}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </article>
          <article className="contactCard">
            <h3>What happens next</h3>
            <ol className="nextSteps">
              {nextSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </article>
          <article className="contactCard">
            <h3>Where we are</h3>
            <p>{site.address}</p>
            <p>Pakistan and Malaysia presence with international remote delivery.</p>
            <div className="socialButtons">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </article>
        </aside>
      </section>
    </>
  );
}
