"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Clapperboard, Play } from "lucide-react";
import Image from "next/image";

import { heroStats } from "@/lib/site-data";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,133,87,0.26),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(115,45,22,0.18),transparent_25%)]" />
      </motion.div>

      <div className="film-frame absolute inset-0" />

      <div className="container-shell relative z-10 flex min-h-screen flex-col justify-between py-8">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.28em] text-white/55">
          <span>Aryan Kumar</span>
          <span className="hidden md:block">
            Cinematographer / Filmmaker / Visual Storyteller
          </span>
        </div>

        <div className="grid items-end gap-12 pb-16 pt-28 lg:grid-cols-[1.35fr_0.65fr] lg:pb-24">
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="eyebrow"
            >
              AAFT Delhi / 1st Year BSc Cinematography
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.65 }}
              className="font-display text-[4rem] leading-[0.86] tracking-[-0.05em] text-paper sm:text-[5.5rem] md:text-[7rem] lg:text-[8.6rem]"
            >
              Capturing
              <span className="text-gradient block bg-[length:200%_100%] animate-shimmer">
                emotion
              </span>
              through light,
              <br />
              motion, and frame.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="max-w-xl text-lg leading-8 text-white/70"
            >
              A cinematic portfolio shaped by curiosity, atmosphere, and the search
              for images that stay with you after the scene fades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
              >
                View Work
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm uppercase tracking-[0.2em] text-paper transition hover:border-white/35 hover:bg-white/5"
              >
                Contact
                <Clapperboard className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="panel relative overflow-hidden rounded-[2rem] border-white/10 p-4 shadow-glow"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#b58557]/20 via-transparent to-transparent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                alt="Placeholder portrait for Aryan Kumar"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                    Current Focus
                  </p>
                  <p className="mt-2 font-display text-3xl text-paper">
                    Observing stories before they are spoken
                  </p>
                </div>
                <a
                  href="#showreel"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur transition hover:scale-105"
                >
                  <Play className="h-5 w-5 fill-current text-paper" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid gap-4 border-t border-white/10 pt-5 text-white/72 sm:grid-cols-3"
        >
          {heroStats.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-full border border-white/10 px-5 py-4"
            >
              <span className="text-sm uppercase tracking-[0.24em]">{item.label}</span>
              <span className="font-display text-3xl text-paper">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
