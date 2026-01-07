"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const router = useRouter();

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      // initial states
      gsap.set(cardRef.current, { opacity: 0, y: 40 });
      gsap.set(textRef.current, { opacity: 0, y: 20 });
      gsap.set(buttonRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out" },
      });

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .to(
          buttonRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="cta-heading"
      className="relative py-12 sm:py-16 lg:py-20 bg-black"
    >
      {/* INVISIBLE CONVERSION + LOCAL SEO SIGNAL */}
      <meta
        name="keywords"
        content="Webli Studio contact, hire web developer, animated website project, MERN web development India"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-gradient-to-r from-yellow-300 via-white to-yellow-100 p-1 shadow-yellow-500/30 shadow-lg hover:shadow-yellow-500/50 hover:shadow-xl transition-shadow duration-300"
        >
          <div
            className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]"
            aria-hidden="true"
          />
          <div className="rounded-3xl bg-black backdrop-blur-sm px-5 sm:px-8 py-7 sm:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div ref={textRef} className="space-y-2">
              <p className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-100 text-black text-[0.7rem] sm:text-xs font-medium px-2.5 py-1 shadow-sm">
                New slots every month
              </p>

              <h3
                id="cta-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-[0.09em] text-white"
              >
                Ready to give your brand a{" "}
                <span className="bg-gradient-to-r from-white via-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  Webli-level glow?
                </span>
              </h3>

              <p className="text-sm sm:text-base text-white/80 max-w-xl">
                Tell us your idea, drop some inspo links, and we’ll map out a
                motion-packed site concept with timeline and pricing.
              </p>

              <p className="text-sm sm:text-base text-white/80 font-medium">
                We just need clarity — your goals, your vibe, and who you want to
                impress. The rest? Leave it to Webli Studio.
              </p>
            </div>

            {/* CTA Button */}
            <div ref={buttonRef} className="flex flex-col gap-3 w-full md:w-auto">
              <button
                onClick={() => router.push("/contact")}
                aria-label="Start a web development project with Webli Studio"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-100 text-xs sm:text-sm font-semibold tracking-tight text-black py-2.5 sm:py-3 px-5 sm:px-6 shadow-lg shadow-slate-600/50 hover:scale-105 active:scale-95 transition-transform duration-150"
              >
                Start your project
              </button>

              <p className="text-[0.7rem] sm:text-xs text-white/80">
                Fill out a quick form — we’ll get in touch within a few hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
