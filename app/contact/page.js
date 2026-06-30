import ContactPanel from "../components/ContactPanel";
import { FinalCta, PageHero, SectionHeading } from "../components/Sections";
import JsonLd from "../components/JsonLd";
import { site } from "../data";
import { buildMetadata, contactPageSchema } from "../seo";

const contactCards = [
  ["Email", site.email],
  ["Phone / WhatsApp", site.phone],
  ["Location", site.location],
  ["LinkedIn", site.linkedin],
  ["Website", "www.smartbrainsolutions.com"],
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
    </>
  );
}
