"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, index) => {
        if (!block) return;

        /* ---------------- SAVE ORIGINAL TEXT ---------------- */
        if (!block.dataset.originalText) {
          block.dataset.originalText = block.innerText;
        }

        const text = block.dataset.originalText;
        const words = text.split(" ");

        /* ---------------- SPLIT TEXT ---------------- */
        block.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block opacity-0 translate-y-3">${word}&nbsp;</span>`
          )
          .join("");

        const wordSpans = block.querySelectorAll("span");

        /* ---------------- WORD REVEAL ---------------- */
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

        /* ---------------- BLOCK SLIDE ---------------- */
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

      /* ---------------- CTA ---------------- */
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

    /* ---------------- CLEANUP (IMPORTANT) ---------------- */
    return () => {
      blocksRef.current.forEach((block) => {
        if (block?.dataset.originalText) {
          block.innerText = block.dataset.originalText;
        }
      });
      ctx.revert();
    };
  }, []);

  const aboutTexts = [
    `Webli Studio blends design, storytelling and engineering. 
    We create expressive, animated websites that feel alive — crafted for brands that want personality.`,

    `Every project is built on clarity, motion and user experience. 
    We use React, GSAP and MERN to deliver smooth, dynamic interfaces with a high-conversion structure.`,

    `We partner with creators, businesses and modern startups to build digital identities that stand out, 
    not blend in — fast delivery, clean execution, zero fluff.`,

    `Our goal is simple: websites that perform like products. 
    Interactive, memorable and built with intention — turning your audience into believers, not just visitors.`,
  ];

  return (
    <main
      ref={sectionRef}
      className="relative w-full min-h-[140vh] text-white pt-20 pb-10 px-8 sm:px-20 lg:px-36"
    >
      {/* Floating blobs */}
      <div className="absolute top-[10vh] left-[20vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-[35vh] left-[60vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-[60vh] left-[30vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
      <div className="absolute top-[85vh] left-[60vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />

      {/* Paragraphs */}
      {aboutTexts.map((text, i) => (
        <div
          key={i}
          ref={(el) => (blocksRef.current[i] = el)}
          className={`block w-[60vw] sm:w-[30vw] max-w-[30vw] min-h-[20vh] absolute
            ${i === 0 ? "top-[10vh] left-8 sm:left-[10vw]" : ""}
            ${i === 1 ? "top-[35vh] right-8 sm:right-[10vw]" : ""}
            ${i === 2 ? "top-[60vh] left-8 sm:left-[10vw]" : ""}
            ${i === 3 ? "top-[85vh] right-8 sm:right-[10vw]" : ""}
            text-[3vw] sm:text-sm leading-relaxed text-white/90 overflow-hidden`}
        >
          {text}
        </div>
      ))}

      {/* CTA */}
      <div className="absolute bottom-[20vh] left-1/2 -translate-x-1/2 text-center">
        <Link
          href="/about"
          className="about-cta-btn inline-flex items-center gap-2 text-white/90 hover:text-black md:text-base text-[3vw] border border-white/20 md:px-6 md:py-2 px-16 py-3 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition whitespace-nowrap"
        >
          Learn more about us <span className="text-[4.5vw] sm:text-base">→</span>
        </Link>
      </div>
    </main>
  );
}
