"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { photographySeries } from "@/lib/site-data";
import type { PhotoEntry } from "@/lib/types";

export function PhotographySection() {
  const [activePhoto, setActivePhoto] = useState<PhotoEntry | null>(null);

  return (
    <section id="photography" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Photography"
          title="Portrait and editorial stills presented like a quiet exhibition rather than a template gallery."
          copy="These selected frames from Aryan's shared archive support the portfolio as a wider image-making practice, not just a filmography add-on."
        />

        <div className="masonry-grid">
          {photographySeries.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.04} className="masonry-item">
              <motion.button
                type="button"
                whileHover={{ y: -4 }}
                onClick={() => setActivePhoto(photo)}
                className="group relative w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={photo.asset.src}
                    alt={photo.asset.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-3xl text-paper">{photo.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <MediaModal
        open={Boolean(activePhoto)}
        title={activePhoto?.title ?? ""}
        onClose={() => setActivePhoto(null)}
      >
        {activePhoto ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
            <div className="relative min-h-[60vh] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src={activePhoto.asset.src}
                alt={activePhoto.asset.alt}
                fill
                className="object-contain bg-black"
              />
            </div>
            <div className="panel rounded-[1.5rem] p-6">
              <p className="eyebrow">Frame Note</p>
              <p className="mt-4 leading-8 text-white/72">{activePhoto.caption}</p>
            </div>
          </div>
        ) : null}
      </MediaModal>
    </section>
  );
}
