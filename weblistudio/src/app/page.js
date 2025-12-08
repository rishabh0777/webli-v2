import Image from "next/image";
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
