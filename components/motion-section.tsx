"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import { motionClips } from "@/lib/site-data";
import type { PortfolioEntry } from "@/lib/types";

export function MotionSection() {
  const [activeClip, setActiveClip] = useState<PortfolioEntry | null>(null);

  return (
    <section id="motion" className="section-space border-y border-black/8">
      <div className="container-shell space-y-10">
        <div className="section-label-row">
          <p className="section-kicker">Motion</p>
          <p className="section-note">Short clips and studies</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {motionClips.map((clip, index) => (
            <Reveal key={clip.id} delay={index * 0.05}>
              <button
                type="button"
                onClick={() => setActiveClip(clip)}
                className="group w-full text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#ebe5db]">
                  <Image
                    src={clip.thumbnail.src}
                    alt={clip.thumbnail.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />
                  <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f1e8] text-black">
                    <Play className="ml-0.5 h-4 w-4 fill-current" />
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-[0.72rem] uppercase tracking-[0.22em] text-black/42">
                    {clip.sourceLabel}
                  </p>
                  <h3 className="font-display text-3xl text-black">{clip.title}</h3>
                  <p className="text-sm text-black/58">
                    {clip.year} / {clip.role}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <MediaModal
        open={Boolean(activeClip)}
        title={activeClip?.title ?? ""}
        meta={
          activeClip
            ? `${activeClip.sourceLabel} / ${activeClip.year} / ${activeClip.role}`
            : ""
        }
        onClose={() => setActiveClip(null)}
      >
        {activeClip ? (
          <div className="modal-media-frame">
            <video
              className="h-full w-full"
              src={activeClip.media.src}
              poster={activeClip.media.poster}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        ) : null}
      </MediaModal>
    </section>
  );
}
