"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages } from "@/lib/site-data";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Gallery"
          title="A cinematic grid for stills, texture studies, and behind-the-scenes moments."
          copy="This gallery uses a masonry layout, gentle motion, and a clean lightbox to make even placeholders feel composed. Replace each image URL with final still photography or on-set captures later."
        />

        <div className="masonry-grid">
          {galleryImages.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04} className="masonry-item">
              <motion.button
                type="button"
                onClick={() => setActiveImage(item.image)}
                whileHover={{ y: -4 }}
                className="group panel relative w-full overflow-hidden rounded-[1.5rem]"
              >
                <div
                  className={`relative ${
                    item.aspect === "portrait"
                      ? "aspect-[4/6]"
                      : item.aspect === "square"
                        ? "aspect-square"
                        : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="eyebrow">{item.title}</p>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[115] flex items-center justify-center bg-black/88 p-4 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10"
              aria-label="Close gallery lightbox"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative h-[80vh] w-full max-w-5xl overflow-hidden rounded-[2rem]"
            >
              <Image
                src={activeImage}
                alt="Gallery still enlarged"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
