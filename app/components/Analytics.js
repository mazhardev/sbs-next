"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { tracking } from "../data";
import { captureAttribution, getConsent, initTracking, isTrackingConfigured, setConsent, track, trackPageView } from "../tracking";

function trackedClick(event) {
  const link = event.target.closest?.("a, button");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  if (href.startsWith("https://wa.me")) {
    track("whatsapp_click");
  } else if (href.startsWith("tel:")) {
    track("phone_click");
  } else if (href.startsWith("mailto:")) {
    track("email_click");
  }

  const label = link.getAttribute("data-cta");
  if (label) {
    track("cta_click", { cta_label: label });
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const lastPath = useRef(pathname);
  const [askConsent, setAskConsent] = useState(false);

  useEffect(() => {
    captureAttribution();
    document.addEventListener("click", trackedClick);

    if (isTrackingConfigured()) {
      const consent = getConsent();
      if (!tracking.requireConsent || consent === "granted") {
        initTracking();
      } else if (consent !== "denied") {
        setAskConsent(true);
      }
    }

    return () => document.removeEventListener("click", trackedClick);
  }, []);

  useEffect(() => {
    if (pathname !== lastPath.current) {
      lastPath.current = pathname;
      trackPageView(pathname);
    }
  }, [pathname]);

  if (!askConsent) return null;

  const answer = (value) => {
    setConsent(value);
    setAskConsent(false);
    if (value === "granted") initTracking();
  };

  return (
    <div className="consentBanner" role="region" aria-label="Cookie choices">
      <p>We use analytics and advertising cookies to measure our campaigns. You can decline and still use the whole site.</p>
      <div>
        <button className="primaryButton" type="button" onClick={() => answer("granted")}>Accept</button>
        <button className="secondaryButton" type="button" onClick={() => answer("denied")}>Decline</button>
      </div>
    </div>
  );
}
