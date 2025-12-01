import { Bangers, Poppins } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://weblistudio.in"),
  title: {
    default: "Webli Studio — We Build. You Launch.",
    template: "%s | Webli Studio",
  },
  description:
    "Webli Studio is a modern MERN-stack web development agency. We build high-performance, animated, SEO-optimized websites. We Build. You Launch.",
  keywords: [
    "Webli Studio",
    "web development",
    "MERN agency",
    "React developer",
    "Next.js websites",
    "SEO optimized websites",
    "Indian web agency",
  ],
  openGraph: {
    title: "Webli Studio — We Build. You Launch.",
    description:
      "Powerful MERN-stack websites with modern UI, animations, and SEO. We Build. You Launch.",
    url: "https://webli.vercel.app",
    siteName: "Webli Studio",
    images: [
      {
        url: "/logo/primaryLogoWhite.svg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bangers.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
