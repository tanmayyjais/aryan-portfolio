"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Film, Clapperboard, ExternalLink } from "lucide-react";
import YouTube from "react-youtube";
import { Reveal } from "@/components/reveal";

const FILMS = [
  {
    id: "focal-void",
    youtubeId: "28RcRST1YJM",
    title: "Focal Void",
    genre: "Psychological Drama",
    role: "Director · Cinematographer · Editor",
    year: "2026",
    runtime: "~8 min",
    thumbnail: "/media/films/focal-void/still-02.jpg",
    synopsis: "A psychological study of isolation and visual tension. Told in high-contrast frames where stillness speaks louder than movement — exploring the thin line between perception and reality.",
    credits: [
      { label: "Written & Directed by", value: "Aryan Kumar" },
      { label: "Cinematography", value: "Aryan Kumar" },
      { label: "Editing", value: "Aryan Kumar" },
      { label: "Production", value: "AAFT Noida" },
    ],
    camera: "Sony Mirrorless · 24mm Prime · DaVinci Resolve",
  },
  {
    id: "film-2",
    youtubeId: "POCzq-AF2Ig",
    title: "Visual Study II",
    genre: "Experimental Short",
    role: "Cinematographer · Director",
    year: "2025",
    runtime: "~5 min",
    thumbnail: "/media/films/focal-void/still-03.jpg",
    synopsis: "An experimental exploration of spatial depth and color temperature. Frames built to feel like photographs that breathe — each shot a meditation on time standing still.",
    credits: [
      { label: "Direction & Camera", value: "Aryan Kumar" },
      { label: "Color Grading", value: "Aryan Kumar" },
    ],
    camera: "Sony Mirrorless · 50mm f/1.8 · 4K 24fps",
  },
];

function FilmCard({ film }: { film: typeof FILMS[0] }) {
  const [playing, setPlaying] = useState(false);

  return (
    <Reveal>
      <div className="group relative overflow-hidden rounded-2xl border border-[#f5f0e8]/07 bg-[#0d0d0d]">
        {/* Thumbnail / Player area */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <AnimatePresence>
            {!playing ? (
              <motion.div
                key="thumb"
                className="absolute inset-0 cursor-none"
                exit={{ opacity: 0 }}
                data-cursor="hover"
              >
                {/* Thumbnail with hover zoom */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                  <Image
                    src={film.thumbnail}
                    alt={film.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover brightness-60 contrast-110"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Play button */}
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group/play cursor-none"
                  data-cursor="hover"
                  aria-label={`Play ${film.title}`}
                >
                  <motion.div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c9a96e] text-[#0a0a0a] shadow-[0_0_60px_rgba(201,169,110,0.5)] transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-[#dab87e]"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="h-6 w-6 fill-current ml-1" />
                  </motion.div>
                </button>

                {/* Film info overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="eyebrow text-[0.58rem] text-[#c9a96e]">{film.genre}</span>
                    <h3 className="font-display text-2xl text-[#f5f0e8] mt-0.5">{film.title}</h3>
                  </div>
                  <span className="font-mono text-[0.6rem] text-[#f5f0e8]/40 tracking-wider border border-[#f5f0e8]/10 px-2 py-0.5 rounded">
                    {film.year}
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div key="player" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black">
                <YouTube
                  videoId={film.youtubeId}
                  className="w-full h-full"
                  iframeClassName="w-full h-full"
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: { autoplay: 1, rel: 0, modestbranding: 1, color: "white" },
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Detail panel */}
        <div className="p-6 grid gap-6 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Clapperboard className="h-3.5 w-3.5 text-[#c9a96e]" />
                <span className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[#c9a96e]">
                  {film.role}
                </span>
              </div>
              <p className="font-body text-sm leading-7 text-[#f5f0e8]/60 max-w-lg">
                {film.synopsis}
              </p>
            </div>

            {/* Credits */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {film.credits.map((c) => (
                <div key={c.label} className="text-xs">
                  <span className="text-[#f5f0e8]/35 uppercase tracking-wider">{c.label}</span>
                  <p className="text-[#f5f0e8]/80 font-medium mt-0.5">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 items-start md:items-end justify-between">
            <div className="text-right space-y-1">
              <div className="flex items-center gap-1.5 justify-end">
                <Film className="h-3 w-3 text-[#c9a96e]" />
                <span className="font-mono text-[0.58rem] text-[#f5f0e8]/35 tracking-wider">{film.runtime}</span>
              </div>
              <p className="font-mono text-[0.58rem] text-[#f5f0e8]/30">{film.camera}</p>
            </div>

            <div className="flex gap-3">
              {!playing && (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="btn btn-gold text-[0.65rem] px-4 py-2 cursor-none"
                  data-cursor="hover"
                >
                  <Play className="h-3 w-3 fill-current" />
                  Watch Film
                </button>
              )}
              <a
                href={`https://youtu.be/${film.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="btn text-[0.65rem] px-4 py-2 cursor-none"
                data-cursor="hover"
              >
                <ExternalLink className="h-3 w-3" />
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function SelectedWorksSection() {
  return (
    <section id="featured-work" className="section-pad bg-[#070707] border-b border-[#f5f0e8]/06">
      <div className="shell space-y-12">
        <div className="label-row">
          <div className="space-y-2">
            <span className="eyebrow">Featured Films</span>
            <h2 className="section-title">Short Films</h2>
          </div>
          <a
            href="https://www.youtube.com/@aaryannnk"
            target="_blank"
            rel="noreferrer"
            className="btn hidden sm:inline-flex cursor-none"
            data-cursor="hover"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            YouTube Channel
          </a>
        </div>

        <div className="grid gap-12">
          {FILMS.map((film) => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>
      </div>
    </section>
  );
}
