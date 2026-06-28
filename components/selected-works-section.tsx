"use client";

import { Play, Film, Calendar, Clapperboard, Monitor, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import { selectedWorks } from "@/lib/site-data";
import type { PortfolioEntry } from "@/lib/types";

// Combine Focal Void with an upcoming film placeholder matching Slide 2 "Short Film" boxes
const shortFilms: PortfolioEntry[] = [
  ...selectedWorks.filter((item) => item.kind === "film"),
  {
    id: "aural-delusions",
    title: "Aural Delusions",
    kind: "film",
    year: "2026 (Upcoming)",
    role: "Director / Cinematographer",
    sourceLabel: "In Post-Production",
    thumbnail: {
      src: "/media/hero/hero-still-alt.jpg",
      alt: "Upcoming film mood shot",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    media: {
      src: "/media/hero/hero-still-alt.jpg",
      alt: "Upcoming film mood shot",
      type: "image",
      orientation: "landscape",
      width: 1920,
      height: 1080,
    },
    synopsis: "An atmospheric exploration of sensory isolation and auditory hallucinations in high-density urban environments. Shot entirely in low-light and neon spaces around Delhi NCR.",
    credits: [
      { label: "Writer & Director", value: "Aryan Kumar" },
      { label: "Cinematographer", value: "Aryan Kumar" },
      { label: "Sound Designer", value: "AAFT Collaborators" },
    ],
    specs: "Sony A7S III • Cine Prime Lenses • Ultra-Low Light Setup",
  },
];

export function SelectedWorksSection() {
  const [activeFilm, setActiveFilm] = useState<PortfolioEntry | null>(null);

  // Parse youtube video id from links
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`
      : null;
  };

  return (
    <section id="selected-works" className="section-space bg-black/60 border-b border-[#ece9e2]/8">
      <div className="container-shell space-y-12">
        <div className="section-label-row">
          <div className="space-y-1">
            <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557] font-semibold">
              Narrative Work
            </span>
            <h2 className="font-display text-4xl text-[#ece9e2] tracking-tight">
              Short Films
            </h2>
          </div>
          <p className="section-note">Slide 01 • Dynamic Frames</p>
        </div>

        {/* Short Film Widescreen Grid (2 boxes from sketch) */}
        <div className="grid gap-12 lg:grid-cols-2">
          {shortFilms.map((film, index) => (
            <Reveal key={film.id} delay={index * 0.1}>
              <button
                type="button"
                onClick={() => setActiveFilm(film)}
                className="group w-full text-left focus:outline-none cursor-none"
                data-cursor="play"
              >
                {/* Widescreen Film Card Frame */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#ece9e2]/10 bg-[#0d0d0d] transition duration-500 group-hover:border-[#b58557]/40 shadow-2xl">
                  <Image
                    src={film.thumbnail.src}
                    alt={film.thumbnail.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-center transition duration-[1500ms] ease-out group-hover:scale-[1.03] group-hover:brightness-95"
                  />
                  
                  {/* Subtle cinema scope grid */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                  {/* Play badge / Status badge */}
                  {film.id !== "aural-delusions" ? (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-[#b58557] text-white shadow-xl transition-all duration-300 group-hover:bg-[#ece9e2] group-hover:text-black group-hover:scale-110">
                      <Play className="ml-1 h-5 w-5 fill-current" />
                    </div>
                  ) : (
                    <div className="absolute right-4 top-4 px-3 py-1 rounded-full bg-black/60 border border-[#ece9e2]/15 text-[0.62rem] uppercase tracking-[0.2em] text-[#b58557] flex items-center gap-1.5 backdrop-blur-md">
                      <Sparkles className="h-3 w-3 animate-pulse" />
                      In Production
                    </div>
                  )}

                  {/* Info Overlay at the bottom */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#b58557] font-semibold">
                        {film.sourceLabel}
                      </p>
                      <h3 className="font-display text-2xl text-[#ece9e2]">
                        {film.title}
                      </h3>
                    </div>
                    <span className="text-[0.65rem] font-mono tracking-wider text-[#ece9e2]/40 bg-black/40 px-2 py-0.5 rounded border border-[#ece9e2]/5">
                      {film.year}
                    </span>
                  </div>
                </div>

                {/* Technical Meta under the card */}
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#ece9e2]/50">
                  <span className="flex items-center gap-1.5">
                    <Clapperboard className="h-3.5 w-3.5 text-[#b58557]" />
                    Role: {film.role}
                  </span>
                  {film.specs && (
                    <span className="flex items-center gap-1.5 border-l border-[#ece9e2]/10 pl-6">
                      <Monitor className="h-3.5 w-3.5 text-[#b58557]" />
                      {film.specs}
                    </span>
                  )}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Theatre Modal */}
      <MediaModal
        open={Boolean(activeFilm)}
        title={activeFilm?.title ?? ""}
        meta={activeFilm ? `${activeFilm.sourceLabel} • ${activeFilm.year}` : ""}
        onClose={() => setActiveFilm(null)}
      >
        {activeFilm && (
          <div className="grid gap-8 lg:grid-cols-[1.7fr_0.9fr] lg:items-start pt-2">
            {/* Media Box */}
            <div className="space-y-4">
              <div className="modal-media-frame aspect-[16/9] relative overflow-hidden shadow-inner bg-black">
                {activeFilm.id !== "aural-delusions" && getYouTubeEmbedUrl(activeFilm.href) ? (
                  <iframe
                    className="absolute inset-0 w-full h-full border-none"
                    src={getYouTubeEmbedUrl(activeFilm.href) || ""}
                    title={activeFilm.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  // Mood teaser still
                  <div className="relative w-full h-full">
                    <Image
                      src={activeFilm.media.src}
                      alt={activeFilm.media.alt}
                      fill
                      className="object-cover object-center brightness-75 contrast-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="text-center p-4">
                        <Film className="h-10 w-10 text-[#b58557] mx-auto mb-2 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.25em] text-[#ece9e2]">
                          Teaser Trailer Coming Soon
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {activeFilm.href && (
                <div className="flex justify-between items-center bg-white/[0.02] border border-[#ece9e2]/5 rounded-xl p-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#b58557]">External Link</h4>
                    <p className="text-xs text-[#ece9e2]/50 mt-1">Watch directly on YouTube</p>
                  </div>
                  <a
                    href={activeFilm.href}
                    target="_blank"
                    rel="noreferrer"
                    className="minimal-button cursor-none text-[0.68rem] px-4 py-2 border-[#b58557]/30 hover:border-[#b58557]"
                    data-cursor="link"
                  >
                    Open YouTube
                  </a>
                </div>
              )}
            </div>

            {/* Details Panel */}
            <div className="space-y-6">
              <div className="space-y-2 border-b border-[#ece9e2]/8 pb-4">
                <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#b58557] font-semibold flex items-center gap-1.5">
                  <Film className="h-3 w-3" />
                  Synopsis
                </span>
                <p className="text-sm leading-relaxed text-[#ece9e2]/70">
                  {activeFilm.synopsis}
                </p>
              </div>

              {/* Credits List */}
              {activeFilm.credits && (
                <div className="space-y-3 border-b border-[#ece9e2]/8 pb-4">
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#b58557] font-semibold flex items-center gap-1.5">
                    <Clapperboard className="h-3 w-3" />
                    Credits
                  </span>
                  <div className="grid gap-2 text-xs">
                    {activeFilm.credits.map((credit) => (
                      <div key={credit.label} className="flex justify-between border-b border-[#ece9e2]/5 py-1">
                        <span className="text-[#ece9e2]/40 uppercase tracking-[0.1em]">{credit.label}</span>
                        <span className="text-[#ece9e2]/90 font-medium">{credit.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical specifications */}
              {activeFilm.specs && (
                <div className="space-y-2">
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#b58557] font-semibold flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    Specifications
                  </span>
                  <p className="text-xs font-mono text-[#ece9e2]/50">
                    {activeFilm.specs}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </MediaModal>
    </section>
  );
}
