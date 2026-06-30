import Image from "next/image";
import Link from "next/link";
import { navItems, services, site } from "../data";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerCta">
        <p>Let&apos;s build smarter business systems together.</p>
        <Link href="/contact/">Start a Consultation</Link>
      </div>
      <div className="footerGrid">
        <div className="footerBrand">
          <Image src="/images/logo.jpeg" alt="Smart Brain Solutions" width={56} height={56} />
          <h2>{site.name}</h2>
          <p>
            Premium ERP, tax technology, accounting automation, and business
            transformation consulting for growing organizations.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((service) => (
            <Link key={service.title} href={`/services/${service.slug}/`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <p>{site.email}</p>
          <p>{site.phone}</p>
          <p>{site.location}</p>
          <p>LinkedIn: {site.linkedin}</p>
        </div>
      </div>
      <div className="footerBottom">
        <span>Copyright &copy; {new Date().getFullYear()} Smart Brain Solutions</span>
        <span>{site.tagline}</span>
      </div>
    </footer>
  );
}
