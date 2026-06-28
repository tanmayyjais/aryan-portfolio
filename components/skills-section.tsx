"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const CRAFT_SKILLS = [
  { label: "Camera Operation", level: 92 },
  { label: "Lighting Design", level: 85 },
  { label: "Visual Storytelling", level: 95 },
  { label: "Lens Selection", level: 88 },
  { label: "Color Grading", level: 82 },
  { label: "Storyboarding", level: 78 },
  { label: "Non-Linear Editing", level: 86 },
  { label: "Direction", level: 80 },
];

const SOFTWARE = [
  "DaVinci Resolve", "Adobe Premiere Pro", "After Effects",
  "Adobe Lightroom", "Photoshop", "Final Cut Pro", "Celtx / Final Draft",
];

// Aperture SVG rings visual
function ApertureRing({ level, label, index }: { level: number; label: string; index: number }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const dash = (level / 100) * circ;

  return (
    <motion.div
      className="flex flex-col items-center gap-3 group"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="relative">
        <svg width="90" height="90" viewBox="0 0 90 90" className="-rotate-90">
          {/* Background ring */}
          <circle cx="45" cy="45" r={r} fill="none" stroke="rgba(245,240,232,0.06)" strokeWidth="4" />
          {/* Progress arc */}
          <motion.circle
            cx="45" cy="45" r={r}
            fill="none"
            stroke="#c9a96e"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - dash }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.06 + 0.3, ease: "easeOut" }}
          />
          {/* Inner decorative ring */}
          <circle cx="45" cy="45" r={r - 12} fill="none" stroke="rgba(201,169,110,0.08)" strokeWidth="1" />
        </svg>
        {/* Center percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[0.65rem] font-bold text-[#c9a96e]">{level}%</span>
        </div>
      </div>
      <p className="font-body text-[0.75rem] text-[#f5f0e8]/65 text-center leading-tight max-w-[80px]">{label}</p>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad bg-[#0a0a0a] border-b border-[#f5f0e8]/06">
      <div className="shell space-y-14">
        <Reveal>
          <div className="label-row">
            <div className="space-y-2">
              <span className="eyebrow">Craft & Tools</span>
              <h2 className="section-title">Skills</h2>
            </div>
          </div>
        </Reveal>

        {/* Aperture rings — craft skills */}
        <Reveal>
          <div className="space-y-6">
            <p className="eyebrow">Core Craft</p>
            <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
              {CRAFT_SKILLS.map((skill, i) => (
                <ApertureRing key={skill.label} {...skill} index={i} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Software pills */}
        <Reveal delay={0.15}>
          <div className="space-y-5">
            <p className="eyebrow">Software & Pipeline</p>
            <div className="flex flex-wrap gap-3">
              {SOFTWARE.map((sw, i) => (
                <motion.span
                  key={sw}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="font-mono text-[0.68rem] tracking-[0.15em] uppercase px-4 py-2.5 rounded-full border border-[#f5f0e8]/10 text-[#f5f0e8]/60 bg-[#111111] hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-none"
                  data-cursor="hover"
                >
                  {sw}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Philosophy quote */}
        <Reveal delay={0.2}>
          <blockquote className="border-l-2 border-[#c9a96e] pl-6 py-2">
            <p className="font-display text-xl md:text-2xl italic text-[#f5f0e8]/70 leading-relaxed">
              &ldquo;The camera is a machine that sees. The cinematographer is the person who decides what it should feel.&rdquo;
            </p>
            <cite className="font-mono text-[0.62rem] tracking-[0.2em] text-[#c9a96e] mt-3 block not-italic">
              — Aryan Kumar
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
