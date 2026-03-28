import {
  Camera,
  Clapperboard,
  Film,
  Lightbulb,
  MonitorPlay,
  PanelsTopLeft
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { craftPillars, toolset } from "@/lib/site-data";

const icons = [Camera, Lightbulb, PanelsTopLeft, Film, MonitorPlay, Clapperboard];

export function SkillsSection() {
  return (
    <section id="craft" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Craft & Tools"
          title="Built around image-making, not checklists."
          copy="Instead of a flat skills list, the craft section frames Aryan's visual abilities as evolving cinematic instincts supported by modern post-production tools."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {craftPillars.map((pillar, index) => {
              const Icon = icons[index];

              return (
                <Reveal key={pillar} delay={index * 0.04}>
                  <div className="panel h-full rounded-[1.75rem] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#b58557]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-6 font-display text-3xl text-paper">{pillar}</p>
                    <p className="mt-3 text-sm leading-7 text-white/66">
                      Placeholder supporting copy that can later describe experience,
                      style, or specific strengths in this area.
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="panel rounded-[2rem] p-6 md:p-8">
            <p className="eyebrow">Software & Workflow</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {toolset.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm text-white/78"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="font-display text-3xl text-paper">Now Screening</p>
              <p className="mt-3 leading-7 text-white/68">
                Currently developing a sharper eye for practical lighting, emotional
                composition, and the relationship between movement and memory.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
