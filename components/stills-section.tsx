"use client";

import Image from "next/image";
import { useState } from "react";

import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import { stills } from "@/lib/site-data";
import type { PortfolioEntry } from "@/lib/types";

export function StillsSection() {
  const [activeStill, setActiveStill] = useState<PortfolioEntry | null>(null);

  return (
    <section id="stills" className="section-space">
      <div className="container-shell space-y-10">
        <div className="section-label-row">
          <p className="section-kicker">Stills</p>
          <p className="section-note">Portraits and editorial frames</p>
        </div>

        <div className="masonry-grid">
          {stills.map((still, index) => (
            <Reveal key={still.id} delay={index * 0.04} className="masonry-item">
              <button
                type="button"
                onClick={() => setActiveStill(still)}
                className="group w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#ece6dd]">
                  <Image
                    src={still.thumbnail.src}
                    alt={still.thumbnail.alt}
                    fill
                    sizes="(min-width: 1100px) 31vw, (min-width: 768px) 48vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-black/42">
                    {still.sourceLabel}
                  </p>
                  <h3 className="font-display text-[2rem] leading-none text-black">
                    {still.title}
                  </h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <MediaModal
        open={Boolean(activeStill)}
        title={activeStill?.title ?? ""}
        meta={activeStill ? `${activeStill.sourceLabel} / ${activeStill.year}` : ""}
        onClose={() => setActiveStill(null)}
      >
        {activeStill ? (
          <div className="relative min-h-[76vh]">
            <Image
              src={activeStill.media.src}
              alt={activeStill.media.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        ) : null}
      </MediaModal>
    </section>
  );
}
