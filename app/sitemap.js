import { services } from "./data";
import { baseUrl } from "./seo";

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
  const lastModified = new Date();

  return routes.map((route) => ({
      url: `${baseUrl}/${route ? `${route}/` : ""}`,
      lastModified,
      changeFrequency: route.startsWith("services") ? "monthly" : "weekly",
      priority: route === "" ? 1 : route.startsWith("services") ? 0.9 : 0.8,
    }));
}
