import { Play } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ShowreelSection() {
  return (
    <section id="showreel" className="section-space">
      <div className="container-shell space-y-10">
        <SectionHeading
          eyebrow="Showreel"
          title="A future reel deserves a frame that already feels theatrical."
          copy="Use this section for a Vimeo or YouTube showreel later. Until then, it acts as a premium placeholder with the right hierarchy, scale, and atmosphere."
        />

        <Reveal className="panel relative overflow-hidden rounded-[2rem] border-white/10 p-4 md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,133,87,0.22),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(163,86,43,0.18),transparent_22%)]" />
          <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/55 to-black/75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 text-paper backdrop-blur animate-pulseSlow"
              >
                <Play className="ml-1 h-8 w-8 fill-current" />
              </a>
              <div className="space-y-3">
                <p className="eyebrow">Placeholder Reel</p>
                <h3 className="font-display text-5xl text-paper md:text-6xl">
                  The visual rhythm is coming into focus.
                </h3>
                <p className="mx-auto max-w-2xl text-white/70">
                  Swap this background still and link with Aryan&apos;s final showreel
                  URL when ready. The section already supports a dramatic reveal and
                  strong first impression.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
