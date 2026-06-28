"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { hero, socialLinks } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section className="border-b border-black/8">
      <div className="container-shell grid min-h-screen gap-12 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-12">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.24em] text-black/48">
            <span>DRYSHTIKAAR</span>
            <span>Delhi / AAFT</span>
          </div>

          <div className="space-y-8 pb-4 lg:pb-10">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[0.72rem] uppercase tracking-[0.3em] text-black/42"
            >
              Minimal editorial portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl font-display text-[4rem] leading-[0.86] tracking-[-0.05em] text-black sm:text-[5.2rem] md:text-[6.4rem] xl:text-[7.8rem]"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="max-w-md text-sm uppercase tracking-[0.22em] text-black/56"
            >
              {hero.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
              className="max-w-lg text-xl leading-8 text-black/68"
            >
              {hero.statement}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#selected-works" className="minimal-button minimal-button-solid">
                View Work
              </a>
              <a
                href={socialLinks.find((item) => item.label === "Resume")?.href}
                className="minimal-button"
              >
                Resume
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative min-h-[62vh] overflow-hidden rounded-[2rem] bg-[#d9d5cd]"
        >
          <Image
            src={hero.background.src}
            alt={hero.background.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
