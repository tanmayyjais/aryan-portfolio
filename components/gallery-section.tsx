"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Reveal } from "@/components/reveal";

type Category = "All" | "Portraits" | "Stills";

const ALL_IMAGES = [
  // Portraits
  { src: "/media/gallery-final/img_3.jpg", caption: "Portrait Study 01", category: "Portraits" as Category, exif: "f/1.8 · ISO 200" },
  { src: "/media/gallery-final/img_5.jpeg", caption: "Portrait Study 02", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_6.jpeg", caption: "Portrait Study 03", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_7.jpeg", caption: "Portrait Study 04", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_8.jpeg", caption: "Portrait Study 05", category: "Portraits" as Category, exif: "Editorial" },
  { src: "/media/gallery-final/img_9.jpeg", caption: "Portrait Study 06", category: "Portraits" as Category, exif: "Editorial" },

  // Stills
  { src: "/media/gallery-final/img_1.jpg", caption: "Cinematic Still 01", category: "Stills" as Category, exif: "Frame Study" },
  { src: "/media/gallery-final/img_2.jpg", caption: "Cinematic Still 02", category: "Stills" as Category, exif: "Frame Study" },
  { src: "/media/gallery-final/img_4.jpg", caption: "Cinematic Still 03", category: "Stills" as Category, exif: "Frame Study" },
];

const TABS: Category[] = ["All", "Portraits", "Stills"];

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
                    priority
                  />
                  {/* Preload adjacent images for instant navigation */}
                  {lightboxIndex > 0 && (
                    <Image
                      src={filtered[lightboxIndex - 1].src}
                      alt=""
                      width={1}
                      height={1}
                      className="opacity-0 absolute w-0 h-0"
                      aria-hidden
                    />
                  )}
                  {lightboxIndex < filtered.length - 1 && (
                    <Image
                      src={filtered[lightboxIndex + 1].src}
                      alt=""
                      width={1}
                      height={1}
                      className="opacity-0 absolute w-0 h-0"
                      aria-hidden
                    />
                  )}
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
