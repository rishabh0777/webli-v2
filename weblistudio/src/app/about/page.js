import AboutPage from "./index.js";

/* ============================
   SEO METADATA — ABOUT PAGE
============================ */
export const metadata = {
  title: "About Webli Studio",
  description:
    "Learn about Webli Studio — a motion-first MERN web studio crafting animated, high-performance websites for startups, creators, and modern brands.",

  keywords: [
    "About Webli Studio",
    "Webli Studio team",
    "MERN web studio",
    "animated website agency",
    "GSAP web design",
    "Indian web development studio",
  ],

  openGraph: {
    title: "About Webli Studio",
    description:
      "Discover how Webli Studio builds motion-led, modern MERN websites designed for launches and first impressions.",
    url: "https://webli.vercel.app/about",
    siteName: "Webli Studio",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Webli Studio",
    description:
      "A motion-first MERN studio crafting playful, modern websites for bold launches.",
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
    "Webli Studio is a motion-first MERN web development studio creating animated, high-performance websites for modern brands.",
  sameAs: [
    "https://www.instagram.com/weblistudio", // add later if needed
    "https://www.linkedin.com/company/weblistudio",
  ],
};

export default function About() {
  return (
    <>
      {/* JSON-LD (Invisible) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Client UI */}
      <AboutPage />
    </>
  );
}
