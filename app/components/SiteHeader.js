"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset, consultationHref, cta, navItems, services } from "../data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className="siteHeader">
      <Link className="brand" href="/" aria-label="Smart Brain Solutions home" prefetch={false}>
        <span className="brandLogo">
          <Image src={asset("/images/logo-144.webp")} alt="" width={72} height={72} priority />
        </span>
        <span className="brandName">Smart Brain Solutions</span>
      </Link>

      <nav className={`siteNav ${isOpen ? "isOpen" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href || `${pathname}/` === item.href;

          if (item.href === "/services/") {
            return (
              <div className="navDropdown" key={item.href}>
                <div className="navDropdownRow">
                  <Link className={pathname.startsWith("/services") ? "active" : ""} href={item.href} prefetch={false}>
                    {item.label}
                  </Link>
                  <button
                    className="dropdownToggle"
                    type="button"
                    aria-label="Show services"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    <span className="dropdownChevron" aria-hidden="true" />
                  </button>
                </div>
                <div className={`servicesDropdown ${servicesOpen ? "isExpanded" : ""}`}>
                  {services.map((service) => (
                    <Link href={`/services/${service.slug}/`} key={service.slug} prefetch={false}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link key={item.href} href={item.href} className={isActive ? "active" : ""} prefetch={false}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link className="primaryButton headerCta" href={consultationHref(pathname)} data-cta="header-consultation" prefetch={false}>
        {cta.consultation.label}
      </Link>

      <button
        className="menuButton"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
