import "./globals.css";

const siteUrl = "https://smartbrainsolution.com/";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Odoo ERP Implementation & Support | Smart Brain Solutions",
    template: "%s | Smart Brain Solutions",
  },
  description:
    "Professional Odoo ERP implementation, customization, and support that helps businesses streamline operations, improve productivity, and accelerate growth.",
  applicationName: "Smart Brain Solutions",
  authors: [{ name: "Smart Brain Solutions", url: siteUrl }],
  creator: "Smart Brain Solutions",
  publisher: "Smart Brain Solutions",
  generator: "Next.js",
  category: "technology",
  keywords: [
    "Smart Brain Solutions",
    "Odoo ERP",
    "Odoo implementation",
    "Odoo customization",
    "Odoo support",
    "Odoo ERP consulting",
    "Odoo integration",
    "ERP systems",
    "business process automation",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Smart Brain Solutions",
    title: "Odoo ERP Implementation & Support | Smart Brain Solutions",
    description:
      "Professional Odoo ERP implementation, customization, and support for streamlined operations, greater productivity, and sustainable business growth.",
    images: [
      {
        url: `${siteUrl}images/logo.jpeg`,
        width: 1254,
        height: 1254,
        alt: "Smart Brain Solutions - Odoo ERP implementation, customization, and support",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo ERP Implementation & Support | Smart Brain Solutions",
    description:
      "Professional Odoo ERP services that streamline operations, improve productivity, and support business growth.",
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
    icon: [{ url: "/images/logo.jpeg", type: "image/jpeg" }],
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  manifest: "/manifest.webmanifest",
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
