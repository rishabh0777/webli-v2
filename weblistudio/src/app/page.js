export const metadata = {
  title: "Webli Studio — We Build. You Launch.",
  description:
    "Webli Studio builds modern, animated, high-performance websites using MERN, GSAP, and Framer Motion — playful UI, smooth interactions, fast delivery.",
  keywords: [
    "Webli Studio",
    "web development agency",
    "MERN stack websites",
    "GSAP animations",
    "Framer Motion websites",
    "Next.js agency",
    "animated websites",
    "brand launch websites"
  ],
  openGraph: {
    title: "Webli Studio — We Build. You Launch.",
    description:
      "We build animated, high-performance websites for modern internet brands. Built with MERN, GSAP, Framer Motion, and clean UI.",
    url: "https://your-domain.com",
    siteName: "Webli Studio",
    images: [
      {
        url: "https://webli.vercel.app/logo/primaryLogoWhite.svg",
        width: 1200,
        height: 630,
        alt: "Webli Studio — Animated Web Experiences",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webli Studio — We Build. You Launch.",
    description:
      "Modern MERN + GSAP animated websites crafted for launches and brands.",
    images: ["https://webli.vercel.app/logo/logoIconTransparent.svg"],
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
      <Hero />
      <AboutPreview />
      <ServicePreview />
      <PortfolioPreview />
      <TestimonialPreview />
      <CTA />
    </main>
  );
}
