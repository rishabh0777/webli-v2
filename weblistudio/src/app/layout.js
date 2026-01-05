import { Bangers, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { ReactLenis } from 'lenis/react';


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
        url: "/logo/primaryLogoWhite.svg",
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
    images: ["/logo/primaryLogoWhite.svg"],
  },

  alternates: {
    canonical: "https://webli.vercel.app",
  },
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
        <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
