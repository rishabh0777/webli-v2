import Image from "next/image";
import Hero from "./landing/hero";

export default function Home() {
  return (
    <main className="relative w-screen bg-black overflow-x-hidden">
      <Hero />
    </main>
  );
}
