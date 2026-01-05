"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PortfolioCard from "@/components/portfolioCard";
import { projects } from "@/projectData";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      /* ---------- Heading ---------- */
      gsap.from(".portfolio-head", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      /* ---------- Cards ---------- */
      gsap.from(".portfolio-card", {
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top 80%",
        },
      });

      /* ---------- SEO Text ---------- */
      gsap.from(".portfolio-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".portfolio-text",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ---------- Header ---------- */}
        <div className="portfolio-head flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white">
              Little websites,{" "}
              <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-white bg-clip-text text-transparent">
                big feelings.
              </span>
            </h2>

            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
              Hover, scroll, tap — everything reacts. These projects are tiny
              playgrounds of motion, interaction and modern UI systems.
            </p>
          </div>

          
        </div>

        {/* ---------- Grid ---------- */}
        <div className="portfolio-grid relative grid md:grid-cols-3 gap-5 sm:gap-6">
          {/* Floating blobs */}
          <div className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]" />
          <div className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />

          {projects.map((project, i) => (
            <div key={i} className="portfolio-card">
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>

        {/* ---------- SEO Paragraphs ---------- */}
        <div className="portfolio-text mt-16 max-w-3xl space-y-6">
          <p className="text-white/75 leading-relaxed">
            Webli Studio’s portfolio showcases a collection of animated,
            motion-driven websites built using modern frontend technologies.
            Each project focuses on interaction, smooth transitions and
            expressive layouts that turn simple websites into engaging digital
            experiences.
          </p>

          <p className="text-white/75 leading-relaxed">
            From landing pages to interactive product experiences, our work
            reflects a balance of creativity and engineering. We prioritize
            performance, responsiveness and visual clarity, ensuring every
            project not only looks modern but feels intuitive and alive across
            devices.
          </p>
        </div>
      </div>
    </section>
  );
}
