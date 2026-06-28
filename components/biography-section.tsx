"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { about, contact } from "@/lib/site-data";

export function BiographySection() {
  return (
    <section id="about" className="section-space border-b border-[#ece9e2]/8 bg-[#0a0a0a]">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Typographic Timeline Column */}
        <div className="space-y-10">
          <Reveal className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b58557]" />
              <p className="section-kicker">About Me</p>
            </div>
            
            <h2 className="font-display text-[2.8rem] leading-[1.04] tracking-[-0.03em] text-[#ece9e2] md:text-[3.8rem]">
              Aryan Kumar
            </h2>
            
            <p className="font-display text-2xl text-[#b58557]/90 leading-relaxed italic max-w-2xl">
              &ldquo;{about.statement}&rdquo;
            </p>
            
            <p className="text-sm md:text-base leading-8 text-[#ece9e2]/70 max-w-xl">
              Currently pursuing a <strong className="text-[#ece9e2] font-semibold">BSc in Cinematography at AAFT Delhi (Noida)</strong>. Building a disciplined practice focused on lighting geometry, composition weight, editing pace, and high-contrast color theory.
            </p>
          </Reveal>

          {/* Education & Experience Details */}
          <div className="space-y-6 border-t border-[#ece9e2]/8 pt-8">
            <Reveal className="space-y-6">
              <div className="space-y-2">
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557]/80 font-semibold block">
                  Education & Foundation
                </span>
                <p className="text-sm leading-relaxed text-[#ece9e2]/80">
                  {about.education}
                </p>
              </div>

              <div className="space-y-4">
                <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557]/80 font-semibold block">
                  Selected Engagements
                </span>
                <div className="grid gap-4 sm:grid-cols-2">
                  {about.experience.map((item) => (
                    <div key={item.title} className="bg-white/[0.02] border border-[#ece9e2]/5 rounded-xl p-4">
                      <p className="text-[0.95rem] font-medium text-[#ece9e2]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-[#ece9e2]/40">
                        {item.meta}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* CTAs matching hand-drawn Slide 1 */}
          <Reveal className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="minimal-button minimal-button-solid cursor-none"
              data-cursor="link"
            >
              Hire Me
            </a>
            <a
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              className="minimal-button cursor-none"
              data-cursor="link"
            >
              Download CV
            </a>
          </Reveal>
        </div>

        {/* Ken Burns Portrait Column */}
        <Reveal delay={0.2} className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#ece9e2]/8 group bg-[#0d0d0d]">
          {/* Framer motion slow zoom container */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="/media/photography/editorial-01.jpg"
              alt="Portrait of Aryan Kumar"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center transition-all duration-[3000ms] ease-out group-hover:brightness-105"
            />
          </motion.div>
          
          {/* Cinema viewfinder crop bars overlay */}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-black/80 flex flex-col justify-between">
            <div className="flex justify-between p-2 text-[#ece9e2]/30 text-[0.55rem] font-mono">
              <span>REC</span>
              <span>100%</span>
            </div>
            <div className="flex justify-between p-2 text-[#ece9e2]/30 text-[0.55rem] font-mono">
              <span>24 fps</span>
              <span>A7SIII</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
