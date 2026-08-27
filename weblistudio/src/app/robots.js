/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://webli.vercel.app/sitemap.xml",
  };
}
