"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: i * 0.08,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      badge: "Who we are",
      title: "A playful MERN + motion studio",
      desc:
        "Webli Studio builds modern websites that feel fun, smooth and alive — powered by MERN, GSAP and clean UI systems.",
      gradient: "from-yellow-100 via-yellow-300 to-white",
    },
    {
      badge: "How we work",
      title: "Design → Motion → Launch",
      desc:
        "We focus on clarity first, then layer motion and interactions that guide users naturally — no clutter, no noise.",
      gradient: "from-pink-200 via-yellow-200 to-yellow-100",
    },
    {
      badge: "Why Webli",
      title: "Built for launches & first impressions",
      desc:
        "Perfect for startups, creators and brands who want their site to feel exciting, memorable and conversion-ready.",
      gradient: "from-blue-200 via-yellow-200 to-white",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white">
            What makes
            <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}Webli Studio{" "}
            </span>
            different?
          </h2>
          <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
            Not just websites — playful launch experiences designed to convert, impress and stay memorable.
          </p>
        </div>

        {/* Cards */}
        <div className="relative grid md:grid-cols-3 gap-5 sm:gap-6">
          <div className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />

          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative rounded-3xl bg-gradient-to-br ${card.gradient} p-1 shadow-lg`}
            >
              <div className="rounded-3xl bg-black p-5 sm:p-6 h-full">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-100 text-black text-[0.7rem] sm:text-xs font-medium px-2.5 py-1 shadow-sm">
                  {card.badge}
                </span>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-white/80">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-3 text-sm sm:text-base tracking-wide uppercase text-white/80 hover:text-black px-8 py-4 border border-white/20 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-200 transition"
          >
            Learn more about Webli <span className="text-[4.5vw] sm:text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
