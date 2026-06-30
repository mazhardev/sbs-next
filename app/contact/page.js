import ContactPanel from "../components/ContactPanel";
import { FinalCta, PageHero, SectionHeading } from "../components/Sections";
import { site } from "../data";

const contactCards = [
  ["Email", site.email],
  ["Phone / WhatsApp", site.phone],
  ["Location", site.location],
  ["LinkedIn", site.linkedin],
  ["Website", "www.smartbrainsolutions.com"],
];

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
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
        <div className="mapVisual">
          <span>PK</span>
          <i />
          <span>MY</span>
          <i />
          <span>Global</span>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
