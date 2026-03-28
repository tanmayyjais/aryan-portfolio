"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { ProjectModal } from "@/components/project-modal";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site-data";
import type { Project } from "@/lib/types";

export function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = useMemo<Project | null>(
    () => projects.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId]
  );

  return (
    <section id="work" className="section-space relative">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="Student films, visual exercises, and worlds still taking shape."
          copy="This section is designed for featured projects with posters, stills, credits, and embedded reels. Right now it uses cinematic placeholder concepts built for an emerging filmmaker's portfolio."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <motion.button
                type="button"
                whileHover={{ y: -6 }}
                onClick={() => setActiveProjectId(project.id)}
                className="panel group h-full w-full overflow-hidden rounded-[2rem] text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/30 text-paper opacity-0 transition duration-500 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex flex-wrap gap-2 text-[0.7rem] uppercase tracking-[0.22em] text-white/70">
                      <span>{project.genre}</span>
                      <span>/</span>
                      <span>{project.year}</span>
                      <span>/</span>
                      <span>{project.role}</span>
                    </div>
                    <h3 className="mt-4 font-display text-4xl text-paper">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-base leading-7 text-white/72">
                    {project.synopsis}
                  </p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProjectId(null)}
      />
    </section>
  );
}
