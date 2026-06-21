import "./globals.css";

const siteUrl = "https://mazhardev.github.io/sbs-next/";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Smart Brain Solutions | Intelligent Digital Solutions",
    template: "%s | Smart Brain Solutions",
  },
  description:
    "Smart Brain Solutions is building intelligent digital experiences that turn complex challenges into clear, human-centered solutions. Our new website is coming soon.",
  applicationName: "Smart Brain Solutions",
  authors: [{ name: "Smart Brain Solutions", url: siteUrl }],
  creator: "Smart Brain Solutions",
  publisher: "Smart Brain Solutions",
  generator: "Next.js",
  category: "technology",
  keywords: [
    "Smart Brain Solutions",
    "intelligent digital solutions",
    "digital experiences",
    "technology solutions",
    "business technology",
    "human-centered technology",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Smart Brain Solutions",
    title: "Smart Brain Solutions | Think Smart, Solve Better",
    description:
      "We’re shaping intelligent digital experiences that turn complex challenges into clear, human solutions. Launching soon.",
    images: [
      {
        url: `${siteUrl}images/logo.jpeg`,
        width: 1254,
        height: 1254,
        alt: "Smart Brain Solutions logo — Think Smart, Solve Better",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Brain Solutions | Think Smart, Solve Better",
    description:
      "Intelligent digital experiences and better solutions are on the way.",
    images: [`${siteUrl}images/logo.jpeg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/sbs-next/images/logo.jpeg", type: "image/jpeg" }],
    shortcut: "/sbs-next/images/logo.jpeg",
    apple: "/sbs-next/images/logo.jpeg",
  },
  manifest: "/sbs-next/manifest.webmanifest",
  other: {
    "theme-color": "#041640",
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
