"use client";

import React from "react";
import Link from "next/link";
import ServiceCard from "@/components/serviceCard";
import { Sparkles, MousePointer2, Palette } from "lucide-react";

export default function ServicePreview() {
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
    <section id="service-preview" className="relative py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Label */}
        <p className="uppercase text-xs tracking-widest text-white/40 mb-2">
          Service Preview
        </p>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white">
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
            <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-2.5 py-1 shadow-sm">
              🚀 Fast delivery
            </span>
            <span className="inline-flex items-center rounded-full bg-yellow-100 text-slate-900 px-2.5 py-1">
              Custom-coded MERN
            </span>
            <span className="inline-flex items-center rounded-full bg-pink-100 text-slate-900 px-2.5 py-1">
              Motion-first design
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="relative grid md:grid-cols-3 gap-5 sm:gap-6">
          <div className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]" />
              <div className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
          {services.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>

        {/* Single CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/90 hover:text-black text-base border border-white/20 px-6 py-2 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
