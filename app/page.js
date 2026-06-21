import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Home() {
  const logoPath = "/images/logo.jpeg";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://smartbrainsolution.com/#organization",
        name: "Smart Brain Solutions",
        url: "https://smartbrainsolution.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://smartbrainsolution.com/images/logo.jpeg",
          width: 1254,
          height: 1254,
        },
        slogan: "Think Smart, Solve Better",
        description:
          "Smart Brain Solutions provides professional Odoo ERP implementation, customization, and support that helps businesses streamline operations, improve productivity, and accelerate growth.",
        email: "info@smartbrainsolution.com",
        telephone: "+92 304 7542018",
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@smartbrainsolution.com",
          telephone: "+92 304 7542018",
          contactType: "sales and customer support",
          availableLanguage: "English",
        },
        knowsAbout: [
          "Odoo ERP implementation",
          "Odoo customization",
          "Odoo support",
          "ERP integration",
          "Business process automation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Odoo ERP Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://smartbrainsolution.com/#odoo-implementation",
                name: "Odoo ERP Implementation",
                description:
                  "Professional implementation of Odoo ERP systems aligned with business processes and operational goals.",
                provider: {
                  "@id": "https://smartbrainsolution.com/#organization",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://smartbrainsolution.com/#odoo-customization",
                name: "Odoo ERP Customization",
                description:
                  "Odoo module and workflow customization tailored to specific business requirements.",
                provider: {
                  "@id": "https://smartbrainsolution.com/#organization",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": "https://smartbrainsolution.com/#odoo-support",
                name: "Odoo ERP Support",
                description:
                  "Ongoing Odoo ERP support focused on system reliability, user productivity, and continuous improvement.",
                provider: {
                  "@id": "https://smartbrainsolution.com/#organization",
                },
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://smartbrainsolution.com/#website",
        url: "https://smartbrainsolution.com/",
        name: "Smart Brain Solutions",
        description:
          "Professional Odoo ERP implementation, customization, and support for stronger businesses.",
        publisher: {
          "@id": "https://smartbrainsolution.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://smartbrainsolution.com/#webpage",
        url: "https://smartbrainsolution.com/",
        name: "Odoo ERP Implementation & Support | Smart Brain Solutions",
        isPartOf: {
          "@id": "https://smartbrainsolution.com/#website",
        },
        about: {
          "@id": "https://smartbrainsolution.com/#organization",
        },
        description:
          "Professional Odoo ERP implementation, customization, and support that helps businesses streamline operations, improve productivity, and accelerate growth.",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://smartbrainsolution.com/images/logo.jpeg",
          width: 1254,
          height: 1254,
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="grid" />

      <nav aria-label="Brand navigation">
        <div className="brandMark">
          <span>S</span>
        </div>
        <p>Smart Brain Solutions</p>
        <div className="status"><i /> Building something better</div>
      </nav>

      <section className="hero">
        <div className="copy">
          <p className="eyebrow"><span>01</span> Coming Soon</p>
          <h1>Smart Systems.<br /><em>Stronger Businesses.</em></h1>
          <p className="intro" itemProp="description">
            Smart Brain Solutions specializes in implementing, customizing, and
            supporting Odoo ERP systems that help businesses streamline operations,
            improve productivity, and accelerate growth.
          </p>
          <div className="launchLine">
            <span>We&apos;re Launching Soon</span>
            <div className="line"><i /></div>
          </div>
          <ContactForm />
        </div>

        <div className="visual" aria-label="Smart Brain Solutions logo">
          <div className="orbit orbitOne"><i /></div>
          <div className="orbit orbitTwo"><i /></div>
          <div className="logoCard">
            <span className="corner topLeft" />
            <span className="corner bottomRight" />
            <Image
              src={logoPath}
              alt="Smart Brain Solutions — Think Smart, Solve Better"
              width={1254}
              height={1254}
              priority
            />
          </div>
          <div className="floatTag tagOne">Implementation</div>
          <div className="floatTag tagTwo">Customization</div>
          <div className="floatTag tagThree">Support</div>
        </div>
      </section>

      <footer>
        <p>Think smart. Solve better.</p>
        <p>© {new Date().getFullYear()} Smart Brain Solutions</p>
      </footer>
    </main>
  );
}
