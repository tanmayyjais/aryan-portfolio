import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section id="about" className="section-space relative">
      <div className="container-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <div className="panel relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,133,87,0.24),transparent_38%)]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=1000&q=80"
                alt="Portrait placeholder for Aryan Kumar"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>

        <div className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="Learning cinema by studying the poetry of light."
            copy="Aryan Kumar is a 1st-year BSc Cinematography student at AAFT Delhi, building a visual language rooted in mood, atmosphere, and emotional clarity. This portfolio is a placeholder-ready foundation for future films, stills, and experiments."
          />

          <Reveal className="grid gap-6 md:grid-cols-2">
            <div className="panel rounded-[1.75rem] p-6">
              <p className="eyebrow">Artistic Statement</p>
              <p className="mt-4 text-base leading-8 text-white/72">
                I am drawn to images that feel lived in, where light carries memory
                and the frame becomes a way of listening. My goal is to tell stories
                that feel intimate, cinematic, and honest.
              </p>
            </div>
            <div className="panel rounded-[1.75rem] p-6">
              <p className="eyebrow">What This Site Holds</p>
              <p className="mt-4 text-base leading-8 text-white/72">
                Student films, visual studies, on-set stills, showreels, and evolving
                craft. Every section is structured so text, images, and film links can
                be replaced easily as the body of work grows.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {journey.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.08}
                className="panel rounded-[1.5rem] p-5 md:p-6"
              >
                <div className="grid gap-3 md:grid-cols-[100px_1fr]">
                  <p className="font-display text-3xl text-[#b58557]">{item.year}</p>
                  <div>
                    <p className="text-lg font-medium text-paper">{item.title}</p>
                    <p className="mt-2 leading-7 text-white/70">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
