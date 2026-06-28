import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";
import { CinematicLoader } from "@/components/cinematic-loader";
import { FilmGrain } from "@/components/film-grain";
import { CursorSpotlight } from "@/components/cursor-spotlight";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Aryan Kumar | Cinematographer, Filmmaker, Editor",
  description:
    "The official cinematography portfolio of Aryan Kumar, student at AAFT Delhi. Showcasing short films (Focal Void), composition motion studies, and editorial photography.",
  keywords: [
    "Aryan Kumar",
    "cinematography portfolio",
    "filmmaker portfolio",
    "AAFT Delhi",
    "student cinematographer",
    "portrait photography",
    "DRISHTIIKAAR",
  ],
  openGraph: {
    title: "Aryan Kumar | Cinematographer, Filmmaker, Editor",
    description:
      "Showcasing short films, composition studies, and editorial photography through a high-end dark cinematic experience.",
    type: "website",
    url: "https://aryannkumar.vercel.app/",
    images: [
      {
        url: "/media/photography/editorial-01.jpg",
        width: 1280,
        height: 1706,
        alt: "Editorial portrait photographed by Aryan Kumar",
      },
    ],
  },
  metadataBase: new URL("https://aryannkumar.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <CinematicLoader />
        <FilmGrain />
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
