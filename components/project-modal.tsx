"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Clapperboard, X } from "lucide-react";
import Image from "next/image";

import type { Project } from "@/lib/types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[110] overflow-y-auto bg-black/85 px-4 py-6 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="container-shell panel relative rounded-[2rem] border-white/12 p-4 md:p-6"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 transition hover:border-white/30"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="eyebrow">Featured Project</p>
                    <h3 className="mt-3 font-display text-5xl text-paper">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="panel rounded-[1.25rem] p-4">
                    <p className="eyebrow">Genre</p>
                    <p className="mt-3 text-lg text-paper">{project.genre}</p>
                  </div>
                  <div className="panel rounded-[1.25rem] p-4">
                    <p className="eyebrow">Year</p>
                    <p className="mt-3 text-lg text-paper">{project.year}</p>
                  </div>
                  <div className="panel rounded-[1.25rem] p-4">
                    <p className="eyebrow">Role</p>
                    <p className="mt-3 text-lg text-paper">{project.role}</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {project.gallery.map((image, index) => (
                    <div
                      key={image}
                      className={`relative overflow-hidden rounded-[1.25rem] ${
                        index === 0 ? "md:col-span-2" : ""
                      }`}
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={image}
                          alt={`${project.title} still ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <p className="eyebrow">Project Overview</p>
                  <p className="mt-4 text-base leading-8 text-white/74">
                    {project.description}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                  <div className="aspect-video">
                    <iframe
                      className="h-full w-full"
                      src={project.videoUrl}
                      title={`${project.title} showreel`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="panel rounded-[1.5rem] p-5">
                    <p className="eyebrow">Behind the Scenes</p>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                      {project.btsNotes.map((note) => (
                        <p key={note}>{note}</p>
                      ))}
                    </div>
                  </div>
                  <div className="panel rounded-[1.5rem] p-5">
                    <p className="eyebrow">Credits</p>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-white/72">
                      {project.credits.map((credit) => (
                        <p key={credit}>{credit}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#b58557]/12 to-transparent p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="eyebrow">Future Upgrade</p>
                      <p className="mt-3 max-w-md text-white/72">
                        Replace this placeholder video with a Vimeo reel, festival
                        cut, or embedded YouTube trailer when the project is ready.
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15">
                      <Clapperboard className="h-5 w-5" />
                    </div>
                  </div>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#f4eadb]"
                  >
                    Start a conversation
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
