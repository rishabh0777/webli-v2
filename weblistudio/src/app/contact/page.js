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
    url: "/contact",
    siteName: "Webli Studio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Webli Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Webli Studio",
    description:
      "Start your web project with Webli Studio — motion-first MERN websites built for modern brands.",
    images: ["/og.png"],
  },

  alternates: {
    canonical: "/contact",
  },
};

/* ============================
   JSON-LD — ORGANIZATION
============================ */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Webli Studio",
  url: "https://webli.vercel.app",
  description:
    "Webli Studio is a motion-first MERN web development studio creating animated, high-performance websites for startups and modern brands.",
  sameAs: [
    "https://www.instagram.com/webli_studio/",
    "https://www.linkedin.com/in/webli-studio-creative-web-development-agency-250a5336b/",
    "https://github.com/webli-studio",
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
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Client UI */}
      <ContactPage />
    </>
  );
}
