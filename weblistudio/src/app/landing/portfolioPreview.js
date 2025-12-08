"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "@/components/portfolioCard";
import { projects } from "@/projectData";

export default function PortfolioPreview() {

  
    return (
        <section id="showcase" className="relative py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white">
                  Little websites,
                  <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-white bg-clip-text text-transparent">
                    big feelings.
                  </span>
                </h2>
                <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
                  Hover, scroll, tap — everything reacts. These projects are tiny playgrounds of motion and color for modern internet brands.
                </p>
              </div>
              <button className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 py-2.5 px-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200 transition-all duration-150">
                View Portfolio
              </button>
            </div>

            
        <div className="relative grid md:grid-cols-3 gap-5 sm:gap-6">
          <div className="absolute -top-6 -right-4 h-20 w-20 rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-black opacity-80 blur-lg animate-[bounce_10s_ease-in-out_infinite_alternate]" />
              <div className="absolute bottom-0 -left-4 h-16 w-16 rounded-3xl bg-gradient-to-tr from-blue-400 via-cyan-300 to-emerald-300 opacity-70 blur-lg animate-[bounce_12s_ease-in-out_infinite_alternate]" />
          {projects.map((project, i) => (
            <PortfolioCard key={i} project={project} />
          ))}
        </div>
            
          </div>
        </section>
)};

