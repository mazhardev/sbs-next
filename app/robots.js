export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mazhardev.github.io/sbs-next/sitemap.xml",
    host: "https://mazhardev.github.io/sbs-next/",
  };
}
