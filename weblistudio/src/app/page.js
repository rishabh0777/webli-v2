import Image from "next/image";
import Hero from "./landing/hero";
import AboutPreview from "./landing/aboutPreview";
import ServicePreview from "./landing/servicePreview";

export default function Home() {
  return (
    <main className="relative w-screen bg-black overflow-x-hidden">
      <Hero />
      <AboutPreview />
      <ServicePreview />
    </main>
  );
}
