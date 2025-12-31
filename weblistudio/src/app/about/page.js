"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      blocksRef.current.forEach((block, index) => {
        if (!block) return;

        if (!block.dataset.originalText) {
          block.dataset.originalText = block.innerText;
        }

        const words = block.dataset.originalText.split(" ");
        block.innerHTML = words
          .map(
            (word) =>
              `<span class="inline-block opacity-0 translate-y-3">${word}&nbsp;</span>`
          )
          .join("");

        gsap.to(block.querySelectorAll("span"), {
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
    }, sectionRef);

    return () => {
      blocksRef.current.forEach((block) => {
        if (block?.dataset.originalText) {
          block.innerText = block.dataset.originalText;
        }
      });
      ctx.revert();
    };
  }, []);

  const storyTexts = [
    `Webli Studio blends design, storytelling and engineering.
     We create expressive, animated websites that feel alive — crafted for brands that want personality.`,

    `It started with a simple idea: websites should not feel static.
     They should move, respond and communicate emotion — not just information.`,

    `We noticed most websites looked the same.
     Clean, yes — but lifeless. That’s where Webli began.`,

    `Our focus shifted from just building pages
     to designing motion-led experiences that guide attention naturally.`,

    `Every scroll, hover and transition is intentional.
     Nothing exists without purpose.`,

    `We build for people who want their digital presence
     to feel modern, expressive and confident.`,
  ];

  const processTexts = [
    `We begin with clarity — understanding your idea, your audience and your goals.`,

    `Then we design structure and motion together,
     ensuring every interaction feels smooth and meaningful.`,

    `Finally, we build using modern tools like React, GSAP and MERN
     to deliver fast, scalable and launch-ready websites.`,
  ];

  const beliefTexts = [
    `Webli Studio exists to help brands stand out, not blend in.`,

    `We believe good websites feel like products —
     interactive, memorable and built with intention.`,

    `The result is simple:
     more engagement, stronger identity and better conversions.`,
  ];

  let blockIndex = 0;

  return (
    <main
      ref={sectionRef}
      className="relative w-full min-h-[320vh] text-white pt-28 pb-32 px-8 sm:px-20 lg:px-36 overflow-hidden"
    >
      {/* Floating Glows (Background only) */}
      <div className="absolute top-[40vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />
      <div className="absolute top-[60vh] left-[65vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 blur-lg opacity-70" />
      <div className="absolute top-[85vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />
      <div className="absolute top-[150vh] left-[65vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 blur-lg opacity-70" />
      <div className="absolute top-[125vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />
      <div className="absolute top-[105vh] left-[65vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 blur-lg opacity-70" />

      <div className="absolute top-[200vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />
      <div className="absolute top-[220vh] left-[60vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 blur-lg opacity-70" />
      <div className="absolute top-[235vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />

      <div className="absolute top-[260vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />
      <div className="absolute top-[275vh] left-[60vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 blur-lg opacity-70" />
      <div className="absolute top-[290vh] left-[15vw] h-10 w-10 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black blur-lg opacity-80" />

      {/* Heading */}
      <h1 className="heading font-[bangers] text-[12vw] p-1 sm:text-5xl lg:text-6xl font-semibold mb-24 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent">
        OUR STORY
      </h1>

      {/* Story Paragraphs */}
      {storyTexts.map((text, i) => {
        const currentIndex = blockIndex++;
        return (
          <div
            key={`story-${i}`}
            ref={(el) => (blocksRef.current[currentIndex] = el)}
            style={{ top: `${40 + i * 22}vh` }}
            className={`absolute w-[70vw] sm:w-[32vw]
              ${
                i % 2 === 0
                  ? "left-8 sm:left-[10vw]"
                  : "right-8 sm:right-[10vw]"
              }
              text-[3.5vw] sm:text-sm leading-relaxed text-white/90`}
          >
            {text}
          </div>
        );
      })}

      {/* How We Build */}
      <h2
        className="absolute left-1/2 p-1 -translate-x-1/2 text-4xl font-medium bg-gradient-to-r from-yellow-300 via-yellow-100 to-white bg-clip-text text-transparent"
        style={{ top: "185vh" }}
      >
        How We Build
      </h2>

      {processTexts.map((text, i) => {
        const currentIndex = blockIndex++;
        return (
          <div
            key={`process-${i}`}
            ref={(el) => (blocksRef.current[currentIndex] = el)}
            style={{ top: `${200 + i * 18}vh` }}
            className={`absolute w-[70vw] sm:w-[32vw]
              ${
                i % 2 === 0
                  ? "left-8 sm:left-[10vw]"
                  : "right-8 sm:right-[10vw]"
              }
              text-[3.5vw] sm:text-sm leading-relaxed text-white/90`}
          >
            {text}
          </div>
        );
      })}

      {/* Why Webli Studio */}
      <h2
        className="absolute p-1 left-1/2 -translate-x-1/2 text-4xl font-medium bg-gradient-to-r from-yellow-300 via-yellow-100 to-white bg-clip-text text-transparent"
        style={{ top: "245vh" }}
      >
        Why Webli Studio
      </h2>

      {beliefTexts.map((text, i) => {
        const currentIndex = blockIndex++;
        return (
          <div
            key={`belief-${i}`}
            ref={(el) => (blocksRef.current[currentIndex] = el)}
            style={{ top: `${260 + i * 16}vh` }}
            className={`absolute w-[70vw] sm:w-[32vw] bg-transparent
              ${
                i % 2 === 0
                  ? "left-8 sm:left-[10vw]"
                  : "right-8 sm:right-[10vw]"
              }
              text-[3.5vw] sm:text-sm leading-relaxed text-white/90`}
          >
            {text}
          </div>
        );
      })}

      {/* CTA */}
      <div className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-white/90 hover:text-black border border-white/20 px-4 md:px-14 py-3 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition text-[0.8em] sm:text-lg font-medium"
        >
          Start your project →
        </Link>
      </div>
    </main>
  );
}
