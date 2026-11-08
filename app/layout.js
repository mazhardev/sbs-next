import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";
import MobileCtaBar from "./components/MobileCtaBar";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { asset } from "./data";
import { baseUrl } from "./seo";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

const siteUrl = `${baseUrl}/`;
const siteDescription =
  "Smart Brain Solutions helps businesses transform operations through ERP implementation, digital automation, tax technology, accounting systems, and compliance advisory.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "ERP, Tax Technology & Automation | Smart Brain Solutions",
  description: siteDescription,
  applicationName: "Smart Brain Solutions",
  authors: [{ name: "Smart Brain Solutions", url: siteUrl }],
  creator: "Smart Brain Solutions",
  publisher: "Smart Brain Solutions",
  generator: "Next.js",
  category: "technology",
  keywords: [
    "Smart Brain Solutions",
    "ERP implementation services",
    "ERP integration company",
    "SAP implementation services",
    "Odoo implementation services",
    "Microsoft Dynamics implementation",
    "tax technology",
    "digital transformation",
    "accounting automation",
    "business consulting",
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
    title: "ERP, Tax Technology & Automation | Smart Brain Solutions",
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
    title: "ERP, Tax Technology & Automation | Smart Brain Solutions",
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
        url: asset("/favicon-96x96.png"),
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: asset("/favicon-96x96.png"),
    apple: {
      url: asset("/apple-touch-icon.png"),
      type: "image/png",
      sizes: "180x180",
    },
  },
  manifest: asset("/manifest.webmanifest"),
  other: {
    "theme-color": "#041640",
    "color-scheme": "light",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        <Analytics />
      </body>
    </html>
  );
}
