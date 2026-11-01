import { Geist, Geist_Mono, MuseoModerno } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { title } from "motion/react-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const museoModerno = MuseoModerno({
  variable: "--font-museo-moderno",
  subsets: ["latin"],
});

export const metadata = {
  metadatBase: new URL("https://lunartracker-ng.vercel.app"),
  title: "Lunar Tracker",
  description: "Track Moon according to Local Update",
  openGraph: {
    title: "Lunar Tracker",
    description:
      "Track 30-day Hijri calendar grids and integrate native lunar date tracking APIs into your apps.",
    url: "https://lunartracker-ng.vercel.app",
    siteName: "LunarTracker",
    images: [
      {
        url: "https://lunartracker-ng.vercel.app/og-image.png", 
        width: 1200,
        height: 630,
        alt: "LunarTracker Preview Card",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${museoModerno.variable} h-full antialiased`}
    >
      <body className="min-h-full flex overflow-y-auto scrollbar-none overflow-x-hidden ">
        <Navbar />
        <main className="flex-1 min-w-0">
          {children}
          </main>
        <Analytics />
      </body>
    </html>
  );
}
