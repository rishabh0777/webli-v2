import Portfolio from "./index.js";

/* ============================
   SEO METADATA — PORTFOLIO
============================ */
export const metadata = {
  title: "Portfolio",
  description:
    "Explore Webli Studio’s portfolio — a collection of animated, motion-driven websites built with modern UI systems, GSAP animations, and MERN technologies.",

  keywords: [
    "Webli Studio portfolio",
    "animated website portfolio",
    "GSAP animation projects",
    "MERN web development work",
    "interactive websites",
    "modern web design projects",
  ],

  openGraph: {
    title: "Portfolio | Webli Studio",
    description:
      "A showcase of motion-led, interactive websites built by Webli Studio using modern frontend technologies.",
    url: "https://webli.vercel.app/portfolio",
    siteName: "Webli Studio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Webli Studio",
    description:
      "Explore animated, interactive web projects crafted by Webli Studio.",
  },
};

/* ============================
   JSON-LD — CREATIVE WORKS
============================ */
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Webli Studio Portfolio",
  description:
    "A collection of animated and interactive web projects built by Webli Studio using modern web technologies.",
  url: "https://webli.vercel.app/portfolio",
  creator: {
    "@type": "Organization",
    name: "Webli Studio",
    url: "https://webli.vercel.app",
  },
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Animated Landing Pages",
      description:
        "Motion-driven landing page projects featuring GSAP animations and modern UI.",
    },
    {
      "@type": "CreativeWork",
      name: "Interactive Web Experiences",
      description:
        "Interactive websites with app-like behavior and smooth transitions.",
    },
    {
      "@type": "CreativeWork",
      name: "Full-Stack MERN Projects",
      description:
        "Scalable MERN-based websites with clean architecture and modern design.",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      {/* JSON-LD — Invisible to users */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />

      {/* Client UI */}
      <Portfolio />
    </>
  );
}
