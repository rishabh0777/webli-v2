"use client";

import React, { useRef } from "react";
import { ArrowBigRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const circleRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, index) => {
        if (!block) return;

        // STEP 1 — Split text into spans
        const words = block.innerText.split(" ");
        block.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block opacity-0 translate-y-3">${word}&nbsp;</span>`
          )
          .join("");

        const wordSpans = block.querySelectorAll("span");

        // STEP 2 — stagger word reveal
        gsap.to(wordSpans, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
          },
        });

        // STEP 3 — shift block left-right pattern
        gsap.from(block, {
          x: index % 2 === 0 ? -60 : 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
          },
        });
      });

      // CTA animation
      gsap.from(".about-cta-btn", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ⭐ UPDATED — 4 paragraphs
  const aboutTexts = [
    `Webli Studio blends design, storytelling and engineering. 
    We create expressive, animated websites that feel alive — crafted for brands that want personality.`,

    `Every project is built on clarity, motion and user experience. 
    We use React, GSAP and MERN to deliver smooth, dynamic interfaces with a high-conversion structure.`,

    `We partner with creators, businesses and modern startups to build digital identities that stand out, 
    not blend in — fast delivery, clean execution, zero fluff.`,

    `Our goal is simple: websites that perform like products. 
    Interactive, memorable and built with intention — turning your audience into believers, not just visitors.`
  ];

  return (
    <main
      ref={sectionRef}
      className="relative w-full min-h-[150vh] text-white pt-20 pb-32 px-10 sm:px-20 lg:px-36"
    >
      <div className="absolute top-[10vh] left-[20vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-[40vh] left-[60vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-[60vh] left-[30vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-[80vh] left-[60vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      {/* Paragraph 1 */}
      <div 
        ref={(el) => (blocksRef.current[0] = el)}
        className="w-[40vw] sm:w-[30vw] min-h-[20vh] absolute top-[10vh] left-[10vw] text-[2.4vw] sm:text-sm leading-relaxed text-white/90"
      >
        
        {aboutTexts[0]}
      </div>

      {/* Paragraph 2 */}
      <div
        ref={(el) => (blocksRef.current[1] = el)}
        className="w-[40vw] sm:w-[30vw] min-h-[20vh] absolute top-[35vh] right-[10vw] text-[2.4vw] sm:text-sm leading-relaxed text-white/90"
      >
        
        {aboutTexts[1]}
      </div>

      {/* Paragraph 3 */}
      <div
        ref={(el) => (blocksRef.current[2] = el)}
        className="w-[40vw] sm:w-[30vw] min-h-[20vh] absolute top-[60vh] left-[10vw] text-[2.4vw] sm:text-sm leading-relaxed text-white/90"
      >
        
        {aboutTexts[2]}
      </div>

      <div
        ref={(el) => (blocksRef.current[3] = el)}
        className="w-[40vw] sm:w-[30vw] min-h-[20vh] absolute top-[85vh] right-[10vw] text-[2.4vw] sm:text-sm leading-relaxed text-white/90"
      >
        
        {aboutTexts[3]}
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-[20vh] left-1/2 transform -translate-x-1/2 text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white/90 hover:text-black text-base border border-white/20 px-6 py-2 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition"
          >
            Learn more about us →
          </Link>
        </div>
    </main>
  );
}
