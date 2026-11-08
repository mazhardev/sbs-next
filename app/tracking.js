import { tracking } from "./data";

const ATTRIBUTION_KEY = "sbs_attribution";
const CONSENT_KEY = "sbs_tracking_consent";
const ATTRIBUTION_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const META_STANDARD_EVENTS = {
  generate_lead: "Lead",
  whatsapp_click: "Contact",
  phone_click: "Contact",
  email_click: "Contact",
};

let active = false;

function readStorage(area, key) {
  try {
    return window[area].getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(area, key, value) {
  try {
    window[area].setItem(key, value);
  } catch {
    // Storage can be blocked in private windows. Tracking still works for this page view.
  }
}

export function isTrackingConfigured() {
  return Boolean(tracking.gtmId || tracking.ga4Id || tracking.googleAdsId || tracking.metaPixelId);
}

export function getConsent() {
  return readStorage("localStorage", CONSENT_KEY);
}

export function setConsent(value) {
  writeStorage("localStorage", CONSENT_KEY, value);
}

function loadScripts(sources) {
  const load = () => {
    sources.forEach((src) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = src;
      document.head.appendChild(script);
    });
  };

  // Tags wait for idle time so they never compete with the first paint on phones.
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(load, { timeout: 3000 });
  } else {
    window.setTimeout(load, 1500);
  }
}

export function initTracking() {
  if (active || !isTrackingConfigured()) return;
  active = true;

  window.dataLayer = window.dataLayer || [];
  const sources = [];

  if (tracking.gtmId) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    sources.push(`https://www.googletagmanager.com/gtm.js?id=${tracking.gtmId}`);
  }

  const googleIds = [tracking.ga4Id, tracking.googleAdsId].filter(Boolean);
  if (googleIds.length) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    googleIds.forEach((id) => window.gtag("config", id));
    sources.push(`https://www.googletagmanager.com/gtag/js?id=${googleIds[0]}`);
  }

  if (tracking.metaPixelId) {
    const fbq = function fbq() {
      if (fbq.callMethod) {
        fbq.callMethod.apply(fbq, arguments);
      } else {
        fbq.queue.push(arguments);
      }
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    window.fbq("init", tracking.metaPixelId);
    window.fbq("track", "PageView");
    sources.push("https://connect.facebook.net/en_US/fbevents.js");
  }

  loadScripts(sources);
}

export function track(event, params = {}) {
  if (!active) return;

  const payload = { page_path: window.location.pathname, ...params };

  if (tracking.gtmId) {
    window.dataLayer.push({ event, ...payload });
  }

  if (window.gtag) {
    window.gtag("event", event, payload);
    if (event === "generate_lead" && tracking.googleAdsId && tracking.googleAdsLeadLabel) {
      window.gtag("event", "conversion", { send_to: `${tracking.googleAdsId}/${tracking.googleAdsLeadLabel}` });
    }
  }

  if (window.fbq) {
    const standardEvent = META_STANDARD_EVENTS[event];
    if (standardEvent) {
      window.fbq("track", standardEvent, payload);
    } else {
      window.fbq("trackCustom", event, payload);
    }
  }
}

export function trackPageView(path) {
  if (!active) return;
  if (tracking.gtmId) {
    window.dataLayer.push({ event: "page_view", page_path: path });
  }
  // GA4 records client-side route changes through its own enhanced measurement.
  if (window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function captureAttribution() {
  if (readStorage("sessionStorage", ATTRIBUTION_KEY)) return;

  const query = new URLSearchParams(window.location.search);
  const found = {};
  ATTRIBUTION_PARAMS.forEach((param) => {
    const value = query.get(param);
    if (value) found[param] = value.slice(0, 150);
  });

  if (Object.keys(found).length) {
    found.landing_page = window.location.pathname;
    writeStorage("sessionStorage", ATTRIBUTION_KEY, JSON.stringify(found));
  }
}

export function getAttribution() {
  try {
    return JSON.parse(readStorage("sessionStorage", ATTRIBUTION_KEY)) || {};
  } catch {
    return {};
  }
}

// Lines appended to the lead message so each inquiry shows which campaign produced it.
export function attributionLines() {
  const data = getAttribution();
  if (!data.landing_page) return [];

  const source = data.utm_source || (data.gclid ? "google" : data.fbclid ? "meta" : "");
  const lines = [
    source && `Source: ${[source, data.utm_medium].filter(Boolean).join(" / ")}`,
    data.utm_campaign && `Campaign: ${data.utm_campaign}`,
    data.utm_term && `Keyword: ${data.utm_term}`,
    data.utm_content && `Ad: ${data.utm_content}`,
    `Landing page: ${data.landing_page}`,
    data.gclid && `Google click ID: ${data.gclid}`,
    data.fbclid && `Meta click ID: ${data.fbclid}`,
  ];

  return lines.filter(Boolean);
}
