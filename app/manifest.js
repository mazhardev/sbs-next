export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Smart Brain Solutions",
    short_name: "Smart Brain",
    description:
      "Intelligent digital experiences that turn complex challenges into clear, human solutions.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7faff",
    theme_color: "#041640",
    orientation: "portrait-primary",
    lang: "en-US",
    icons: [
      {
        src: "/images/logo.jpeg",
        sizes: "1254x1254",
        type: "image/jpeg",
        purpose: "any maskable",
      },
    ],
  };
}
