"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.from(".contact-head", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      // Form fields
      gsap.from(".contact-field", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });

      // CTA
      gsap.from(".contact-cta", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-cta",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* ---------- Background glows ---------- */}
      <div className="absolute top-[20vh] left-[10vw] h-24 w-24 rounded-full bg-gradient-to-tr from-yellow-100 via-yellow-300 to-white opacity-70 blur-3xl" />
      <div className="absolute bottom-[15vh] right-[12vw] h-28 w-28 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-60 blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ---------- Header ---------- */}
        <div className="contact-head text-center max-w-2xl mx-auto mb-14">
          <p className="uppercase text-xs tracking-widest text-white/40 mb-3">
            Contact
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Let’s build something{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-100 bg-clip-text text-transparent">
              worth feeling.
            </span>
          </h1>

          <p className="mt-4 text-white/80 text-base sm:text-lg">
            Tell us about your idea. Whether it’s a landing page, full product
            or a brand refresh — we’ll shape it into a motion-driven experience.
          </p>
        </div>

        {/* ---------- Form Card ---------- */}
        <div className="contact-form relative max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">
          {/* Inner glow */}
          <div className="absolute -top-6 -right-6 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-70 blur-lg" />

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="contact-field">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-300 transition"
              />
            </div>

            {/* Email */}
            <div className="contact-field">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-300 transition"
              />
            </div>

            {/* Project type */}
            <div className="contact-field sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Project type
              </label>
              <select
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-yellow-300 transition"
              >
                <option>Animated landing page</option>
                <option>Interactive website</option>
                <option>Brand refresh</option>
                <option>Full-stack Website</option>
                <option>Not sure yet</option>
              </select>
            </div>

            {/* Message */}
            <div className="contact-field sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Project details
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your idea, timeline, goals…"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-yellow-300 transition resize-none"
              />
            </div>
          </form>

          {/* CTA */}
          <div className="contact-cta text-center mt-8">
            <button
              type="button"
              className="inline-flex items-center gap-2 text-white/90 hover:text-black border border-white/20 px-14 py-3 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition"
            >
              Send message →
            </button>

            <p className="mt-3 text-xs text-white/50">
              We usually reply within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
