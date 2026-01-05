import ContactPage from "./index.js";

/* ============================
   SEO METADATA — CONTACT PAGE
============================ */
export const metadata = {
  title: "Contact Webli Studio",
  description:
    "Contact Webli Studio to start your web project. Animated landing pages, interactive websites, MERN applications, and motion-first digital experiences.",

  keywords: [
    "contact web development agency",
    "hire web developer India",
    "animated website development",
    "MERN web development contact",
    "Webli Studio contact",
  ],

  openGraph: {
    title: "Contact Webli Studio",
    description:
      "Get in touch with Webli Studio to build motion-first, high-performance websites for your brand or startup.",
    url: "https://webli.vercel.app/contact",
    siteName: "Webli Studio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Webli Studio",
    description:
      "Start your web project with Webli Studio — motion-first MERN websites built for modern brands.",
  },
};

/* ============================
   JSON-LD — LOCAL BUSINESS
============================ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Webli Studio",
  description:
    "Webli Studio is a motion-first MERN web development studio creating animated, high-performance websites for startups and modern brands.",
  url: "https://webli.vercel.app",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceOffered: [
    {
      "@type": "Service",
      name: "Animated Landing Pages",
    },
    {
      "@type": "Service",
      name: "Interactive Websites",
    },
    {
      "@type": "Service",
      name: "MERN Stack Web Applications",
    },
    {
      "@type": "Service",
      name: "Startup MVP Development",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

export default function Contact() {
  return (
    <>
      {/* JSON-LD — Invisible to users */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Client UI */}
      <ContactPage />
    </>
  );
}
