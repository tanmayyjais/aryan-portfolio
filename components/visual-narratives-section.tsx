"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { visualNarratives } from "@/lib/site-data";
import type { ReelEntry } from "@/lib/types";

export function VisualNarrativesSection() {
  const [activeReel, setActiveReel] = useState<ReelEntry | null>(null);

  return (
    <section id="visual-narratives" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Visual Narratives"
          title="Short studies, montage fragments, and image-led exercises that reveal the craft in motion."
          copy="This section turns Aryan's original exercises into a more premium reel system: each card behaves like a moving still, with loop previews and distilled creative intent."
        />

        <div className="grid gap-6 xl:grid-cols-3">
          {visualNarratives.map((reel, index) => (
            <Reveal key={reel.title} delay={index * 0.08}>
              <motion.button
                type="button"
                whileHover={{ y: -5 }}
                onClick={() => setActiveReel(reel)}
                className="panel group h-full w-full overflow-hidden rounded-[2rem] border-white/10 text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {reel.preview ? (
                    <video
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      src={reel.preview.src}
                      poster={reel.preview.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={reel.thumbnail.src}
                      alt={reel.thumbnail.alt}
                      fill
                      className="object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-white/76">
                    {reel.format}
                  </div>
                  <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur">
                    <Play className="ml-0.5 h-4 w-4 fill-current text-paper" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                      {reel.platform}
                    </p>
                    <h3 className="mt-3 font-display text-4xl text-paper">
                      {reel.title}
                    </h3>
                  </div>
                </div>
                <div className="space-y-4 p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#b58557]">
                    {reel.highlight}
                  </p>
                  <p className="leading-7 text-white/70">{reel.caption}</p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <MediaModal
        open={Boolean(activeReel)}
        title={activeReel?.title ?? ""}
        onClose={() => setActiveReel(null)}
      >
        {activeReel ? (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              {activeReel.preview ? (
                <video
                  className="aspect-video w-full object-cover"
                  src={activeReel.preview.src}
                  poster={activeReel.preview.poster}
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                />
              ) : (
                <div className="relative aspect-video">
                  <Image
                    src={activeReel.thumbnail.src}
                    alt={activeReel.thumbnail.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            <div className="space-y-5">
              <div className="panel rounded-[1.5rem] p-5">
                <p className="eyebrow">Creative Note</p>
                <p className="mt-4 leading-8 text-white/72">{activeReel.caption}</p>
              </div>
              <div className="panel rounded-[1.5rem] p-5">
                <p className="eyebrow">Highlight</p>
                <p className="mt-4 text-lg text-paper">{activeReel.highlight}</p>
              </div>
              <a
                href={activeReel.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm uppercase tracking-[0.18em] text-paper transition hover:border-white/35 hover:bg-white/5"
              >
                Open Source Media
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ) : null}
      </MediaModal>
    </section>
  );
}
