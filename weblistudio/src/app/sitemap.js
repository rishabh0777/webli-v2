/** @type {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const baseUrl = "https://webli.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-07-29"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
