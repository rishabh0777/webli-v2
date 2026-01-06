"use client";

import React, { useRef } from "react";
import Link from "next/link";
import ServiceCard from "@/components/serviceCard";
import { Sparkles, MousePointer2, Palette } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePreview() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const chipsRef = useRef([]);
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  const addChipRef = (el) => {
    if (el && !chipsRef.current.includes(el)) {
      chipsRef.current.push(el);
    }
  };

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(
    () => {
      /* ---------- INITIAL STATE ---------- */
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      gsap.set(chipsRef.current, { opacity: 0, y: 20 });
      gsap.set(cardsRef.current, { opacity: 0, y: 40 });
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });

      /* ---------- TIMELINE ---------- */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          chipsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.4,
          },
          "-=0.4"
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.2"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  const services = [
    {
      title: "Animated Landing Pages",
      subtitle: "View examples",
      description:
        "High-energy first impressions built with GSAP, scroll effects, and bold layouts that make your brand feel alive.",
      points: [
        "GSAP scroll & hover animations",
        "Dynamic gradients & playful visuals",
        "Perfect for launches & branding",
      ],
      badge: "Webli HeroCraft",
      icon: <Sparkles className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-300 to-pink-100 border-yellow-200/70",
      blobGradient:
        "bg-gradient-to-br from-yellow-100 via-pink-400 to-purple-400",
    },
    {
      title: "Interactive Web Experiences",
      subtitle: "Try demo",
      description:
        "Websites that behave like apps — product tours, sliders, toggles, and motion-rich interactions.",
      points: [
        "Interactive product previews",
        "Lottie, SVG & Framer Motion",
        "Smooth app-like transitions",
      ],
      badge: "App-like UX",
      icon: <MousePointer2 className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-300 to-emerald-100 border-blue-200/70",
      blobGradient:
        "bg-gradient-to-tr from-blue-300 via-cyan-300 to-emerald-300",
    },
    {
      title: "Brand Refresh Websites",
      subtitle: "Refresh brand",
      description:
        "Keep your brand identity, elevate everything else — motion, layouts, components, and color systems.",
      points: [
        "New visual system",
        "Component library for scaling",
        "Launch-ready upgrade",
      ],
      badge: "Brand Reload",
      icon: <Palette className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-300 to-yellow-100 border-purple-200/70",
      blobGradient:
        "bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="service-preview"
      aria-labelledby="service-preview-heading"
      className="relative py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10"
        >
          <div>
            <h2
              id="service-preview-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white"
            >
              <span>A glimpse of what we build —</span>
              <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-100 bg-clip-text text-transparent">
                {" "}
                beautifully.
              </span>
            </h2>

            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
              A preview of our high-energy, motion-driven, MERN-powered web
              experiences. Full service list comes next — this is just the teaser.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[0.7rem] sm:text-xs text-slate-500">
            {["🚀 Fast delivery", "Custom-coded MERN", "Motion-first design"].map(
              (text, i) => (
                <span
                  key={i}
                  ref={addChipRef}
                  className="inline-flex items-center rounded-full bg-slate-900 text-white px-2.5 py-1 shadow-sm"
                >
                  {text}
                </span>
              )
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="relative grid md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((card, index) => (
            <article
              key={index}
              ref={addCardRef}
              aria-label={card.title}
            >
              <ServiceCard {...card} />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            ref={ctaRef}
            href="/services"
            aria-label="View all Webli Studio services"
            className="inline-flex items-center gap-3 text-sm sm:text-base tracking-wide uppercase text-white/80 hover:text-black px-8 py-4 border border-white/20 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-200 transition"
          >
            View All Services <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
