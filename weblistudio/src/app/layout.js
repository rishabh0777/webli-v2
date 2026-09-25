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
  // Brand Keywords
  "Webli",
  "Webli Studio",
  "Webli Agency",
  "Webli India",
  "Webli Web Development",
  "Webli Web Development Agency",
  "Webli Creative Agency",
  "Webli Digital Agency",

  // Main Services
  "web development",
  "web design",
  "website development",
  "web development agency",
  "website development company",
  "custom web development",
  "full-stack web development",

  // Technology
  "React",
  "Next.js",
  "MERN",
  "GSAP",
  "React development agency",
  "Next.js development agency",
  "MERN stack developers",
  "GSAP animation websites",

  // Specialization
  "animated websites",
  "interactive websites",
  "modern websites",
  "high-performance websites",
  "responsive web design",
  "SEO optimized websites",

  // Business Intent
  "startup websites",
  "business websites",
  "brand websites",
  "restaurant website development",
  "cafe website development",
  "e-commerce development",

  // Location
  "web development agency India",
  "website development company India",
  "React developers India",
  "Next.js developers India",
]
  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
    ],
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
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Webli Studio — We Build. You Launch.",
    description:
      "Modern MERN + GSAP animated websites crafted for startups and brands.",
    images: ["/og.png"],
  },

  alternates: {
    canonical: "https://webli.vercel.app",
  },

  verification: {
    google: "JtjC0Spp1E4E7qkWm6b3CI6fpyxqbM4CT1FXrAwLR28",
  },
};



export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
