"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const pageRef = useRef(null);

  const headerRef = useRef(null);
  const storyRef = useRef(null);
  const processRef = useRef(null);
  const beliefRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      /* PAGE HEADER */
      gsap.fromTo(
        headerRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      /* STORY SECTION */
      animateSection(storyRef.current);

      /* PROCESS SECTION */
      animateSection(processRef.current);

      /* BELIEF SECTION */
      animateSection(beliefRef.current);

      /* CTA */
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: pageRef }
  );

  function animateSection(section) {
    const heading = section.querySelector("h2");
    const cards = section.querySelectorAll(".animate-card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true,
      },
    });

    tl.fromTo(
      heading,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    ).fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      },
      "-=0.2"
    );
  }

  const storyCards = [
    {
      title: "How Webli Started",
      text:
        "Webli Studio began with a simple observation — most websites looked clean, but felt lifeless. No emotion. No motion. No personality.",
    },
    {
      title: "The Shift",
      text:
        "We moved from building static pages to crafting motion-led experiences. Scrolls, hovers and transitions became tools to guide attention.",
    },
    {
      title: "What We Do Today",
      text:
        "Today, Webli builds modern, animated, high-performance websites for startups, creators and brands who care about first impressions.",
    },
  ];

  const processCards = [
    {
      title: "1. Understand the launch",
      text:
        "We start by understanding your idea, audience and goal. Clarity comes before creativity — always.",
    },
    {
      title: "2. Design with motion",
      text:
        "Layouts are designed alongside motion. Animations aren’t added later — they are part of the experience.",
    },
    {
      title: "3. Build & launch",
      text:
        "We build using React, GSAP and MERN to deliver fast, scalable and launch-ready websites.",
    },
  ];

  const beliefCards = [
    {
      title: "Websites should feel alive",
      text:
        "A good website responds. It reacts. It feels smooth and intentional — not static.",
    },
    {
      title: "Design serves outcomes",
      text:
        "Every visual decision should guide users toward clarity, engagement and conversion.",
    },
    {
      title: "Stand out, don’t blend in",
      text:
        "Webli exists for brands that want to look confident, expressive and modern online.",
    },
  ];

  const GradientCard = ({ children, gradient }) => (
    <div
      className={`animate-card rounded-3xl bg-gradient-to-br ${gradient} p-[1px] shadow-lg`}
    >
      <div className="rounded-3xl bg-black p-5 sm:p-6 h-full">
        {children}
      </div>
    </div>
  );

  return (
    <main
      ref={pageRef}
      className="relative bg-black py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* HEADER */}
        <div ref={headerRef} className="mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.09em] text-white">
            About
            <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-white bg-clip-text text-transparent">
              {" "}Webli Studio
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/80 max-w-xl">
            A motion-first MERN studio crafting playful, modern websites for bold launches.
          </p>
        </div>

        {/* STORY */}
        <section ref={storyRef} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Our Story
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {storyCards.map((card) => (
              <GradientCard
                key={card.title}
                gradient="from-yellow-100 via-yellow-300 to-white"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.text}</p>
              </GradientCard>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section ref={processRef} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            How We Build
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {processCards.map((card) => (
              <GradientCard
                key={card.title}
                gradient="from-pink-200 via-yellow-200 to-yellow-100"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.text}</p>
              </GradientCard>
            ))}
          </div>
        </section>

        {/* BELIEFS */}
        <section ref={beliefRef} className="mb-20">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
            Why Webli Studio
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {beliefCards.map((card) => (
              <GradientCard
                key={card.title}
                gradient="from-blue-200 via-yellow-200 to-white"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.text}</p>
              </GradientCard>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div ref={ctaRef} className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm sm:text-base tracking-wide uppercase text-white/80 hover:text-black px-8 py-4 border border-white/20 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-200 transition"
          >
            Start your project <span>→</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
