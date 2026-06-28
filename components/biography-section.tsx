import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { bio, filmography, pressOrExperience } from "@/lib/site-data";

export function BiographySection() {
  return (
    <section id="about" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="About"
          title="A student of cinema shaped by minimal setups, strong atmosphere, and visual discipline."
          copy="The resume becomes part of the storytelling here: not a separate corporate block, but a credibility layer that supports the auteur profile."
        />

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {bio.map((block, index) => (
              <Reveal
                key={block.title}
                delay={index * 0.08}
                className="panel rounded-[2rem] p-6 md:p-8"
              >
                <p className="eyebrow">{block.title}</p>
                <p className="mt-4 text-lg leading-8 text-white/72">{block.copy}</p>
              </Reveal>
            ))}

            <Reveal className="panel rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">Selected Filmography</p>
              <div className="mt-5 space-y-4">
                {filmography.map((entry) => (
                  <div
                    key={entry.title}
                    className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="font-display text-3xl text-paper">{entry.title}</p>
                      <span className="text-xs uppercase tracking-[0.22em] text-white/45">
                        {entry.year}
                      </span>
                    </div>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b58557]">
                      {entry.format}
                    </p>
                    <p className="mt-2 leading-7 text-white/66">{entry.note}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {pressOrExperience.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="panel rounded-[2rem] p-6"
              >
                <p className="eyebrow">{item.eyebrow}</p>
                <p className="mt-4 font-display text-3xl text-paper">{item.title}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#b58557]">
                  {item.meta}
                </p>
                <p className="mt-4 leading-7 text-white/70">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
