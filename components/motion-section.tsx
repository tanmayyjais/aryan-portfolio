"use client";

import { Play, Hourglass, Scan, Eye, Layers } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { MediaModal } from "@/components/media-modal";
import { Reveal } from "@/components/reveal";
import type { PortfolioEntry } from "@/lib/types";

// Generate 6 visual narrative boxes from the available reel previews as sketched on Slide 2
const visualNarratives: PortfolioEntry[] = [
  {
    id: "ten-shot-narrative",
    title: "10 Shot Study",
    kind: "clip",
    year: "2025",
    role: "Director / Camera",
    sourceLabel: "Composition",
    thumbnail: {
      src: "/media/reels/ten-shot-01.jpg",
      alt: "10 Shot Study Thumbnail",
      type: "image",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    media: {
      src: "/media/reels/ten-shot-preview.mp4",
      alt: "10 Shot Study Preview",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    synopsis: "Ten carefully structured static frames exploring spatial alignment and geometric lines. Part of coursework exploring deep staging.",
    specs: "Sony Mirrorless • 50mm Prime",
  },
  {
    id: "intellectual-narrative",
    title: "Intellectual Montage",
    kind: "clip",
    year: "2025",
    role: "Direction / Assembly",
    sourceLabel: "Montage",
    thumbnail: {
      src: "/media/reels/intellectual-02.jpg",
      alt: "Intellectual Montage Thumbnail",
      type: "image",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    media: {
      src: "/media/reels/intellectual-preview.mp4",
      alt: "Intellectual Montage Preview",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    synopsis: "An editing exercise demonstrating the juxtaposition of contrasting images to evoke subconscious connections, referencing Kuleshov principles.",
    specs: "Premiere Pro Assembly",
  },
  {
    id: "montage-narrative",
    title: "Rhythm Study",
    kind: "clip",
    year: "2025",
    role: "Editor / Pacing",
    sourceLabel: "Pacing Exercise",
    thumbnail: {
      src: "/media/reels/montage-02.jpg",
      alt: "Rhythm Study Thumbnail",
      type: "image",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    media: {
      src: "/media/reels/montage-preview.mp4",
      alt: "Rhythm Study Preview",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    synopsis: "A fast-paced sequence analyzing rhythmic cuts, movement velocity, and optical tension.",
    specs: "Premiere Pro CC",
  },
  {
    id: "framing-narrative",
    title: "Composition & Depth",
    kind: "clip",
    year: "2025",
    role: "Cinematography",
    sourceLabel: "Framing Study",
    thumbnail: {
      src: "/media/reels/ten-shot-02.jpg",
      alt: "Framing study",
      type: "image",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    media: {
      src: "/media/reels/ten-shot-preview.mp4",
      alt: "Framing study video",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    synopsis: "Exploring camera height, rule of thirds deviation, and depth anchors. Focuses on architectural framing.",
    specs: "Sony Mirrorless • 35mm Prime",
  },
  {
    id: "lowlight-narrative",
    title: "Chiaroscuro Night",
    kind: "clip",
    year: "2025",
    role: "Cinematography",
    sourceLabel: "Lighting Study",
    thumbnail: {
      src: "/media/reels/intellectual-03.jpg",
      alt: "Low light study",
      type: "image",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    media: {
      src: "/media/reels/intellectual-preview.mp4",
      alt: "Low light study video",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    synopsis: "Analyzing high-contrast illumination and exposure control under dynamic neon sources.",
    specs: "Sony Mirrorless • f/1.8 Aperture",
  },
  {
    id: "pacing-narrative",
    title: "Movement Velocity",
    kind: "clip",
    year: "2025",
    role: "Editor / Assembly",
    sourceLabel: "Rhythm Study",
    thumbnail: {
      src: "/media/reels/montage-03.jpg",
      alt: "Movement velocity thumbnail",
      type: "image",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    media: {
      src: "/media/reels/montage-preview.mp4",
      alt: "Movement velocity video",
      type: "video",
      orientation: "landscape",
      width: 640,
      height: 360,
    },
    synopsis: "Juxtaposing fast spatial camera movements with stationary close-up shots to dictate tempo.",
    specs: "DaVinci Resolve Assembly",
  },
];

// Subcomponent to handle hover play/pause
function FilmstripCard({ clip, onClick }: { clip: PortfolioEntry; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex-shrink-0 w-80 text-left focus:outline-none cursor-none bg-black/40 group relative rounded-lg border border-[#ece9e2]/8 p-2"
      data-cursor="play"
    >
      {/* Physical Filmstrip Border Perforations */}
      <div className="absolute top-0 left-0 right-0 h-4 flex justify-between px-3 pointer-events-none opacity-25">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2.5 h-2 bg-[#ece9e2]/60 rounded-sm" />
        ))}
      </div>

      <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#090909] mt-3.5 mb-3.5">
        <Image
          src={clip.thumbnail.src}
          alt={clip.thumbnail.alt}
          fill
          sizes="320px"
          className={`object-cover object-center transition duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          src={clip.media.src}
          loop
          muted
          playsInline
          preload="metadata"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Hover Text Indicator */}
        <div className="absolute top-2 right-2 flex items-center justify-center h-7 w-7 rounded-full bg-black/70 text-[#b58557] border border-[#ece9e2]/10 backdrop-blur-sm">
          <Play className="h-3 w-3 fill-current ml-0.5" />
        </div>
      </div>

      {/* Filmstrip Bottom Perforations */}
      <div className="absolute bottom-0 left-0 right-0 h-4 flex justify-between px-3 pointer-events-none opacity-25">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2.5 h-2 bg-[#ece9e2]/60 rounded-sm" />
        ))}
      </div>

      <div className="px-2 pb-2 space-y-1">
        <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#b58557] font-semibold flex items-center gap-1">
          <Hourglass className="h-2.5 w-2.5" />
          {clip.sourceLabel}
        </span>
        <h3 className="font-display text-xl text-[#ece9e2] truncate group-hover:text-[#b58557] transition">
          {clip.title}
        </h3>
        <p className="text-[0.68rem] text-[#ece9e2]/40">
          {clip.year} • {clip.role}
        </p>
      </div>
    </button>
  );
}

export function MotionSection() {
  const [activeClip, setActiveClip] = useState<PortfolioEntry | null>(null);

  return (
    <section id="motion" className="section-space bg-[#080808] border-b border-[#ece9e2]/8">
      <div className="container-shell space-y-10">
        <div className="section-label-row">
          <div className="space-y-1">
            <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557] font-semibold">
              Visual Narratives
            </span>
            <h2 className="font-display text-4xl text-[#ece9e2] tracking-tight">
              Motion Studies
            </h2>
          </div>
          <p className="section-note">Slide 02 • Hover to Play</p>
        </div>

        {/* Horizontal Filmstrip Scroller */}
        <Reveal>
          <div className="flex gap-6 overflow-x-auto py-6 px-1 scrollbar-thin select-none snap-x snap-mandatory">
            {visualNarratives.map((clip) => (
              <FilmstripCard
                key={clip.id}
                clip={clip}
                onClick={() => setActiveClip(clip)}
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.25em] text-[#ece9e2]/30 mt-4 px-1">
            <span className="flex items-center gap-1.5">
              <Scan className="h-3.5 w-3.5" />
              Scroll Horizontally to Explore
            </span>
            <span>6 Frames Loaded</span>
          </div>
        </Reveal>
      </div>

      <MediaModal
        open={Boolean(activeClip)}
        title={activeClip?.title ?? ""}
        meta={
          activeClip
            ? `${activeClip.sourceLabel} • ${activeClip.year} • ${activeClip.role}`
            : ""
        }
        onClose={() => setActiveClip(null)}
      >
        {activeClip && (
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-start pt-2">
            <div className="modal-media-frame aspect-[16/10] bg-black">
              <video
                className="h-full w-full object-cover"
                src={activeClip.media.src}
                poster={activeClip.thumbnail.src}
                controls
                autoPlay
                playsInline
                preload="auto"
              />
            </div>

            <div className="space-y-6">
              <div className="space-y-2 border-b border-[#ece9e2]/8 pb-4">
                <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#b58557] font-semibold flex items-center gap-1.5">
                  <Eye className="h-3 w-3" />
                  Study Focus
                </span>
                <p className="text-sm leading-relaxed text-[#ece9e2]/70">
                  {activeClip.synopsis}
                </p>
              </div>

              {activeClip.specs && (
                <div className="space-y-2">
                  <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#b58557] font-semibold flex items-center gap-1.5">
                    <Layers className="h-3 w-3" />
                    Recording Specifications
                  </span>
                  <p className="text-xs font-mono text-[#ece9e2]/50 bg-white/[0.01] border border-[#ece9e2]/5 p-3 rounded-lg">
                    {activeClip.specs}
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
