"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Send, CheckCircle2, Mail, Instagram, Youtube, Linkedin, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/site-data";

const PROJECT_TYPES = [
  "Short Film", "Music Video", "Documentary", "Photography Session",
  "Commercial / Ad", "Personal Project", "Collaboration", "Other",
];

const SOCIALS = [
  { icon: Mail, label: "Email", href: `mailto:${contact.email}`, value: contact.email },
  { icon: Instagram, label: "Instagram", href: contact.instagram, value: "@drishtiikaar" },
  { icon: Youtube, label: "YouTube", href: contact.youtube, value: "DRISHTIIKAAR" },
  { icon: Linkedin, label: "LinkedIn", href: contact.linkedin, value: "aryannkumar" },
];

// Custom dark-themed dropdown — avoids browser native white select on PC
function DarkSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = PROJECT_TYPES.find(t => t === value) ?? null;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="form-field flex items-center justify-between w-full text-left cursor-none"
        data-cursor="hover"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={selected ? "text-[#f5f0e8]/90" : "text-[#f5f0e8]/25"}>
          {selected ?? "Select project type"}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#f5f0e8]/30 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute top-full left-0 right-0 z-50 mt-1 bg-[#111111] border border-[#f5f0e8]/10 rounded-xl overflow-hidden shadow-2xl"
        >
          {PROJECT_TYPES.map(t => (
            <button
              key={t}
              type="button"
              role="option"
              aria-selected={value === t}
              onClick={() => { onChange(t); setOpen(false); }}
              className={`w-full text-left px-4 py-3 font-body text-sm transition-colors duration-150 cursor-none ${
                value === t
                  ? "bg-[#c9a96e]/15 text-[#c9a96e]"
                  : "text-[#f5f0e8]/70 hover:bg-[#f5f0e8]/05 hover:text-[#f5f0e8]"
              }`}
              data-cursor="hover"
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", projectType: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => { setSent(false); setForm({ name: "", email: "", message: "", projectType: "" }); }, 6000);
    }
  };

  return (
    <section id="contact" className="relative section-pad overflow-hidden bg-[#070707]">
      {/* Dramatic background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/photography/editorial-05.jpg"
          alt="Contact background"
          fill
          sizes="100vw"
          className="object-cover brightness-[0.12] contrast-110 saturate-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/85 to-[#070707]/50" />
      </div>

      <div className="relative z-10 shell">
        {/* Header */}
        <Reveal className="text-center space-y-4 mb-14">
          <span className="eyebrow">Let&apos;s Connect</span>
          <h2 className="font-display font-black text-[#f5f0e8] leading-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
          >
            Every great film starts<br />
            <span className="text-[#c9a96e]">with a conversation.</span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          {/* Social links */}
          <Reveal className="space-y-8">
            <div className="space-y-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 border-b border-[#f5f0e8]/07 pb-4 hover:border-[#c9a96e]/40 transition-all duration-300 cursor-none"
                  data-cursor="hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f5f0e8]/10 text-[#f5f0e8]/40 group-hover:border-[#c9a96e]/40 group-hover:text-[#c9a96e] transition-all duration-300 flex-shrink-0">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[#f5f0e8]/35 group-hover:text-[#c9a96e]/70 transition block">{s.label}</span>
                    <span className="font-body text-[#f5f0e8]/70 group-hover:text-[#f5f0e8] transition text-sm font-medium">{s.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <p className="font-body text-sm leading-7 text-[#f5f0e8]/40 max-w-sm">
              Available for short films, music videos, photography sessions, and creative collaborations.
              Based in Delhi NCR — open to remote projects.
            </p>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.12}>
            <div className="glass rounded-2xl p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center text-center py-14 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e]/25 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-[#c9a96e]" />
                  </div>
                  <div>
                    <h4 className="font-display text-2xl text-[#f5f0e8]">Message Sent</h4>
                    <p className="font-body text-sm text-[#f5f0e8]/45 mt-2 max-w-xs mx-auto leading-relaxed">
                      Aryan will be in touch shortly. Thank you.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#f5f0e8]">Send a Message</h3>
                    <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[#f5f0e8]/30">
                      Collaboration · Commission · Inquiry
                    </p>
                  </div>

                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <label className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[#f5f0e8]/35 block mb-1">Name</label>
                      <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                        className="form-field" placeholder="Your name" data-cursor="hover" />
                    </div>
                    <div>
                      <label className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[#f5f0e8]/35 block mb-1">Email</label>
                      <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="form-field" placeholder="email@example.com" data-cursor="hover" />
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[#f5f0e8]/35 block mb-2">Project Type</label>
                    <DarkSelect value={form.projectType} onChange={v => setForm({...form, projectType: v})} />
                  </div>

                  <div>
                    <label className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[#f5f0e8]/35 block mb-1">Message</label>
                    <textarea required rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      className="form-field resize-none" placeholder="Tell me about your project..." data-cursor="hover" />
                  </div>

                  <button type="submit" className="btn btn-gold w-full justify-center gap-2 group cursor-none" data-cursor="hover">
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
