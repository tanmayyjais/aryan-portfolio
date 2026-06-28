import { ArrowUpRight, Download, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section id="contact" className="section-space pb-20">
      <div className="container-shell">
        <Reveal className="panel relative overflow-hidden rounded-[2rem] p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,133,87,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(163,86,43,0.18),transparent_24%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-5">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title max-w-xl">
                Let&apos;s build something cinematic.
              </h2>
              <p className="max-w-lg text-base leading-8 text-white/72">
                Open to collaborations, student productions, cinematography-led work,
                and image-driven creative experiments.
              </p>
            </div>

            <div className="grid gap-3 text-sm uppercase tracking-[0.18em] text-white/78">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center justify-between gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  Email
                </span>
                <span>{contact.email}</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center justify-between gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  Phone
                </span>
                <span>{contact.phone}</span>
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </span>
                <span>@drishtiikaar</span>
              </a>
              <a
                href={contact.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </span>
                <span>DRYSHTIKAAR</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </span>
                <span>aryannkumar</span>
              </a>
              <a
                href={contact.resume}
                className="flex items-center justify-between gap-3 rounded-full bg-paper px-5 py-4 text-black transition hover:scale-[1.01]"
              >
                <span className="flex items-center gap-3">
                  <Download className="h-4 w-4" />
                  Resume
                </span>
                <span className="inline-flex items-center gap-2">
                  Download
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
