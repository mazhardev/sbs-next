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
    sitemap: "https://www.smartbrainsolutions.com/sitemap.xml",
    host: "https://www.smartbrainsolutions.com/",
  };
}
