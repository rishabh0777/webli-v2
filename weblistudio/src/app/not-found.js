"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function NotFound() {
  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      pageRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      }
    );
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-black flex items-center justify-center px-4"
    >
      <div className="max-w-xl text-center">

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl font-bold tracking-widest text-white">
          4
          <span className="bg-gradient-to-r from-yellow-400 via-white to-yellow-100 bg-clip-text text-transparent">
            0
          </span>
          4
        </h1>

        {/* Message */}
        <p className="mt-6 text-lg sm:text-xl text-white/80">
          This page doesn’t exist — but your idea still can.
        </p>

        <p className="mt-3 text-sm sm:text-base text-white/60">
          Looks like you followed a broken link or typed something that never launched.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:text-black hover:bg-gradient-to-r from-yellow-400 via-white to-yellow-100 transition"
          >
            Go home
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-full text-white/80 hover:text-white transition"
          >
            Start a project →
          </Link>
        </div>

        {/* Subtle brand line */}
        <p className="mt-12 text-xs tracking-wide text-white/40 uppercase">
          Webli Studio · Motion-first web experiences
        </p>
      </div>
    </main>
  );
}
