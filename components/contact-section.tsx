import { ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="section-space pb-20">
      <div className="container-shell">
        <Reveal className="panel relative overflow-hidden rounded-[2rem] p-6 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,133,87,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(163,86,43,0.16),transparent_24%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="space-y-5">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title max-w-xl">
                Let&apos;s create stories worth remembering.
              </h2>
              <p className="max-w-lg text-base leading-8 text-white/72">
                Open for collaborations, student productions, creative experiments,
                and future opportunities in cinematography and filmmaking.
              </p>

              <div className="space-y-3 pt-3 text-sm uppercase tracking-[0.18em] text-white/78">
                <a
                  href="mailto:aryan@example.com"
                  className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" />
                  aryan@example.com
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram / @aryankumar
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-4 transition hover:border-white/25 hover:bg-white/5"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn / Aryan Kumar
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 md:p-8">
              <p className="eyebrow">Message</p>
              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-paper outline-none placeholder:text-white/35"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-paper outline-none placeholder:text-white/35"
                />
                <textarea
                  rows={5}
                  placeholder="Tell me about your film, project, or collaboration idea..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-paper outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black"
                >
                  Send Inquiry
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-4 text-sm leading-6 text-white/52">
                Connect this form to Formspree, Basin, or a custom email workflow later
                if you want real submissions without backend maintenance.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
