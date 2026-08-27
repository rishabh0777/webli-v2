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
    url: "/about",
    siteName: "Webli Studio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "About Webli Studio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Webli Studio",
    description:
      "A motion-first MERN studio crafting playful, modern websites for bold launches.",
    images: ["/og.png"],
  },

  alternates: {
    canonical: "/about",
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
    "https://www.instagram.com/webli_studio/",
    "https://www.linkedin.com/in/webli-studio-creative-web-development-agency-250a5336b/",
    "https://github.com/webli-studio",
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
