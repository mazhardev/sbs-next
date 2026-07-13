import { services } from "./data";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "about",
    "services",
    ...services.map((service) => `services/${service.slug}`),
    "impact",
    "clients",
    "insights",
    "careers",
    "contact",
  ];

  return routes.map((route) => ({
      url: `https://smartbrainsolution.com/${route ? `${route}/` : ""}`,
      lastModified: new Date("2026-06-21"),
      changeFrequency: route.startsWith("services") ? "monthly" : "weekly",
      priority: route === "" ? 1 : route.startsWith("services") ? 0.9 : 0.8,
    }));
}
