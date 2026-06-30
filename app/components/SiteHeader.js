"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "../data";

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
          <Image src="/images/logo.jpeg" alt="" width={48} height={48} priority />
        </span>
        <span>
          <strong>{site.shortName}</strong>
          <small>{site.tagline}</small>
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
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href || `${pathname}/` === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
        <Link className="navCta" href="/contact/">
          Get Consultation
        </Link>
      </nav>
    </header>
  );
}
