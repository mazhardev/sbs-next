import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const siteUrl = "https://www.smartbrainsolutions.com/";
const siteDescription =
  "Smart Brain Solutions helps businesses transform operations through ERP implementation, digital automation, tax technology, accounting systems, and compliance advisory.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Odoo ERP Implementation & Support | Smart Brain Solutions",
    template: "%s | Smart Brain Solutions",
  },
  description: siteDescription,
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
    "tax technology",
    "digital transformation",
    "accounting automation",
    "business consulting",
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
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}images/logo.jpeg`,
        width: 1254,
        height: 1254,
        alt: "Smart Brain Solutions - ERP, tax technology, and business transformation consulting",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo ERP Implementation & Support | Smart Brain Solutions",
    description: siteDescription,
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
    icon: [
      {
        url: "/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: "/favicon-96x96.png",
    apple: {
      url: "/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
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
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
