import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { featuredFilm } from "@/lib/site-data";

export function FeaturedFilmSection() {
  return (
    <section id="focal-void" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Featured Film"
          title="Focal Void anchors the portfolio with a darker, more authored visual identity."
          copy={featuredFilm.description}
        />

        <div className="grid gap-8 xl:grid-cols-[0.75fr_1.25fr]">
          <Reveal className="space-y-5">
            <div className="panel overflow-hidden rounded-[2rem] border-white/10 p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={featuredFilm.poster.src}
                  alt={featuredFilm.poster.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="panel rounded-[1.5rem] p-5">
                <p className="eyebrow">Year</p>
                <p className="mt-3 text-lg text-paper">{featuredFilm.year}</p>
              </div>
              <div className="panel rounded-[1.5rem] p-5">
                <p className="eyebrow">Runtime</p>
                <p className="mt-3 text-lg text-paper">{featuredFilm.runtime}</p>
              </div>
              <div className="panel rounded-[1.5rem] p-5">
                <p className="eyebrow">Role</p>
                <p className="mt-3 text-lg text-paper">{featuredFilm.role}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="space-y-6">
            <div className="panel rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">Logline</p>
              <p className="mt-4 font-display text-4xl leading-tight text-paper md:text-5xl">
                {featuredFilm.logline}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {featuredFilm.stills.map((still) => (
                <div
                  key={still.src}
                  className="panel overflow-hidden rounded-[1.5rem] border-white/10"
                >
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={still.src}
                      alt={still.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-6 text-white/66">{still.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={featuredFilm.embedUrl}
                  title={featuredFilm.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="panel rounded-[2rem] p-6 md:p-8">
              <p className="eyebrow">Credits</p>
              <div className="mt-5 grid gap-3 text-sm uppercase tracking-[0.14em] text-white/70 sm:grid-cols-2">
                {featuredFilm.credits.map((credit) => (
                  <p key={credit}>{credit}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
