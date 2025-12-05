"use client";

import React from "react";

export default function ServiceCard({
  title,
  subtitle,
  description,
  points,
  badge,
  icon,
  gradient,
  blobGradient,
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 overflow-hidden group transition-all duration-500 ${gradient}`}
    >
      {/* Blob */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-3xl ${blobGradient}`}
      ></div>

      <div className="relative z-10">
        {/* Badge */}
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-black/70 text-white px-2.5 py-1 rounded-full mb-4">
          {icon}
          {badge}
        </span>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-slate-700 mb-3">{subtitle}</p>

        {/* Description */}
        <p className="text-sm text-slate-700/90 mb-4">{description}</p>

        {/* Points */}
        <ul className="space-y-1.5 mb-1">
          {points.map((p, index) => (
            <li key={index} className="text-sm text-slate-800 flex items-start gap-2">
              <span className="text-yellow-600 mt-0.5">•</span> {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
