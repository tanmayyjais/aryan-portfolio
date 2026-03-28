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
  title: "Aryan Kumar | Cinematography Portfolio",
  description:
    "Immersive cinematography portfolio for Aryan Kumar, a visual storyteller and BSc Cinematography student at AAFT Delhi.",
  keywords: [
    "Aryan Kumar",
    "cinematography portfolio",
    "filmmaker portfolio",
    "AAFT Delhi",
    "student cinematographer"
  ],
  openGraph: {
    title: "Aryan Kumar | Cinematography Portfolio",
    description: "Capturing emotion through light, motion, and frame.",
    type: "website"
  },
  metadataBase: new URL("https://example.com")
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
