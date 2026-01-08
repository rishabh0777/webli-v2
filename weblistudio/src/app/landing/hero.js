"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Marquee from "@/components/marquee";
import { useRouter } from "next/navigation";

export default function Hero() {
  const lettersRef = useRef([]);
  const taglineRef = useRef(null);
  const cardRef = useRef(null);
  const blobA = useRef(null);
  const blobB = useRef(null);
  const blobC = useRef(null);
  const buttonRef = useRef([])
  const tagRef = useRef(null);
  const bottomRef = useRef(null);

  const router = useRouter();

  const addButtonRef = (el) => {
    if (el && !buttonRef.current.includes(el)) {
      buttonRef.current.push(el);
    }
  };

  // gsap.set for initial states
  useGSAP(() => {
    gsap.set(lettersRef.current, { y: 50, opacity: 0 });
    gsap.set(taglineRef.current, { y: 50, opacity: 0 });
    gsap.set(cardRef.current, { y: 50, opacity: 0 });
    gsap.set([blobA.current, blobB.current, blobC.current], { y: 0 });
    gsap.set(buttonRef.current, { y: 40, opacity: 0 });
  }, []);

  // gsap animations on mount
  useLayoutEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    // Animate tag
    tl.to(tagRef.current, {
      y: 0,
      opacity: 1,
      delay:0.3,
      ease: "power3.out",
      duration: 0.8,
    },"b");

    // Animate heading letters
    tl.to(lettersRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power3.out",
      duration: 0.8,
    },"b");

    // Animate card
    tl.to(
      cardRef.current,
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 1.2,
      },
      "b"
    );

    // Animate tagline
    tl.to(
      taglineRef.current,
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.8,
      },
      "b"
    );

    // Animate buttons
    tl.to(
      buttonRef.current,
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power3.out",
        duration: 0.8,
      },
      "b"
    );

    // Animate bottom content
    tl.to(
      bottomRef.current,
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        duration: 0.8,
      },
      "b"
    );

    

    // Floating blobs animation
    gsap.to([blobA.current, blobB.current, blobC.current], {
      y: 20,
      duration: 6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 2,
        from: "random",
      },
    });
  }, []);


 
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-[8vh] md:pt-5"
    >
      {/* INVISIBLE LOCAL SEO SIGNAL */}
      <meta
        name="description"
        content="Webli Studio is an animated MERN web development studio serving startups and modern brands across India."
      />

      {/* Floating gradient blobs background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          ref={blobA}
          className="absolute -top-24 -left-10 h-56 w-56 sm:h-80 sm:w-80 rounded-full 
          bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        <div
          ref={blobB}
          className="absolute -right-10 -bottom-24 h-64 w-64 sm:h-80 sm:w-80 rounded-full 
          bg-gradient-to-tl from-yellow-300 via-yellow-100 to-yellow-200 opacity-70 blur-3xl"
          aria-hidden="true"
        />

        <div
          ref={blobC}
          className="absolute left-1/3 top-1/3 h-40 w-40 sm:h-56 sm:w-56 rounded-[40%] 
          bg-gradient-to-br from-yellow-200/70 via-yellow-100/60 to-white/70 opacity-70 blur-2xl"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Hero text */}
          <div className="space-y-6 sm:space-y-7">
            <div ref={tagRef} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-300 to-white px-3 py-2 shadow-sm shadow-slate-100/70 backdrop-blur opacity-0">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-br from-yellow-300 via-pink-400 to-blue-500 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
              <span className="text-xs font-medium text-black/90">
                MERN + Animated Web Studio for Modern Brands
              </span>
            </div>

            <div className="space-y-2">
              <h1
                ref={lettersRef}
                id="hero-heading"
                className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white leading-tight opacity-0"
              >
                <span className="md:text-3xl text-xl">Webli Studio — </span>
                We Build.
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-100 to-white bg-clip-text text-transparent">
                  You Launch.
                </span>
              </h1>

              <p
                ref={taglineRef}
                className="text-base sm:text-lg text-white/90 max-w-xl opacity-0"
              >
                We build modern, animated, high-performance websites with MERN,
                GSAP and Framer Motion — clean UI, smooth interactions, and designs
                that convert.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
              onClick={()=>{
                router.push('/contact')
              }}
              ref={addButtonRef} className="inline-flex items-center justify-center rounded-full bg-white text-xs sm:text-sm font-semibold tracking-tight text-black py-2.5 sm:py-3 px-5 sm:px-6 shadow-lg shadow-slate-400/50 hover:scale-105 active:scale-95 transition-transform duration-150 opacity-0 cursor-pointer">
                🚀 Start your project
              </button>

              <button 
              onClick={()=>{
                router.push('/portfolio');
              }}
              ref={addButtonRef} 
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs sm:text-sm font-medium text-black py-2.5 sm:py-3 px-4 sm:px-5 hover:-translate-y-0.5 hover:shadow-md hover:shadow-yellow-200 transition-all duration-150 opacity-0 cursor-pointer">
                🎉 View showcase
              </button>
            </div>

            <div ref={bottomRef} className="flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-500 opacity-0">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-yellow-300 to-pink-400 border border-white shadow-sm" />
                <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 border border-white shadow-sm" />
                <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-emerald-300 to-cyan-400 border border-white shadow-sm" />
              </div>

              <span className="inline-flex items-center text-white/80">
                <span className="mr-1.5 text-base leading-none">⚡</span>
                1–4 week delivery
              </span>

              <div className="space-x-2">
                <span className="font-medium text-white/80">5 Beautyful launches</span>
                <span className="text-white/80">·</span>
                <span className="text-white/80">
                  for businesses & modern startup brands
                </span>
              </div>
            </div>
          </div>

            {/* Hero visual card */}
            <div className="relative opacity-0" ref={cardRef}>
              <div className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]" />
              <div className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />

              <div className="relative rounded-3xl bg-gradient-to-r from-white via-yellow-300 to-yellow-100 shadow-[0_18px_60px_rgba(15,23,42,0.12)] p-4 sm:p-6 overflow-hidden">
                {/* pseudo window header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[0.7rem] sm:text-xs text-black/80">webli.vercel.app/your-launch</span>
                </div>

                <div className="grid gap-4 sm:gap-5">
                  {/* mock hero */}
                  <div className="rounded-2xl bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 p-4 sm:p-5 relative overflow-hidden">
                    <div className="absolute -top-10 right-4 h-20 w-20 rounded-full  bg-gradient-to-br from-yellow-500/70 to-purple-400 shadow-lg shadow-pink-200/70 animate-[spin_18s_linear_infinite]" />
                    <div className="space-y-2 sm:space-y-3 max-w-xs">
                      <p className="inline-flex items-center text-[0.7rem] sm:text-xs font-medium text-slate-800 bg-white/70 rounded-full px-2 py-1 shadow-sm">
                        <span className="mr-1.5">✨</span> Animated portfolio
                      </p>
                      <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 leading-snug">
                        We Build, You Launch.
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-700">
                        Custom animations, scroll effects, dynamic UI — built for your launch.
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 text-[0.65rem] sm:text-xs text-slate-700">
                      <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-1 shadow-sm">
                        ⚡ Faster Delivery
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-1 shadow-sm">
                        🌀 Smooth scroll effects
                      </span>
                      <span className="inline-flex items-center rounded-full bg-white/80 px-2 py-1 shadow-sm">
                        🧃 Liquid gradients
                      </span>
                    </div>
                  </div>

                  {/* mini stats and service badges */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="rounded-xl bg-slate-900 text-white p-3 sm:p-4 flex flex-col justify-between shadow-md shadow-slate-500/40">
                      <div className="flex items-center justify-between">
                        <span className="text-[0.7rem] sm:text-xs text-slate-300">Launch speed</span>
                        <span className="text-[0.7rem] sm:text-xs bg-white/10 rounded-full px-2 py-0.5">Fast AF</span>
                      </div>
                      <div>
                        <p className="text-lg sm:text-2xl font-semibold tracking-tight mt-1">
                          1–4 weeks
                        </p>
                        <p className="text-[0.7rem] sm:text-xs text-slate-300 mt-1">
                          from idea to live site
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="rounded-xl bg-white border border-slate-100 p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-sm">
                        <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-yellow-300 via-pink-400 to-blue-500 flex items-center justify-center text-slate-900 text-xs font-semibold">
                          UI
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium text-slate-800">Playful UI</p>
                          <p className="text-[0.65rem] sm:text-xs text-slate-500">Custom layouts &amp; motion</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white border border-slate-100 p-2.5 sm:p-3 flex items-center gap-2 sm:gap-3 shadow-sm">
                        <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center text-slate-900 text-xs font-semibold">
                          FX
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-medium text-slate-800">Motion & Scroll FX</p>
                          <p className="text-[0.65rem] sm:text-xs text-slate-500">GSAP / Framer animations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* bottom strip */}
                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50 border border-slate-100/70 px-3 sm:px-4 py-2.5 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm text-lg">🎉</span>
                      <div>
                        <p className="text-xs sm:text-sm font-medium text-slate-800">“Feels modern, smooth and super fast.”</p>
                        <p className="text-[0.65rem] sm:text-xs text-slate-500">Feedback from recent clients</p>
                      </div>
                    </div>
                    <button onClick={()=>{
                      window.open("https://www.launchhaus.in/", "_blank")
                    }} className="text-[0.7rem] sm:text-xs font-medium text-slate-800 underline underline-offset-2 decoration-slate-400 hover:text-slate-900 cursor-pointer">
                      Peek latest build →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* MARQUEE */}
      <Marquee />
    </section>
  );
}
