export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
    ],
    sitemap: "https://smartbrainsolution.com/sitemap.xml",
    host: "https://smartbrainsolution.com/",
  };
}
