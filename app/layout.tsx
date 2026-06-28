import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

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
  title: "Aryan Kumar | Filmmaker, Cinematographer, Editor",
  description:
    "A minimal editorial portfolio for Aryan Kumar featuring short films, motion studies, and portrait photography from AAFT Delhi.",
  keywords: [
    "Aryan Kumar",
    "cinematography portfolio",
    "filmmaker portfolio",
    "AAFT Delhi",
    "student cinematographer",
    "portrait photography",
    "DRYSHTIKAAR",
  ],
  openGraph: {
    title: "Aryan Kumar | Filmmaker, Cinematographer, Editor",
    description:
      "Short films, motion studies, and portrait photography presented through a minimal editorial portfolio.",
    type: "website",
    url: "https://aryannkumar.vercel.app/",
    images: [
      {
        url: "/media/photography/editorial-01.jpg",
        width: 1280,
        height: 1706,
        alt: "Editorial portrait from Aryan Kumar's portfolio",
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
      <body>{children}</body>
    </html>
  );
}
