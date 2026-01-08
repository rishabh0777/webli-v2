"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "@/components/portfolioCard";
import { projects } from "@/projectData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPreview() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const cardsRef = useRef([]);

  const addCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // get 3 projects only
  const threeProjects = projects.slice(0, 3);

  useGSAP(
    () => {
      // initial states
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      gsap.set(ctaRef.current, { opacity: 0, y: 20 });
      gsap.set(cardsRef.current, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.3"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.4"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="showcase"
      aria-labelledby="portfolio-preview-heading"
      className="relative py-12 sm:py-16 lg:py-20"
    >
      {/* INVISIBLE PORTFOLIO SEO SIGNAL */}
      <meta
        name="keywords"
        content="Webli Studio portfolio, animated websites, MERN projects, GSAP animation projects, startup websites India"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10"
        >
          <div>
            <h2
              id="portfolio-preview-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white"
            >
              Little websites,
              <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-white bg-clip-text text-transparent">
                big feelings.
              </span>
            </h2>

            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
              Hover, scroll, tap — everything reacts. These projects are tiny
              playgrounds of motion and color for modern internet brands.
            </p>
          </div>

          <div ref={ctaRef} className="text-center mt-16">
            <Link
              href="/portfolio"
              aria-label="View Webli Studio portfolio"
              className="inline-flex items-center gap-3 text-sm sm:text-base tracking-wide uppercase text-white/80 hover:text-black px-8 py-4 border border-white/20 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-200 transition about-cta-btn"
            >
              Our Portfolio <span className="text-[4.5vw] sm:text-base">→</span>
            </Link>
          </div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-5 sm:gap-6">
          <div
            className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]"
            aria-hidden="true"
          />

          {threeProjects.map((project, i) => (
            <article
              key={i}
              ref={addCardRef}
              aria-label={`Project by Webli Studio`}
            >
              <PortfolioCard project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
