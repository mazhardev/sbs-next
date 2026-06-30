export const dynamic = "force-static";

export default function sitemap() {
  const routes = ["", "about", "services", "impact", "clients", "insights", "contact"];

  return routes.map((route) => ({
      url: `https://www.smartbrainsolutions.com/${route ? `${route}/` : ""}`,
      lastModified: new Date("2026-06-21"),
      changeFrequency: "weekly",
      priority: 1,
    }));
}
