"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { useTypewriter } from "@/hooks/use-typewriter";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });
  const imgX = useTransform(springX, [-1, 1], ["-12px", "12px"]);
  const imgY = useTransform(springY, [-1, 1], ["-8px", "8px"]);

  const { displayText, isFinished } = useTypewriter({
    phrases: [
      "Aryan Kumar.",
      "a Cinematographer.",
      "a Filmmaker.",
      "a Director.",
      "a Visual Storyteller.",
      "a Photographer.",
    ],
    typingSpeed: 90,
    erasingSpeed: 22,
    pauseDuration: 2200,
    finalHoldDuration: 3500,
    firstPhrasePause: 3800,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - left) / width) * 2 - 1);
    mouseY.set(((e.clientY - top) / height) * 2 - 1);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#070707]"
    >
      {/* Ken Burns parallax background */}
      <motion.div
        className="absolute inset-[-5%] z-0"
        style={{ x: imgX, y: imgY, willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/media/personal/media__1782677888374.jpg"
            alt="Cinematic background"
            fill
            priority
            sizes="110vw"
            className="object-cover object-[center_28%] brightness-[0.4] opacity-70 contrast-110"
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#070707]/80 via-transparent to-[#070707]/40" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 border-b border-[#f5f0e8]/05 bg-black/30 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          {/* Clapperboard mini logo */}
          <svg viewBox="0 0 40 34" className="w-8 h-7 fill-none stroke-[#c9a96e]" strokeWidth="2" strokeLinecap="round">
            <rect x="4" y="16" width="32" height="16" rx="2" />
            <line x1="4" y1="22" x2="36" y2="22" />
            <line x1="13" y1="16" x2="17" y2="22" />
            <line x1="24" y1="16" x2="28" y2="22" />
            <polygon points="4,10 36,10 34,16 4,16" />
            <line x1="12" y1="10" x2="16" y2="16" />
            <line x1="23" y1="10" x2="27" y2="16" />
          </svg>
          <span className="font-mono text-[0.62rem] tracking-[0.3em] uppercase text-[#c9a96e] hidden sm:inline">
            DRISHTIIKAAR
          </span>
        </div>
        <div className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-[#f5f0e8]/35 flex gap-5">
          <span>AAFT Noida</span>
          <span className="text-[#f5f0e8]/15">/</span>
          <span>Student Cinematographer</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center flex-grow px-6 py-16 md:px-16">
        <div className="max-w-6xl w-full space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex items-center gap-3"
          >
            <div className="h-[1px] w-10 bg-[#c9a96e]" />
            <span className="eyebrow">Cinematographer · Filmmaker · Visual Storyteller</span>
          </motion.div>

          {/* Typewriter title */}
          <div
            aria-live="polite"
            aria-label="I'm Aryan Kumar. I'm a Cinematographer, Filmmaker, Director, Visual Storyteller, and Photographer."
          >
            <h1
              className="font-display font-black leading-[1.1] tracking-[-0.02em] text-[#f5f0e8] flex flex-wrap items-center"
              style={{ fontSize: "clamp(1.75rem, 6.5vw, 4.5rem)" }}
            >
              <span className="mr-[0.3em]">I&apos;m</span>
              <span className="text-[#f5f0e8]">{displayText}</span>
              <motion.span
                animate={{ opacity: isFinished ? 0 : [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="inline-block ml-2 w-[4px] h-[0.75em] bg-[#c9a96e] align-middle"
              />
            </h1>
          </div>

          {/* Subtitle block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="space-y-3 border-l-2 border-[#c9a96e] pl-5"
          >
            <p className="font-display text-xl md:text-2xl italic text-[#f5f0e8]/80 leading-relaxed">
              &ldquo;I don&apos;t just shoot frames — I build worlds within them.&rdquo;
            </p>
            <p className="font-mono text-[0.68rem] tracking-[0.24em] uppercase text-[#f5f0e8]/40">
              Student Cinematographer · AAFT Noida · 2025
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a href="#featured-work" className="btn btn-gold" data-cursor="hover">
              View Films
            </a>
            <a href="#contact" className="btn" data-cursor="hover">
              Work Together
            </a>
          </motion.div>
        </div>
      </div>

      {/* Spec footer */}
      <div className="relative z-10 border-t border-[#f5f0e8]/05 bg-black/30 backdrop-blur-sm px-6 py-4 md:px-12 flex items-center justify-between">
        <div className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-[#f5f0e8]/25 flex gap-6">
          <span>FPS 24.00</span>
          <span>·</span>
          <span>2.39:1 Scope</span>
          <span>·</span>
          <span>ISO 400</span>
        </div>
        {/* Animated scroll chevron */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-[#c9a96e]/60"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}
