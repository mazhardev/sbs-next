import ContactPanel from "../components/ContactPanel";
import { FinalCta, PageHero, SectionHeading } from "../components/Sections";
import JsonLd from "../components/JsonLd";
import { site } from "../data";
import { buildMetadata, contactPageSchema } from "../seo";

const contactCards = [
  ["Email", site.email],
  ["Phone / WhatsApp", site.phone],
  ["Location", site.location],
  ["Website", "smartbrainsolution.com"],
];

const whatsappIconPath = "M12.1 2A9.8 9.8 0 0 0 3.7 17l-1.2 4.5 4.6-1.2A9.9 9.9 0 1 0 12.1 2Zm0 2a7.9 7.9 0 1 1-4 14.7l-.3-.2-2.5.7.7-2.4-.2-.4A7.9 7.9 0 0 1 12.1 4Zm-3.3 4.2c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.9 4.4 3.9 2.2.9 2.6.7 3.1.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.4l-1.8-.9c-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-1.9c-.2-.5-.4-.5-.6-.5h-.6Z";

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
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsapp}`,
    path: whatsappIconPath,
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
        title="Ready to Transform Your Business?"
        subtitle="Connect with Smart Brain Solutions today and take the first step toward a smarter future."
      />
      <section className="sectionShell contactLayout">
        <div>
          <SectionHeading eyebrow="Inquiry" title="Tell Us What You Want to Build" />
          <ContactPanel />
        </div>
        <aside className="contactAside">
          {contactCards.map(([label, value]) => (
            <article className="contactCard reveal" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
          <a className="whatsappCard reveal" href={`https://wa.me/${site.whatsapp}`}>
            <span>WhatsApp CTA</span>
            <strong>Start a direct conversation with SBS</strong>
          </a>
          <div className="socialCard reveal">
            <span>Social Channels</span>
            <div className="socialButtons">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>
      <section className="sectionShell mapBand reveal">
        <div>
          <p className="eyebrow">Global Delivery Model</p>
          <h2>Pakistan / Malaysia presence with international delivery capability</h2>
          <p>
            SBS supports regional and global businesses through remote delivery,
            structured project governance, and practical implementation support
            across ERP, tax, finance, and operations.
          </p>
        </div>
        <div className="mapVisual" aria-label="SBS delivery locations across Pakistan, Malaysia, and global markets">
          <svg className="worldMap" viewBox="0 0 620 300" role="img" aria-hidden="true">
            <path d="M47 103c20-34 64-50 105-36 21 7 37 3 56-7 32-17 72-11 99 13 18 16 17 39-2 53-17 12-38 11-58 14-24 4-31 19-24 41 5 16-6 32-22 35-29 6-56-7-77-28-18-18-37-23-62-21-36 3-54-32-37-64Z" />
            <path d="M307 86c36-24 88-31 131-12 20 9 40 11 61 8 31-4 59 13 69 39 12 32-11 65-48 70-21 2-39 10-55 23-29 24-74 25-104 2-18-14-28-33-23-55 4-19-4-32-23-40-18-8-23-25-8-35Z" />
            <path d="M392 219c28-14 61-9 82 13 16 17 9 42-16 49-23 6-51 0-72-13-22-13-18-37 6-49Z" />
          </svg>
          <svg className="deliveryRoutes" viewBox="0 0 620 300" aria-hidden="true">
            <path d="M357 151 C390 131 423 128 454 147 S511 185 555 163" />
            <path d="M357 151 C296 122 229 118 161 145" />
          </svg>
          <div className="mapPin pakistanPin">
            <strong>Pakistan</strong>
            <span>Delivery Hub</span>
          </div>
          <div className="mapPin malaysiaPin">
            <strong>Malaysia</strong>
            <span>Regional Presence</span>
          </div>
          <div className="mapPin globalPin">
            <strong>Global</strong>
            <span>Remote Capability</span>
          </div>
        </div>
      </section>
      <FinalCta />
      <a className="floatingWhatsApp" href={`https://wa.me/${site.whatsapp}`} aria-label="Open WhatsApp chat" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d={whatsappIconPath} />
        </svg>
      </a>
    </>
  );
}
