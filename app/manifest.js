export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Smart Brain Solutions",
    short_name: "Smart Brain",
    description:
      "Smart Brain Solutions specializes in implementing, customizing, and supporting Odoo ERP systems that help businesses streamline operations, improve productivity, and accelerate growth.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7faff",
    theme_color: "#041640",
    orientation: "portrait-primary",
    lang: "en-US",
    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/logo.jpeg",
        sizes: "1254x1254",
        type: "image/jpeg",
        purpose: "any maskable",
      },
    ],
  };
}
