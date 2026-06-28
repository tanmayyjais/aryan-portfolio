import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Aryan Kumar | Filmmaker & Cinematographer",
  description:
    "A premium cinematography portfolio for Aryan Kumar, featuring Focal Void, visual narratives, editorial stills, and a growing auteur voice from AAFT Delhi.",
  keywords: [
    "Aryan Kumar",
    "cinematography portfolio",
    "filmmaker portfolio",
    "AAFT Delhi",
    "student cinematographer",
    "Focal Void",
    "DRYSHTIKAAR"
  ],
  openGraph: {
    title: "Aryan Kumar | Filmmaker & Cinematographer",
    description:
      "Focal Void, curated visual narratives, and editorial stills presented through a premium film-microsite experience.",
    type: "website",
    url: "https://aryannkumar.vercel.app/",
    images: [
      {
        url: "/media/hero/hero-still-alt.jpg",
        width: 1920,
        height: 1080,
        alt: "Focal Void hero still for Aryan Kumar portfolio",
      },
    ],
  },
  metadataBase: new URL("https://aryannkumar.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
