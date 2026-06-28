"use client";

import { Clapperboard, Aperture, Scissors, PenTool, Wrench } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  // Map icons to services
  const getIcon = (id: string) => {
    switch (id) {
      case "direction":
        return <Clapperboard className="h-7 w-7 text-[#b58557]" />;
      case "cinematography":
        return <Aperture className="h-7 w-7 text-[#b58557]" />;
      case "editing":
        return <Scissors className="h-7 w-7 text-[#b58557]" />;
      case "writing":
        return <PenTool className="h-7 w-7 text-[#b58557]" />;
      default:
        return <Wrench className="h-7 w-7 text-[#b58557]" />;
    }
  };

  return (
    <section id="services" className="section-space bg-[#090909] border-b border-[#ece9e2]/8">
      <div className="container-shell space-y-12">
        <div className="section-label-row">
          <div className="space-y-1">
            <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557] font-semibold">
              Services Offered
            </span>
            <h2 className="font-display text-4xl text-[#ece9e2] tracking-tight">
              Skillset & Craft
            </h2>
          </div>
          <p className="section-note">Slide 02 • Core Capabilities</p>
        </div>

        {/* 4 Grid Columns matching sketches */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.08} className="h-full">
              <div 
                className="group flex flex-col justify-between h-full bg-[#0d0d0d] border border-[#ece9e2]/5 rounded-2xl p-6 transition-all duration-300 hover:border-[#b58557]/30 hover:bg-[#0f0f0f] shadow-lg cursor-none"
                data-cursor="link"
              >
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.02] border border-[#ece9e2]/5 group-hover:bg-[#b58557]/10 group-hover:border-[#b58557]/20 transition duration-300">
                    {getIcon(service.id)}
                  </div>
                  
                  <h3 className="font-display text-2xl text-[#ece9e2] group-hover:text-[#b58557] transition">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-[#ece9e2]/60">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#ece9e2]/5 space-y-1.5">
                  <span className="text-[0.58rem] uppercase tracking-[0.2em] text-[#ece9e2]/30 font-semibold block">
                    Focus / Tooling
                  </span>
                  <p className="text-[0.72rem] font-mono text-[#ece9e2]/50 leading-relaxed">
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
