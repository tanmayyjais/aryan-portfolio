import { Film, PenTool, Scissors, Video } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

const serviceIcons = [Film, Video, Scissors, PenTool];

export function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Roles Offered"
          title="The skill layer stays present, but the language remains cinematic."
          copy="Instead of generic software lists and bars, this section frames Aryan as a young collaborator with four clear creative lanes."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="panel h-full rounded-[2rem] p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#b58557]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 font-display text-3xl text-paper">
                    {service.title}
                  </p>
                  <p className="mt-4 leading-7 text-white/68">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
