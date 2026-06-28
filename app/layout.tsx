import type { Metadata } from "next";
import { Cinzel, DM_Sans, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { CinematicLoader } from "@/components/cinematic-loader";
import { FilmGrain } from "@/components/film-grain";
import { CinematicCursor } from "@/components/cursor-spotlight";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Kumar | Cinematographer & Filmmaker",
  description:
    "Official cinematography portfolio of Aryan Kumar — BSc Cinematography student at AAFT Noida. Short films, editorial photography, and visual storytelling.",
  keywords: [
    "Aryan Kumar", "cinematographer", "filmmaker", "AAFT Noida",
    "student cinematographer", "short film", "visual storytelling",
    "DRISHTIIKAAR", "portrait photography", "cinematography portfolio",
  ],
  openGraph: {
    title: "Aryan Kumar | Cinematographer & Filmmaker",
    description:
      "BSc Cinematography student at AAFT Noida. Short films, editorial photography, motion studies.",
    type: "website",
    url: "https://aryannkumar.vercel.app/",
    images: [
      {
        url: "/media/photography/editorial-01.jpg",
        width: 1280,
        height: 1706,
        alt: "Aryan Kumar — Cinematographer",
      },
    ],
  },
  metadataBase: new URL("https://aryannkumar.vercel.app"),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <CinematicLoader />
        <FilmGrain />
        <CinematicCursor />
        {children}
      </body>
    </html>
  );
}
