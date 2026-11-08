import Image from "next/image";
import Link from "next/link";
import { asset, cta, footerLinks, services, site } from "../data";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerGrid">
        <div className="footerBrand">
          <Image src={asset("/images/logo-144.webp")} alt="" width={56} height={56} />
          <h2>{site.name}</h2>
          <p>
            ERP, tax technology, accounting automation, and business
            transformation consulting for growing organizations.
          </p>
          <Link className="primaryButton" href={cta.consultation.href} data-cta="footer-consultation" prefetch={false}>
            {cta.consultation.label}
          </Link>
        </div>
        <div>
          <h3>Company</h3>
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}/`} prefetch={false}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:+${site.whatsapp}`}>Call {site.phone}</a>
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp {site.phone}
          </a>
          <a href={`https://wa.me/${site.whatsappSecondary}`} target="_blank" rel="noreferrer">
            WhatsApp {site.whatsappSecondaryLabel}
          </a>
          <p>{site.address}</p>
          <p>{site.location}</p>
          <div className="footerSocial">
            <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <span>Copyright &copy; {new Date().getFullYear()} Smart Brain Solutions</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
