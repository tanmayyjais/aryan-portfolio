"use client";

import { Clapperboard, Aperture, Scissors, PenTool, Camera } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  photography: <Camera className="h-5 w-5 currentColor" />,
  direction: <Clapperboard className="h-5 w-5 currentColor" />,
  cinematography: <Aperture className="h-5 w-5 currentColor" />,
  editing: <Scissors className="h-5 w-5 currentColor" />,
  writing: <PenTool className="h-5 w-5 currentColor" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-[#080808] border-b border-[#f5f0e8]/06 relative overflow-hidden">
      <div className="shell space-y-16">
        {/* Header */}
        <Reveal>
          <div className="label-row">
            <div className="space-y-2">
              <span className="eyebrow">Services Offered</span>
              <h2 className="section-title">What I Do</h2>
            </div>
            <p className="font-display italic text-[#f5f0e8]/35 text-lg hidden md:block max-w-sm text-right">
              Craft · Vision · Execution
            </p>
          </div>
        </Reveal>

        {/* Sleek Vertical List */}
        <div className="flex flex-col border-t border-[#f5f0e8]/06">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08} className="w-full">
              <div className="group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-12 border-b border-[#f5f0e8]/06 hover:bg-[#c9a96e]/[0.02] transition-colors duration-500 cursor-default px-4 lg:px-8 -mx-4 lg:-mx-8">
                
                {/* Left: Icon & Title */}
                <div className="flex items-center gap-6 lg:w-4/12 mb-6 lg:mb-0">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#c9a96e]/05 border border-[#c9a96e]/20 group-hover:bg-[#c9a96e] group-hover:border-[#c9a96e] transition-all duration-500 text-[#c9a96e] group-hover:text-[#080808]">
                    {ICONS[service.id] ?? <Clapperboard className="h-5 w-5 currentColor" />}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[#f5f0e8] group-hover:text-[#c9a96e] transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Middle: Description */}
                <div className="lg:w-5/12 mb-6 lg:mb-0 lg:pr-8">
                  <p className="font-body text-sm md:text-base leading-relaxed text-[#f5f0e8]/55 group-hover:text-[#f5f0e8]/75 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Right: Tools / Gear */}
                <div className="lg:w-3/12 lg:text-right flex flex-col items-start lg:items-end justify-center">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#c9a96e]/60 mb-2">
                    Tools & Focus
                  </span>
                  <p className="font-mono text-[0.7rem] leading-relaxed text-[#f5f0e8]/40 group-hover:text-[#f5f0e8]/60 transition-colors duration-500">
                    {service.gear}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
