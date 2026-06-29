"use client";

import { Clapperboard, Aperture, Scissors, PenTool } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/site-data";

const ICONS: Record<string, React.ReactNode> = {
  direction: <Clapperboard className="h-7 w-7 text-[#c9a96e]" />,
  cinematography: <Aperture className="h-7 w-7 text-[#c9a96e]" />,
  editing: <Scissors className="h-7 w-7 text-[#c9a96e]" />,
  writing: <PenTool className="h-7 w-7 text-[#c9a96e]" />,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-pad bg-[#080808] border-b border-[#f5f0e8]/06">
      <div className="shell space-y-12">
        {/* Header */}
        <Reveal>
          <div className="label-row">
            <div className="space-y-2">
              <span className="eyebrow">Services Offered</span>
              <h2 className="section-title">What I Do</h2>
            </div>
            <p className="font-display italic text-[#f5f0e8]/35 text-lg hidden sm:block">
              Craft · Vision · Execution
            </p>
          </div>
        </Reveal>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.09}>
              <motion.div
                className="group flex flex-col justify-between h-full bg-[#0d0d0d] border border-[#f5f0e8]/06 rounded-2xl p-6 transition-all duration-300 hover:border-[#c9a96e]/30 hover:bg-[#0f0f0f] shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a96e]/05 border border-[#c9a96e]/12 group-hover:bg-[#c9a96e]/10 group-hover:border-[#c9a96e]/25 transition duration-300">
                    {ICONS[service.id] ?? <Clapperboard className="h-7 w-7 text-[#c9a96e]" />}
                  </div>

                  <h3 className="font-display text-2xl text-[#f5f0e8] group-hover:text-[#c9a96e] transition leading-tight">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm leading-7 text-[#f5f0e8]/55">
                    {service.description}
                  </p>
                </div>

                {/* Tools footer */}
                <div className="mt-6 pt-4 border-t border-[#f5f0e8]/06">
                  <span className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-[#f5f0e8]/25 block mb-1.5">
                    Tools &amp; Focus
                  </span>
                  <p className="font-mono text-[0.68rem] text-[#f5f0e8]/45 leading-relaxed">
                    {service.gear}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
