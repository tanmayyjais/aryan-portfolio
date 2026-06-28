"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Category = "All" | "Portraits" | "Stills" | "BTS" | "Motion";

const ALL_IMAGES = [
  // Portraits
  { src: "/media/photography/editorial-01.jpg", caption: "Portrait Study 01", category: "Portraits" as Category, exif: "f/1.8 · ISO 200 · 50mm" },
  { src: "/media/photography/editorial-02.jpg", caption: "Portrait Study 02", category: "Portraits" as Category, exif: "f/2.0 · ISO 400 · 50mm" },
  { src: "/media/photography/editorial-03.jpg", caption: "Portrait Study 03", category: "Portraits" as Category, exif: "f/2.2 · ISO 320 · 85mm" },
  { src: "/media/photography/editorial-04.jpg", caption: "Portrait Study 04", category: "Portraits" as Category, exif: "f/1.8 · ISO 100 · 50mm" },
  { src: "/media/photography/editorial-05.jpg", caption: "Portrait Study 05", category: "Portraits" as Category, exif: "f/1.8 · ISO 250 · 35mm" },
  // Drive Fashion Stills
  { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2108 (1) (1).jpeg", caption: "Fashion Portrait 01", category: "Portraits" as Category, exif: "Editorial Study" },
  { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2147 (1).jpeg", caption: "Fashion Portrait 02", category: "Portraits" as Category, exif: "Editorial Study" },
  { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2152 (1).jpeg", caption: "Fashion Portrait 03", category: "Portraits" as Category, exif: "Editorial Study" },
  { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2157 (1).jpeg", caption: "Fashion Portrait 04", category: "Portraits" as Category, exif: "Editorial Study" },
  { src: "/media/drive_pull/Portfolio content/Fashion/IMG_2176 (1).jpeg", caption: "Fashion Portrait 05", category: "Portraits" as Category, exif: "Editorial Study" },
  // Personal
  { src: "/media/personal/media__1782677888107.jpg", caption: "Cinematographer Portrait", category: "Portraits" as Category, exif: "Self" },
  { src: "/media/personal/media__1782677888145.jpg", caption: "Cinematographer BTS", category: "BTS" as Category, exif: "On Set" },
  // Film stills
  { src: "/media/films/focal-void/still-01.jpg", caption: "Focal Void — Frame 01", category: "Stills" as Category, exif: "Focal Void · 2026" },
  { src: "/media/films/focal-void/still-02.jpg", caption: "Focal Void — Frame 02", category: "Stills" as Category, exif: "Focal Void · 2026" },
  { src: "/media/films/focal-void/still-03.jpg", caption: "Focal Void — Frame 03", category: "Stills" as Category, exif: "Focal Void · 2026" },
  { src: "/media/films/focal-void/poster.jpg",   caption: "Focal Void — Poster", category: "Stills" as Category, exif: "Focal Void · 2026" },
  { src: "/media/hero/hero-still.jpg",           caption: "Cinematic Still", category: "Stills" as Category, exif: "24mm Prime · f/2.8" },
  { src: "/media/hero/hero-still-alt.jpg",       caption: "Atmospheric Still", category: "BTS" as Category, exif: "On set · Delhi NCR" },
  // Motion thumbnails
  { src: "/media/reels/ten-shot-01.jpg",         caption: "10 Shot Study — 01", category: "Motion" as Category, exif: "Composition Study · 2025" },
  { src: "/media/reels/ten-shot-02.jpg",         caption: "10 Shot Study — 02", category: "Motion" as Category, exif: "50mm Prime · f/1.8" },
  { src: "/media/reels/ten-shot-03.jpg",         caption: "10 Shot Study — 03", category: "Motion" as Category, exif: "Deep Staging" },
  { src: "/media/reels/intellectual-01.jpg",     caption: "Intellectual Montage — 01", category: "Motion" as Category, exif: "Montage Study · 2025" },
  { src: "/media/reels/intellectual-02.jpg",     caption: "Intellectual Montage — 02", category: "Motion" as Category, exif: "Night Frame · Neon Light" },
  { src: "/media/reels/intellectual-03.jpg",     caption: "Intellectual Montage — 03", category: "Motion" as Category, exif: "Low Key Lighting" },
  { src: "/media/reels/montage-01.jpg",          caption: "Rhythm Study — 01", category: "Motion" as Category, exif: "Rapid Cut Study" },
  { src: "/media/reels/montage-02.jpg",          caption: "Rhythm Study — 02", category: "Motion" as Category, exif: "Pacing Exercise" },
  { src: "/media/reels/montage-03.jpg",          caption: "Rhythm Study — 03", category: "Motion" as Category, exif: "Velocity Montage" },
];

const TABS: Category[] = ["All", "Portraits", "Stills", "BTS", "Motion"];

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeTab === "All" ? ALL_IMAGES : ALL_IMAGES.filter(img => img.category === activeTab);

  const showPrev = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev > 0 ? prev - 1 : filtered.length - 1) : null);
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev < filtered.length - 1 ? prev + 1 : 0) : null);
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="section-pad bg-[#0a0a0a] border-b border-[#f5f0e8]/06">
      <div className="shell space-y-10">
        <div className="label-row">
          <div className="space-y-2">
            <span className="eyebrow">Visual Portfolio</span>
            <h2 className="section-title">Through the Viewfinder</h2>
          </div>
          <span className="font-mono text-[0.62rem] text-[#f5f0e8]/30 tracking-wider hidden sm:inline">
            {filtered.length} frames
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase px-4 py-2 rounded-full border transition-all duration-300 cursor-none ${
                activeTab === tab
                  ? "bg-[#c9a96e] border-[#c9a96e] text-[#0a0a0a] font-bold"
                  : "border-[#f5f0e8]/10 text-[#f5f0e8]/50 hover:border-[#c9a96e]/40 hover:text-[#c9a96e]"
              }`}
              data-cursor="hover"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <Reveal>
          <AnimatePresence mode="popLayout">
            <div className="masonry">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="masonry-item"
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className="group relative w-full overflow-hidden rounded-xl border border-[#f5f0e8]/05 bg-[#0d0d0d] block cursor-none"
                    data-cursor="hover"
                  >
                    <div className="relative w-full overflow-hidden" style={{ aspectRatio: img.src.includes("editorial") ? "3/4" : "16/10" }}>
                      <Image
                        src={img.src}
                        alt={img.caption}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.43,0.13,0.23,0.96)] group-hover:scale-105"
                      />
                      {/* Caption reveal */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                        <p className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-[#c9a96e]">{img.exif}</p>
                        <p className="font-body text-sm text-[#f5f0e8] mt-0.5">{img.caption}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/05 border border-white/10 text-[#f5f0e8] hover:bg-white/10 transition cursor-none"
              data-cursor="hover"
            >
              <X className="h-5 w-5" />
            </button>
            {/* Prev */}
            <button type="button" onClick={(e) => { e.stopPropagation(); showPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/05 border border-white/10 text-[#f5f0e8] hover:bg-white/10 transition cursor-none" data-cursor="hover">
              <ChevronLeft className="h-6 w-6" />
            </button>
            {/* Next */}
            <button type="button" onClick={(e) => { e.stopPropagation(); showNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/05 border border-white/10 text-[#f5f0e8] hover:bg-white/10 transition cursor-none" data-cursor="hover">
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="relative w-full max-w-5xl px-4 flex flex-col items-center gap-5" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.22 }}
                  className="relative w-full max-h-[80vh] flex items-center justify-center"
                >
                  <Image
                    src={filtered[lightboxIndex].src}
                    alt={filtered[lightboxIndex].caption}
                    width={1400}
                    height={900}
                    className="object-contain max-h-[80vh] w-auto rounded-lg"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2 text-[#c9a96e]">
                  <Camera className="h-3.5 w-3.5" />
                  <span className="font-mono text-[0.62rem] tracking-[0.22em]">{filtered[lightboxIndex].exif}</span>
                </div>
                <p className="font-display text-xl text-[#f5f0e8]">{filtered[lightboxIndex].caption}</p>
                <p className="font-mono text-[0.58rem] text-[#f5f0e8]/35">{lightboxIndex + 1} / {filtered.length}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
