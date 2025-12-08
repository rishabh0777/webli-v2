"use client";

import React from "react";
import Image from "next/image";

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="relative rounded-3xl bg-gradient-to-tr from-yellow-100 via-yellow-300 to-white border border-slate-100 p-4 sm:p-5 overflow-hidden">
      <div className="absolute -top-4 -right-4 h-14 w-14 rounded-[40%] bg-gradient-to-tr from-purple-400 via-pink-400 to-yellow-300 opacity-60 blur-lg animate-[bounce_18s_ease-in-out_infinite_alternate]"></div>
      <div className="flex items-start gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full h-10 w-10 object-cover"
        />

        <div className="flex-1">
          <p className="text-sm text-slate-800">
            {testimonial.quote}
          </p>
          <div className="mt-3">
            <p className="text-xs font-medium text-slate-900">{testimonial.name}</p>
            <p className="text-[0.7rem] text-slate-500">{testimonial.niche}</p>
          </div>
        </div>
      </div>
    </article>
  )
}