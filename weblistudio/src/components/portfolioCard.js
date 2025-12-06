"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ project }) {
  return (
    <article className="group relative rounded-3xl bg-white border border-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)] overflow-hidden">
      <div className="relative">
        {/* Background Wrapper */}
        <div className="aspect-[4/3] bg-gradient-to-tr from-white via-yellow-300 to-yellow-100 flex items-center justify-center p-4 sm:p-5">
          <div className="h-full w-full flex items-center justify-center">

            {/* Window Mockup */}
            <div className="relative h-3/4 w-11/12 rounded-3xl bg-black shadow-[0_18px_45px_rgba(15,23,42,0.3)]
              transition-transform duration-300 ease-out 
              group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:rotate-[1.4deg]">

              {/* Top bar */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100">
                <span className="h-1.5 w-1.5 rounded-full bg-red-300"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
              </div>

              {/* Actual Preview Image */}
              <div className="relative w-full h-[140px] sm:h-[160px] md:h-[170px] overflow-hidden rounded-b-3xl">
                <Image
                  src={`/portfolioImage/${project.image}`}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm sm:text-base font-semibold tracking-tight text-black">
            {project.name}
          </h3>

          <span className="text-[0.7rem] sm:text-xs rounded-full bg-yellow-300 text-black px-2 py-1">
            {project.niche}
          </span>
        </div>

        <p className="text-sm text-slate-600">{project.description}</p>

        <div className="flex items-center justify-between mt-1 text-[0.7rem] sm:text-xs text-slate-500">
          <Link
            href={project.url}
            target="_blank"
            className="inline-flex items-center gap-1.5 font-medium group-hover:underline"
          >
            <span className="group-hover:translate-x-0.5 transition-transform duration-150">
              View build ↗
            </span>
          </Link>

          <span>{project.year}</span>
        </div>
      </div>
    </article>
  );
}
