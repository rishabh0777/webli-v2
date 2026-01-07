"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import toast from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-head", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

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

  /* ---------- Submit Handler ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!process.env.NEXT_PUBLIC_FORM_API_URL) {
      toast.error("Form service not configured");
      return;
    }

    setLoading(true);

    const formData = new FormData(formRef.current);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    );

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORM_API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");
        formRef.current.reset();
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-[20vh] left-[10vw] h-24 w-24 rounded-full bg-gradient-to-tr from-yellow-100 via-yellow-300 to-white opacity-70 blur-3xl" />
      <div className="absolute bottom-[15vh] right-[12vw] h-28 w-28 rounded-full bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-60 blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
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

        {/* Form */}
        <div className="contact-form relative max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 lg:p-10">
          <div className="absolute -top-6 -right-6 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-70 blur-lg" />

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            <div className="contact-field">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Name
              </label>
              <input
                name="name"
                required
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white"
              />
            </div>

            <div className="contact-field">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Email
              </label>
              <input
                name="email"
                required
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white"
              />
            </div>

            <div className="contact-field sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Project type
              </label>
              <select
                name="project_type"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white"
              >
                <option>Animated landing page</option>
                <option>Interactive website</option>
                <option>Brand refresh</option>
                <option>Full-stack Website</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="contact-field sm:col-span-2">
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1">
                Project details
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your idea, timeline, goals…"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white resize-none"
              />
            </div>

            {/* CTA */}
            <div className="contact-cta sm:col-span-2 text-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 text-white/90 hover:text-black border border-white/20 px-14 py-3 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send message →"}
              </button>

              <p className="mt-3 text-xs text-white/50">
                We usually reply within 24 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
