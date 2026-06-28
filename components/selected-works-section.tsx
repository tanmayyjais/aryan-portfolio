"use client";

import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import { selectedWorks } from "@/lib/site-data";
import type { PortfolioEntry } from "@/lib/types";

export function SelectedWorksSection() {
  const [activeEntry, setActiveEntry] = useState<PortfolioEntry | null>(null);

  return (
    <section id="selected-works" className="section-space">
      <div className="container-shell space-y-10">
        <div className="section-label-row">
          <p className="section-kicker">Selected Works</p>
          <p className="section-note">Film, motion, stills</p>
        </div>

        <div className="editorial-grid">
          {selectedWorks.map((entry, index) => (
            <Reveal key={entry.id} delay={index * 0.04}>
              <button
                type="button"
                onClick={() => setActiveEntry(entry)}
                className={`work-card group text-left ${entry.featured ? "editorial-span-2" : ""}`}
              >
                <div
                  className={`relative overflow-hidden bg-[#ece8df] ${
                    entry.thumbnail.orientation === "portrait"
                      ? "aspect-[4/5]"
                      : "aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={entry.thumbnail.src}
                    alt={entry.thumbnail.alt}
                    fill
                    sizes={
                      entry.thumbnail.orientation === "portrait"
                        ? "(min-width: 1100px) 20vw, (min-width: 768px) 42vw, 100vw"
                        : "(min-width: 1100px) 33vw, (min-width: 768px) 42vw, 100vw"
                    }
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                  {entry.kind === "clip" ? (
                    <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f6f1e8]/90 text-black">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </div>
                  ) : null}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-black/42">
                      {entry.sourceLabel}
                    </p>
                    <h3 className="font-display text-3xl leading-none text-black">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-black/58">
                      {entry.year} / {entry.role}
                    </p>
                  </div>
                  <span className="mt-1 text-black/30 transition group-hover:text-black/65">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <MediaModal
        open={Boolean(activeEntry)}
        title={activeEntry?.title ?? ""}
        meta={
          activeEntry
            ? `${activeEntry.sourceLabel} / ${activeEntry.year} / ${activeEntry.role}`
            : ""
        }
        onClose={() => setActiveEntry(null)}
      >
        {activeEntry ? (
          <div className="space-y-5">
            <div className="modal-media-frame">
              {activeEntry.media.type === "video" ? (
                <video
                  className="h-full w-full"
                  src={activeEntry.media.src}
                  poster={activeEntry.media.poster}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <div className="relative min-h-[68vh]">
                  <Image
                    src={activeEntry.media.src}
                    alt={activeEntry.media.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {activeEntry.href ? (
              <a
                href={activeEntry.href}
                target="_blank"
                rel="noreferrer"
                className="minimal-button inline-flex"
              >
                Watch Source
              </a>
            ) : null}
          </div>
        ) : null}
      </MediaModal>
    </section>
  );
}
