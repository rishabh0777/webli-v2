"use client";

import TestimonialCard from "@/components/testimonialCard";
import React from "react";

export default function TestimonialPreview() {
  const testimonials = [
    {
      name: "Lion's den Cafe",
      niche: "Cafe",
      image: "/clientBrandLogo/lionsden.jpeg",
      quote:
        "May God bless you with great success. This is a sacred month, and I pray that Lord Shiva's grace always remains with you. Your work is excellent and I am very satisfied.",
    },
    {
      name: "Jerdon Villa",
      niche: "Luxary Villa",
      image: "/clientBrandLogo/jerdon.jpeg",
      quote:
        "Webli Studio did a fantastic and quick job of setting up my website. Happy with the output and fast response.",
    },
    {
      name: "Aathavan Films",
      niche: "Photography",
      image: "/clientBrandLogo/aathavan.jpeg",
      quote:
        "Webli Studio did an amazing job creating my website. They were professional, responsive, and delivered a high-quality product that exceeded my expectations. Highly recommend!",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonial-preview-heading"
      className="relative py-12 sm:py-16 lg:py-20 bg-black"
      itemScope
      itemType="https://schema.org/AggregateRating"
    >
      {/* INVISIBLE TRUST / REVIEW SEO SIGNAL */}
      <meta itemProp="ratingValue" content="4.9" />
      <meta itemProp="reviewCount" content="3" />
      <meta itemProp="bestRating" content="5" />
      <meta itemProp="worstRating" content="1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <h2
              id="testimonial-preview-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.09em] text-white"
            >
              People who love their
              <span className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-white bg-clip-text text-transparent">
                funky websites.
              </span>
            </h2>

            <p className="mt-2 text-base sm:text-lg text-white/80 max-w-xl">
              We design for vibes and outcomes — clicks, signups, sales, and that
              “omg this is so fun” reaction.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-white/80">
            Average satisfaction score
            <span className="inline-flex items-center ml-1 rounded-full bg-black/80 border border-amber-200 px-2 py-1 shadow-sm">
              <span className="mr-1 text-base leading-none">⭐</span>
              <span className="font-semibold text-white/80">4.9</span>/5
            </span>
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

          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              itemScope
              itemType="https://schema.org/Review"
              aria-label={`Review from ${testimonial.name}`}
            >
              <meta itemProp="author" content={testimonial.name} />
              <meta itemProp="reviewRating" content="5" />
              <TestimonialCard testimonial={testimonial} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
