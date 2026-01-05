import ServicePage from "./index.js";

/* ============================
   SEO METADATA — SERVICES PAGE
============================ */
export const metadata = {
  title: "Web Development Services",
  description:
    "Explore Webli Studio’s web development services — animated landing pages, interactive web experiences, MERN applications, dashboards, and startup MVPs.",

  keywords: [
    "web development services",
    "animated websites",
    "MERN stack development",
    "GSAP animation websites",
    "startup MVP development",
    "React and Next.js services",
    "Indian web development studio",
  ],

  openGraph: {
    title: "Web Development Services | Webli Studio",
    description:
      "Motion-first web development services including animated landing pages, interactive websites, dashboards, and scalable MERN applications.",
    url: "https://webli.vercel.app/services",
    siteName: "Webli Studio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Webli Studio",
    description:
      "Motion-first MERN web development services built for startups and modern brands.",
  },
};

/* ============================
   JSON-LD — SERVICES
============================ */
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Organization",
    name: "Webli Studio",
    url: "https://webli.vercel.app",
  },
  serviceType: "Web Development Services",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Webli Studio Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Animated Landing Pages",
          description:
            "High-impact landing pages built with GSAP animations and conversion-focused layouts.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interactive Web Experiences",
          description:
            "Motion-rich, app-like web experiences using GSAP and Framer Motion.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brand Refresh Websites",
          description:
            "Modern redesigns that elevate brand presence with motion and structure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dashboards & Admin Panels",
          description:
            "Scalable dashboards and admin panels built with the MERN stack.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Startup MVP Development",
          description:
            "Rapid MVP development for startups using React and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Secure Full-Stack Applications",
          description:
            "Production-ready MERN applications with authentication and scalable architecture.",
        },
      },
    ],
  },
};

export default function Services() {
  return (
    <>
      {/* JSON-LD — Invisible to users */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      {/* Client UI */}
      <ServicePage />
    </>
  );
}
