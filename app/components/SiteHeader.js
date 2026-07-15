"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, services } from "../data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`siteHeader ${scrolled || isOpen ? "isScrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Smart Brain Solutions home">
        <span className="brandLogo">
          <Image
            src="/images/logo.jpeg"
            alt="Smart Brain Solutions"
            width={64}
            height={64}
            priority
          />
        </span>
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

      <nav className={`siteNav ${isOpen ? "isOpen" : ""}`} aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href || `${pathname}/` === item.href;

          if (item.href === "/services/") {
            return (
              <div className="navDropdown" key={item.href}>
                <Link className={isActive || pathname.startsWith("/services/") ? "active" : ""} href={item.href}>
                  {item.label}<span className="dropdownChevron" aria-hidden="true" />
                </Link>
                <div className="servicesDropdown" aria-label="Services submenu">
                  {services.map((service) => (
                    <Link href={`/services/${service.slug}/`} key={service.slug}>{service.title}</Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link key={item.href} href={item.href} className={isActive ? "active" : ""}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
