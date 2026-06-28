"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, FileText, Camera, Sliders } from "lucide-react";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    number: "01",
    title: "Vision",
    icon: Eye,
    description:
      "Every frame starts as a feeling. I develop moodboards, visual references, and a clear thesis about what the image should make the viewer feel before any camera is picked up.",
    image: "/media/hero/hero-still-alt.jpg",
    tools: "Treatment Decks · Moodboards · Shot Lists",
  },
  {
    number: "02",
    title: "Pre-Production",
    icon: FileText,
    description:
      "Translating vision into logistics. Location scouting, lighting plan, storyboard, and technical prep — so the camera can follow instinct rather than chase solutions on set.",
    image: "/media/reels/intellectual-02.jpg",
    tools: "Storyboard · Location Scout · Lighting Design",
  },
  {
    number: "03",
    title: "On Set",
    icon: Camera,
    description:
      "Where instinct meets discipline. I work the light, control the frame, and move with intention. Every decision — focus, angle, exposure — is a creative choice, not an accident.",
    image: "/media/reels/ten-shot-01.jpg",
    tools: "Sony Mirrorless · Prime Lenses · Gimbals",
  },
  {
    number: "04",
    title: "Post",
    icon: Sliders,
    description:
      "The edit is the second writing. Color grading the emotional temperature, cutting to rhythm, and making the final frame feel inevitable — like it couldn't have looked any other way.",
    image: "/media/reels/montage-02.jpg",
    tools: "DaVinci Resolve · Premiere Pro · After Effects",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="section-pad bg-[#070707] border-b border-[#f5f0e8]/06 overflow-hidden">
      <div className="shell space-y-12">
        <Reveal>
          <div className="label-row">
            <div className="space-y-2">
              <span className="eyebrow">The Method</span>
              <h2 className="section-title">How I See</h2>
            </div>
            <p className="font-display italic text-[#f5f0e8]/40 text-lg hidden sm:block">
              Vision → Frame → Story
            </p>
          </div>
        </Reveal>

        {/* Steps — horizontal scroll on desktop */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 min-w-max sm:min-w-0 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="flex-shrink-0 w-72 sm:w-auto group"
              >
                <div className="space-y-5">
                  {/* Image frame */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-[#f5f0e8]/06 bg-[#0d0d0d]">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 288px"
                      className="object-cover brightness-50 group-hover:brightness-70 transition-all duration-700"
                    />
                    {/* Step number overlay */}
                    <div className="absolute top-3 left-3 font-display text-6xl font-black text-[#c9a96e]/15 leading-none select-none">
                      {step.number}
                    </div>
                    {/* Icon badge */}
                    <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#c9a96e]/90 text-[#0a0a0a]">
                      <step.icon className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.58rem] tracking-[0.25em] text-[#c9a96e]">{step.number}</span>
                      <div className="h-[1px] w-4 bg-[#c9a96e]/40" />
                      <h3 className="font-display text-xl text-[#f5f0e8]">{step.title}</h3>
                    </div>
                    <p className="font-body text-sm leading-7 text-[#f5f0e8]/55">{step.description}</p>
                    <p className="font-mono text-[0.6rem] tracking-[0.15em] text-[#f5f0e8]/28 uppercase">{step.tools}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
