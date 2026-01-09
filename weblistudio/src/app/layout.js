import { Bangers, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { ReactLenis } from 'lenis/react';
import { Toaster } from "react-hot-toast";


const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export const metadata = {
  metadataBase: new URL("https://webli.vercel.app"),

  title: {
    default: "Webli Studio — We Build. You Launch.",
    template: "%s | Webli Studio",
  },

  description:
    "Webli Studio is a modern MERN-stack web development studio building animated, high-performance, SEO-optimized websites for startups and brands.",

  keywords: [
    "Webli Studio",
    "web development agency",
    "MERN stack developers",
    "React and Next.js agency",
    "animated websites",
    "GSAP animation websites",
    "Indian web development studio",
    "SEO-optimized websites",
    "modern web design",
    "startup websites",
    "brand websites",
    "high-performance web development",
    "custom web solutions",
    "responsive web design",
    "e-commerce development",
    "progressive web apps",
    "UI/UX design services",
    "website maintenance and support",
    "digital presence solutions",
    "full-stack web development",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Webli Studio — We Build. You Launch.",
    description:
      "Animated, SEO-optimized MERN websites with modern UI and smooth interactions.",
    url: "https://webli.vercel.app",
    siteName: "Webli Studio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Webli Studio — Animated Web Development Studio",
      },
    ],
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      chrome: ["/android-chrome-192x192.png", "/android-chrome-512x512.png"],
      favicons: ["/favicon-16x16.png", "/favicon-32x32.png"],
    },
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Webli Studio — We Build. You Launch.",
    description:
      "Modern MERN + GSAP animated websites crafted for startups and brands.",
    images: [
      "/og.png",
      "/logo/primaryLogoWhite.svg",
      "/logo/primaryLogoBlack.svg",
    ],
  },

  alternates: {
    canonical: "https://webli.vercel.app",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ✅ Google site verification */}
        <meta
          name="google-site-verification"
          content="JtjC0Spp1E4E7qkWm6b3CI6fpyxqbM4CT1FXrAwLR28"
        />
      <body
        className={`${bangers.variable} ${poppins.variable} antialiased ovrflow-x-hidden`}
      >
        <ReactLenis root>
        <Header />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#000",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
        <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
