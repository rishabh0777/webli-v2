"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Marquee() {
  const marqueeRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 22,
        repeat: -1,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const items = [
    "⚡ Fast MERN development",
    "🎨 Clean UI/UX",
    "🌀 GSAP animations",
    "📱 Mobile-perfect builds",
    "🔁 API integrations",
    "🔒 Auth + Admin Panel",
    "🚀 Startup-ready",
    "💡 Custom features",
    "🌐 SEO optimized",
    
  ];

  return (
    <section
      ref={marqueeRef}
      className="relative overflow-hidden bg-black py-3 sm:py-4"
    >
      <div className="flex marquee-track whitespace-nowrap gap-10">
        {/* Row 1 */}
        <div className="flex items-center gap-5 text-sm font-medium text-white">
          {items.map((item, i) => (
            <span key={i} className="opacity-90">
              {item}
            </span>
          ))}
        </div>

        {/* Row 2 (duplicate for infinite loop) */}
        <div className="flex items-center gap-5 text-sm font-medium text-white">
          {items.map((item, i) => (
            <span key={i} className="opacity-90">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* soft gradient edges (optional but sexy) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent"></div>
    </section>
  );
}
