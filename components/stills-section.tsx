"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Camera } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Reveal } from "@/components/reveal";
import { stills } from "@/lib/site-data";

export function StillsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Navigate lightbox images
  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : stills.length - 1));
  }, [activeIndex]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev !== null && prev < stills.length - 1 ? prev + 1 : 0));
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, showNext, showPrev]);

  return (
    <section id="stills" className="section-space bg-[#060606] border-b border-[#ece9e2]/8">
      <div className="container-shell space-y-10">
        <div className="section-label-row">
          <div className="space-y-1">
            <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557] font-semibold">
              Editorial Work
            </span>
            <h2 className="font-display text-4xl text-[#ece9e2] tracking-tight">
              Photography Stills
            </h2>
          </div>
          <p className="section-note">Slide 03 • Gallery Grid</p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {stills.map((still, index) => (
            <Reveal key={still.id} delay={index * 0.05} className="masonry-item">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group w-full text-left focus:outline-none cursor-none bg-black/20 border border-[#ece9e2]/5 rounded-2xl overflow-hidden p-2"
                data-cursor="view"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#090909]">
                  <Image
                    src={still.thumbnail.src}
                    alt={still.thumbnail.alt}
                    fill
                    sizes="(min-width: 1100px) 31vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover object-center transition duration-1000 ease-out group-hover:scale-105 group-hover:brightness-95"
                  />
                  
                  {/* Hover Meta Cover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5">
                    <div className="space-y-1">
                      <span className="text-[0.55rem] uppercase tracking-[0.2em] text-[#b58557] font-semibold flex items-center gap-1">
                        <Camera className="h-2.5 w-2.5" />
                        {still.exif}
                      </span>
                      <h3 className="font-display text-lg text-[#ece9e2] leading-tight">
                        {still.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/95 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 z-[510] flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#ece9e2] hover:bg-white/10 transition cursor-none"
              data-cursor="link"
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous Arrow */}
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-6 z-[510] flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#ece9e2] hover:bg-white/10 transition cursor-none"
              data-cursor="link"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Arrow */}
            <button
              type="button"
              onClick={showNext}
              className="absolute right-6 z-[510] flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#ece9e2] hover:bg-white/10 transition cursor-none"
              data-cursor="link"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Core Image Slide container */}
            <div className="relative w-full max-w-4xl h-[75vh] flex flex-col items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="relative w-full h-full"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                >
                  <Image
                    src={stills[activeIndex].media.src}
                    alt={stills[activeIndex].media.alt}
                    fill
                    sizes="1000px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Technical EXIF Overlay footer */}
              <div className="absolute -bottom-16 text-center space-y-1">
                <span className="text-[0.62rem] uppercase tracking-[0.24em] text-[#b58557] font-semibold flex items-center justify-center gap-1.5">
                  <Camera className="h-3 w-3" />
                  {stills[activeIndex].exif}
                </span>
                <h3 className="font-display text-2xl text-[#ece9e2]">
                  {stills[activeIndex].title}
                </h3>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#ece9e2]/40">
                  Slide {activeIndex + 1} of {stills.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
