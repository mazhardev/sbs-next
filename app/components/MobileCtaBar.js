"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { consultationHref, cta, site } from "../data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function MobileCtaBar() {
  const pathname = usePathname();
  const whatsappHref = `https://wa.me/${site.whatsapp}`;

  return (
    <>
      <div className="mobileCtaBar">
        <a href={`tel:+${site.whatsapp}`}>
          <PhoneIcon />
          Call
        </a>
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          WhatsApp
        </a>
        <Link className="mobileCtaPrimary" href={consultationHref(pathname)} data-cta="mobile-bar-consultation" prefetch={false}>
          {cta.consultation.label}
        </Link>
      </div>
      <a className="floatingWhatsApp" href={whatsappHref} aria-label="Chat with SBS on WhatsApp" target="_blank" rel="noreferrer">
        <WhatsAppIcon />
      </a>
    </>
  );
}
