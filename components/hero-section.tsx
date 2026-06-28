"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, Play } from "lucide-react";
import Image from "next/image";

import { hero, socialLinks } from "@/lib/site-data";

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reducedMotion ? "0%" : "12%"]
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={hero.background.src}
          alt={hero.background.alt}
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(181,133,87,0.16),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.18),rgba(5,5,5,0.74)_55%,rgba(5,5,5,1))]" />
      </motion.div>

      <div className="film-frame absolute inset-0" />

      <div className="container-shell relative z-10 flex min-h-screen flex-col justify-between py-8">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.26em] text-white/55">
          <span>DRYSHTIKAAR</span>
          <span className="hidden md:block">Delhi / AAFT / 2028</span>
        </div>

        <div className="grid min-h-[78vh] items-end gap-10 pb-14 pt-24 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="eyebrow"
            >
              Emerging Auteur Portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.4 }}
              className="font-display text-[4.4rem] leading-[0.82] tracking-[-0.055em] text-paper sm:text-[5.8rem] md:text-[7.4rem] xl:text-[9rem]"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="max-w-xl text-xs uppercase tracking-[0.28em] text-[#b58557]"
            >
              {hero.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-2xl text-lg leading-8 text-white/72 md:text-xl"
            >
              {hero.statement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#focal-void"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
              >
                Watch Focal Void
                <Play className="h-4 w-4 fill-current" />
              </a>
              <a
                href={socialLinks.find((item) => item.label === "Resume")?.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-paper transition hover:border-white/35 hover:bg-white/5"
              >
                Download Resume
                <Download className="h-4 w-4" />
              </a>
              <a
                href="#visual-narratives"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-paper transition hover:border-white/35 hover:bg-white/5"
              >
                Explore Work
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.9 }}
            className="panel grid gap-4 rounded-[2rem] border-white/10 p-5 md:grid-cols-3 lg:grid-cols-1"
          >
            {hero.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/45">
                  {item.label}
                </p>
                <p className="mt-4 font-display text-3xl leading-tight text-paper">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
