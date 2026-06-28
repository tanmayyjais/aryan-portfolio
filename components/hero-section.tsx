"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { hero, socialLinks } from "@/lib/site-data";

export function HeroSection() {
  const [flickerActive, setFlickerActive] = useState(false);

  const triggerClapFlicker = () => {
    setFlickerActive(true);
    setTimeout(() => setFlickerActive(false), 800);
  };

  const resumeLink = socialLinks.find((item) => item.label === "Resume")?.href;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black select-none border-b border-[#ece9e2]/5">
      {/* Background Video Loop with Dark Matte Mask */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-30 brightness-[0.7] contrast-[1.05]"
          src="/media/reels/montage-preview.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        
        {/* Cinematic Grid Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{
            backgroundImage: "linear-gradient(rgba(236,233,226,1) 1px, transparent 1px)",
            backgroundSize: "100% 4px"
          }}
        />
      </div>

      {/* Retro Projector Flicker Easter Egg Overlay */}
      {flickerActive && (
        <div className="absolute inset-0 z-30 pointer-events-none bg-[#ece9e2]/5 animate-flicker" />
      )}

      {/* Top Bar / Matte Header */}
      <div className="relative z-20 w-full px-6 py-6 md:px-12 flex items-center justify-between border-b border-[#ece9e2]/5 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          {/* Interactive Clapperboard Logo */}
          <button
            type="button"
            onClick={triggerClapFlicker}
            className="group flex items-center justify-center p-1 rounded transition hover:bg-[#ece9e2]/5 cursor-none"
            data-cursor="link"
            aria-label="Clap board"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-8 h-8 fill-none stroke-[#b58557] group-hover:stroke-[#ece9e2] transition duration-300"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Clapperboard Box */}
              <rect x="15" y="45" width="70" height="40" rx="3" />
              <line x1="15" y1="58" x2="85" y2="58" />
              <line x1="30" y1="45" x2="40" y2="58" />
              <line x1="50" y1="45" x2="60" y2="58" />
              
              {/* Hinged lid with animation */}
              <g className="animate-clapper">
                <polygon points="15,33 85,33 80,45 15,45" />
                <line x1="28" y1="33" x2="38" y2="45" />
                <line x1="48" y1="33" x2="58" y2="45" />
              </g>
            </svg>
          </button>
          <span className="text-[0.62rem] uppercase tracking-[0.32em] text-[#b58557] font-semibold hidden sm:inline">
            Aryan Kumar • Student Director
          </span>
        </div>

        <div className="text-[0.65rem] uppercase tracking-[0.24em] text-[#ece9e2]/50 flex gap-4">
          <span>AAFT Delhi</span>
          <span className="text-[#ece9e2]/20">/</span>
          <span>Drishtiikaar</span>
        </div>
      </div>

      {/* Main Typography Block */}
      <div className="relative z-10 container-shell flex flex-col justify-center flex-grow py-12 md:py-20">
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <div className="h-[1px] w-8 bg-[#b58557]" />
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#b58557] font-semibold">
              Selected Portfolio
            </p>
          </motion.div>

          <h1 className="font-display text-[4.8rem] leading-[0.82] tracking-[-0.04em] text-[#ece9e2] sm:text-[6.8rem] md:text-[8.5rem] lg:text-[10rem]">
            {/* Split name anims */}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              ARYAN
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[#b58557]"
            >
              KUMAR
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 pt-4 border-t border-[#ece9e2]/5"
          >
            <p className="font-display text-xl sm:text-2xl text-[#ece9e2]/80 leading-relaxed max-w-xl italic">
              &ldquo;{hero.statement}&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-[#ece9e2]/40 font-mono">
              Filmmaker • Cinematographer • Writer • Editor
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar / Matte Footer */}
      <div className="relative z-20 w-full px-6 py-6 md:px-12 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-[#ece9e2]/5 bg-black/40 backdrop-blur-md">
        {/* Buttons / Actions */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#selected-works"
            className="minimal-button minimal-button-solid cursor-none"
            data-cursor="link"
          >
            View Work
          </a>
          {resumeLink && (
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="minimal-button cursor-none"
              data-cursor="link"
            >
              Download CV
            </a>
          )}
        </motion.div>

        {/* Framing & Spec display */}
        <div className="text-[0.62rem] uppercase tracking-[0.26em] text-[#ece9e2]/30 font-mono flex items-center gap-4">
          <span>FPS: 24.00</span>
          <span>•</span>
          <span>ASPECT Ratio: 2.39:1</span>
          <span>•</span>
          <span>ISO: 400</span>
        </div>
      </div>
    </section>
  );
}
