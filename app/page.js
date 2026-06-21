import Image from "next/image";

export default function Home() {
  const logoPath = process.env.NODE_ENV === "production"
    ? "/sbs-next/images/logo.jpeg"
    : "/images/logo.jpeg";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mazhardev.github.io/sbs-next/#organization",
        name: "Smart Brain Solutions",
        url: "https://mazhardev.github.io/sbs-next/",
        logo: {
          "@type": "ImageObject",
          url: "https://mazhardev.github.io/sbs-next/images/logo.jpeg",
          width: 1254,
          height: 1254,
        },
        slogan: "Think Smart, Solve Better",
        description:
          "Smart Brain Solutions builds intelligent, human-centered digital experiences.",
      },
      {
        "@type": "WebSite",
        "@id": "https://mazhardev.github.io/sbs-next/#website",
        url: "https://mazhardev.github.io/sbs-next/",
        name: "Smart Brain Solutions",
        description:
          "Intelligent digital experiences and better solutions, coming soon.",
        publisher: {
          "@id": "https://mazhardev.github.io/sbs-next/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://mazhardev.github.io/sbs-next/#webpage",
        url: "https://mazhardev.github.io/sbs-next/",
        name: "Smart Brain Solutions | Intelligent Digital Solutions",
        isPartOf: {
          "@id": "https://mazhardev.github.io/sbs-next/#website",
        },
        about: {
          "@id": "https://mazhardev.github.io/sbs-next/#organization",
        },
        description:
          "Smart Brain Solutions is building intelligent digital experiences that turn complex challenges into clear, human-centered solutions.",
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
          <p className="eyebrow"><span>01</span> A smarter future is loading</p>
          <h1>Bright ideas.<br /><em>Better solutions.</em></h1>
          <p className="intro" itemProp="description">
            We’re shaping intelligent digital experiences that turn complex
            challenges into clear, human solutions.
          </p>
          <div className="launchLine">
            <span>Launching soon</span>
            <div className="line"><i /></div>
          </div>
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
          <div className="floatTag tagOne">Ideas</div>
          <div className="floatTag tagTwo">Technology</div>
          <div className="floatTag tagThree">Impact</div>
        </div>
      </section>

      <footer>
        <p>Think smart. Solve better.</p>
        <p>© {new Date().getFullYear()} Smart Brain Solutions</p>
      </footer>
    </main>
  );
}
