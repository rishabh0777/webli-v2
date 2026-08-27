export const metadata = {
  title: "Animated MERN Web Development Studio",
  description:
    "Webli Studio builds animated, high-performance MERN websites using GSAP and Framer Motion. Clean UI, smooth interactions, and fast delivery.",
  alternates: {
    canonical: "/",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Webli Studio",
  url: "https://webli.vercel.app",
  description:
    "Webli Studio is a motion-first MERN web development studio creating animated, high-performance websites for modern brands.",
  publisher: {
    "@type": "Organization",
    name: "Webli Studio",
    url: "https://webli.vercel.app",
  },
};

import Hero from "./landing/hero";
import AboutPreview from "./landing/aboutPreview";
import ServicePreview from "./landing/servicePreview";
import PortfolioPreview from "./landing/portfolioPreview";
import TestimonialPreview from "./landing/testimonialPreview";
import CTA from "./landing/CTA";

export default function Home() {
  return (
    <main className="relative w-screen bg-black overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Hero />
      <AboutPreview />
      <ServicePreview />
      <PortfolioPreview />
      <TestimonialPreview />
      <CTA />
    </main>
  );
}
