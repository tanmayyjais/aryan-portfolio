import { Reveal } from "@/components/reveal";
import { about } from "@/lib/site-data";

export function BiographySection() {
  return (
    <section id="about" className="section-space border-t border-black/8">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="space-y-6">
          <p className="section-kicker">About</p>
          <p className="max-w-2xl font-display text-[2.6rem] leading-[1.02] tracking-[-0.035em] text-black md:text-[3.5rem]">
            {about.statement}
          </p>
          <p className="max-w-2xl text-base leading-8 text-black/60">
            {about.education}
          </p>
        </Reveal>

        <Reveal className="space-y-5">
          {about.experience.map((item) => (
            <div key={item.title} className="border-t border-black/10 pt-4 first:border-t-0 first:pt-0">
              <p className="font-display text-[2rem] leading-none text-black">
                {item.title}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-black/45">
                {item.meta}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
