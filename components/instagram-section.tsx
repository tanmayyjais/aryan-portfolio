"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { Reveal } from "@/components/reveal";

// Since we can't authenticate the API without a token, we use the profile grid approach
// and link directly to the Instagram profile with a visually beautiful presentation
const REEL_THUMBNAILS = [
  { src: "/media/reels/ten-shot-01.jpg", label: "Composition Study", views: "1.2K" },
  { src: "/media/reels/intellectual-01.jpg", label: "Intellectual Montage", views: "890" },
  { src: "/media/reels/montage-01.jpg", label: "Rhythm Study", views: "2.1K" },
  { src: "/media/photography/editorial-03.jpg", label: "Portrait Series", views: "3.4K" },
  { src: "/media/reels/ten-shot-03.jpg", label: "10 Shot Study", views: "1.8K" },
  { src: "/media/reels/intellectual-03.jpg", label: "Night Frames", views: "675" },
];

export function InstagramSection() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { if (document.body.contains(script)) document.body.removeChild(script); };
  }, []);

  return (
    <section id="instagram" className="section-pad bg-[#0d0d0d] border-b border-[#f5f0e8]/06">
      <div className="shell space-y-12">
        <div className="label-row">
          <div className="space-y-2">
            <span className="eyebrow">Instagram · @drishtiikaar</span>
            <h2 className="section-title">Moments Between Takes</h2>
          </div>
          <a
            href="https://www.instagram.com/drishtiikaar/"
            target="_blank"
            rel="noreferrer"
            className="btn hidden sm:inline-flex cursor-none"
            data-cursor="hover"
          >
            <Instagram className="h-3.5 w-3.5" />
            Follow on Instagram
          </a>
        </div>

        {/* Visual Frames Grid (using our local thumbnails as preview cards) */}
        <Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {REEL_THUMBNAILS.map((reel, i) => (
              <motion.a
                key={i}
                href="https://www.instagram.com/drishtiikaar/"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl border border-[#f5f0e8]/05 bg-[#111] block cursor-none"
                data-cursor="hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Image
                  src={reel.src}
                  alt={reel.label}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Instagram overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                  <Instagram className="h-8 w-8 text-white mb-2" />
                  <p className="font-mono text-[0.58rem] tracking-wider uppercase text-white/80">{reel.label}</p>
                  <p className="font-mono text-[0.55rem] text-white/50 mt-1">{reel.views} views</p>
                </div>
                {/* Reel indicator */}
                <div className="absolute top-2 right-2 opacity-70">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="flex flex-col items-center gap-4 pt-4 text-center">
          <p className="font-body text-[#f5f0e8]/45 max-w-sm leading-relaxed">
            Follow along for reels, BTS, and frames that didn&apos;t make the cut but deserved to.
          </p>
          <a
            href="https://www.instagram.com/drishtiikaar/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold cursor-none"
            data-cursor="hover"
          >
            <Instagram className="h-3.5 w-3.5" />
            More on Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
