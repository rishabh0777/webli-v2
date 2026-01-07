"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServiceCard from "@/components/serviceCard";
import {
  Sparkles,
  MousePointer2,
  Palette,
  LayoutDashboard,
  Rocket,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePage() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const seoRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(
    () => {
      /* ---------- HEADER ---------- */
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

      /* ---------- SERVICE CARDS ---------- */
      const cards = gridRef.current.querySelectorAll(".service-card");

      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      /* ---------- SEO TEXT ---------- */
      gsap.fromTo(
        seoRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: seoRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      /* ---------- CTA ---------- */
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
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const services = [
    {
      title: "Animated Landing Pages",
      subtitle: "Launch fast",
      description:
        "High-impact landing pages built with GSAP, scroll-based motion, and conversion-focused layouts.",
      points: [
        "Scroll-triggered animations",
        "Brand-driven layouts",
        "Perfect for launches & campaigns",
      ],
      badge: "HeroCraft",
      icon: <Sparkles className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-300 to-pink-100 border-yellow-200/70",
      blobGradient:
        "bg-gradient-to-br from-yellow-100 via-pink-400 to-purple-400",
    },
    {
      title: "Interactive Web Experiences",
      subtitle: "App-like feel",
      description:
        "Motion-rich websites that behave like products, not static pages.",
      points: [
        "Advanced UI interactions",
        "Framer Motion & GSAP",
        "High engagement UX",
      ],
      badge: "Motion UX",
      icon: <MousePointer2 className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-300 to-emerald-100 border-blue-200/70",
      blobGradient:
        "bg-gradient-to-tr from-blue-300 via-cyan-300 to-emerald-300",
    },
    {
      title: "Brand Refresh Websites",
      subtitle: "Rebuild presence",
      description:
        "Modern redesigns that elevate your existing brand with better motion and structure.",
      points: [
        "Visual system upgrade",
        "Reusable components",
        "Launch-ready rebuild",
      ],
      badge: "Brand Reload",
      icon: <Palette className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-300 to-yellow-100 border-purple-200/70",
      blobGradient:
        "bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300",
    },
    {
      title: "Dashboard & Admin Panels",
      subtitle: "Scalable systems",
      description:
        "Clean, functional dashboards built for real-world usage and scale.",
      points: ["Role-based access", "Data visualization", "MERN powered"],
      badge: "Control Hub",
      icon: <LayoutDashboard className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-200 to-slate-100 border-slate-200/70",
      blobGradient:
        "bg-gradient-to-br from-slate-400 via-slate-300 to-yellow-200",
    },
    {
      title: "Startup MVP Builds",
      subtitle: "Go live fast",
      description:
        "Rapid MVP development for founders who want to test ideas quickly.",
      points: ["React + Node.js", "Fast iterations", "Launch-ready MVP"],
      badge: "MVP Sprint",
      icon: <Rocket className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-200 to-emerald-100 border-emerald-200/70",
      blobGradient:
        "bg-gradient-to-br from-emerald-300 via-cyan-300 to-yellow-200",
    },
    {
      title: "Secure Full-Stack Apps",
      subtitle: "Production ready",
      description:
        "Authentication, APIs, databases, and scalable architecture.",
      points: ["JWT & auth flows", "MongoDB & Express", "Secure deployments"],
      badge: "MERN Stack",
      icon: <ShieldCheck className="h-4 w-4" />,
      gradient:
        "bg-gradient-to-br from-white via-yellow-200 to-blue-100 border-blue-200/70",
      blobGradient:
        "bg-gradient-to-br from-blue-400 via-cyan-400 to-yellow-200",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ---------- Header ---------- */}
        <div ref={headerRef} className="mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Motion-first websites built for{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-100 bg-clip-text text-transparent">
              modern brands
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
            Webli Studio designs and develops high-performance websites using
            React, GSAP and MERN technologies. Our focus is on motion, clarity
            and conversion — not templates.
          </p>
        </div>

        {/* ---------- Cards ---------- */}
        <div
          ref={gridRef}
          className="services-grid relative grid md:grid-cols-3 gap-6"
        >
          {services.map((card, i) => (
            <div key={i} className="service-card">
              <ServiceCard {...card} />
            </div>
          ))}
        </div>

        {/* ---------- SEO Paragraphs ---------- */}
        <div
          ref={seoRef}
          className="mt-20 space-y-6 max-w-3xl"
        >
          <p className="text-white/75 leading-relaxed">
            At Webli Studio, we believe websites should feel alive. Our services
            are designed around motion-led storytelling, ensuring every scroll,
            hover and interaction has purpose. From animated landing pages to
            scalable full-stack applications, we build digital products that
            communicate confidence and modernity.
          </p>

          <p className="text-white/75 leading-relaxed">
            We work with startups, creators and growing businesses who want
            more than just an online presence. By combining thoughtful design,
            clean engineering and performance-focused architecture, Webli
            delivers websites that engage users and support long-term growth.
          </p>
        </div>

        {/* ---------- CTA ---------- */}
        <div ref={ctaRef} className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white/90 hover:text-black border border-white/20 px-14 py-3 rounded-full hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition"
          >
            Start your project →
          </Link>
        </div>

      </div>
    </section>
  );
}
