"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { about, contact } from "@/lib/site-data";

// All available images for the filmstrip marquee
const MARQUEE_IMAGES = [
  "/media/photography/editorial-01.jpg",
  "/media/reels/ten-shot-01.jpg",
  "/media/photography/editorial-03.jpg",
  "/media/reels/intellectual-01.jpg",
  "/media/photography/editorial-05.jpg",
  "/media/reels/montage-01.jpg",
  "/media/photography/editorial-02.jpg",
  "/media/reels/ten-shot-02.jpg",
];

const STATS = [
  { value: 3, suffix: "+", label: "Short Films" },
  { value: 200, suffix: "+", label: "Frames Shot" },
  { value: 1, suffix: "", label: "Obsession" },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(value / 35);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(start);
    }, 28);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-value">{display}{suffix}</div>
      <p className="font-mono text-[0.64rem] tracking-[0.25em] uppercase text-[#f5f0e8]/45 mt-1">{label}</p>
    </div>
  );
}

export function BiographySection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0a0a0a] border-b border-[#f5f0e8]/06">
      {/* Filmstrip Marquee BG */}
      <div className="absolute inset-0 z-0 flex flex-col justify-center overflow-hidden opacity-[0.07] select-none pointer-events-none">
        <div className="flex gap-4 marquee-track whitespace-nowrap">
          {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, i) => (
            <div key={i} className="relative flex-shrink-0 w-52 h-72 overflow-hidden rounded-lg">
              <Image src={src} alt="" fill sizes="208px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 shell section-pad">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.75fr] lg:items-center">

          {/* Text column */}
          <div className="space-y-10">
            <Reveal className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="eyebrow">The Eye Behind the Lens</span>
                <div className="flex-1 h-[1px] bg-[#c9a96e]/20" />
              </div>
              <h2 className="section-title">About Me</h2>

              <p className="font-body text-base leading-8 text-[#f5f0e8]/65 max-w-xl">
                I don&apos;t just shoot frames — I build worlds within them. Currently shaping my craft at{" "}
                <strong className="text-[#f5f0e8] font-semibold">AAFT Noida</strong>, I believe
                cinematography is the language where light speaks and silence screams.
              </p>
              <p className="font-body text-base leading-8 text-[#f5f0e8]/55 max-w-xl">
                {about.statement} With a background in mass communication and an obsession for
                visual storytelling, every frame I shoot is a question about what the human eye
                really sees when it&apos;s allowed to slow down.
              </p>
              <p className="font-mono text-[0.68rem] tracking-[0.18em] text-[#f5f0e8]/35 uppercase">
                {about.education}
              </p>
            </Reveal>

            {/* Animated stats row */}
            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-4 border border-[#f5f0e8]/06 rounded-2xl p-6 bg-[#111111]/60 backdrop-blur-sm">
                {STATS.map((s) => (
                  <AnimatedStat key={s.label} {...s} />
                ))}
              </div>
            </Reveal>

            {/* Experience items */}
            <Reveal delay={0.2} className="space-y-3">
              {about.experience.map((item) => (
                <div key={item.title} className="flex items-center justify-between border-t border-[#f5f0e8]/06 pt-3 first:border-t-0 first:pt-0">
                  <p className="font-body text-sm text-[#f5f0e8]/80">{item.title}</p>
                  <span className="font-mono text-[0.64rem] tracking-[0.2em] text-[#c9a96e]">{item.meta}</span>
                </div>
              ))}
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.25} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-gold" data-cursor="hover">Hire Me</a>
              <a href={contact.resume} target="_blank" rel="noreferrer" className="btn" data-cursor="hover">
                Download CV
              </a>
            </Reveal>
          </div>

          {/* Portrait column */}
          <Reveal delay={0.1} className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#f5f0e8]/06 bg-[#0d0d0d] group">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Image
                src="/media/photography/editorial-04.jpg"
                alt="Aryan Kumar — Portrait"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-top brightness-90 contrast-105"
              />
            </motion.div>
            {/* Cinematic overlay bars */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 right-0 h-5 bg-[#070707]/85 flex items-center px-3 gap-2">
                <span className="font-mono text-[0.48rem] tracking-[0.2em] text-[#c9a96e]/70 uppercase">REC ●</span>
                <span className="font-mono text-[0.48rem] tracking-[0.2em] text-[#f5f0e8]/30 uppercase ml-auto">24fps</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#070707]/85 flex items-center px-3">
                <span className="font-mono text-[0.48rem] tracking-[0.2em] text-[#f5f0e8]/30 uppercase">Sony · f/1.8</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
