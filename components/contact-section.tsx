"use client";

import { Send, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { socialLinks } from "@/lib/site-data";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email inquiry
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-space bg-[#060606] pt-12 md:pt-16 pb-12">
      <div className="container-shell border-t border-[#ece9e2]/8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Typographic Title and Social Handles */}
          <div className="space-y-8">
            <Reveal className="space-y-4">
              <span className="text-[0.62rem] uppercase tracking-[0.25em] text-[#b58557] font-semibold block">
                Get In Touch
              </span>
              <h2 className="font-display text-[2.6rem] leading-[0.98] tracking-[-0.035em] text-[#ece9e2] md:text-[3.8rem] lg:text-[4.5rem]">
                Let&apos;s create stories worth remembering.
              </h2>
            </Reveal>

            {/* Social Grid */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              {socialLinks.map((link) => (
                <Reveal key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="contact-link group block w-full cursor-none"
                    data-cursor="link"
                  >
                    <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#ece9e2]/40 group-hover:text-[#b58557] transition">
                      {link.label}
                    </span>
                    <span className="mt-2 flex items-center justify-between font-display text-[1.45rem] leading-none text-[#ece9e2] group-hover:text-white transition">
                      {link.value}
                      <ArrowUpRight className="h-4 w-4 text-[#ece9e2]/20 transition duration-300 group-hover:text-[#b58557] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Inquiry Form */}
          <Reveal delay={0.15}>
            <div className="bg-[#0b0b0b] border border-[#ece9e2]/5 rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden">
              {/* Form State Handler */}
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="h-16 w-16 rounded-full bg-[#b58557]/10 flex items-center justify-center border border-[#b58557]/20">
                    <CheckCircle2 className="h-8 w-8 text-[#b58557] animate-bounce" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-2xl text-[#ece9e2]">Transmission Received</h4>
                    <p className="text-xs text-[#ece9e2]/50 max-w-xs mx-auto leading-relaxed">
                      Thank you. Your message has been sent to Aryan. He will connect with you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl text-[#ece9e2]">Direct Inquiry</h3>
                    <p className="text-xs text-[#ece9e2]/45 font-mono">
                      COLLABORATION • PROJECT COMMISSION • REEL FEEDBACK
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Name Input */}
                    <div className="relative border-b border-[#ece9e2]/10 py-1.5 focus-within:border-[#b58557] transition duration-300">
                      <label className="text-[0.62rem] uppercase tracking-[0.2em] text-[#ece9e2]/35 block mb-1 font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent text-sm text-[#ece9e2] placeholder-[#ece9e2]/20 focus:outline-none py-1 cursor-none"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative border-b border-[#ece9e2]/10 py-1.5 focus-within:border-[#b58557] transition duration-300">
                      <label className="text-[0.62rem] uppercase tracking-[0.2em] text-[#ece9e2]/35 block mb-1 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent text-sm text-[#ece9e2] placeholder-[#ece9e2]/20 focus:outline-none py-1 cursor-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="relative border-b border-[#ece9e2]/10 py-1.5 focus-within:border-[#b58557] transition duration-300">
                      <label className="text-[0.62rem] uppercase tracking-[0.2em] text-[#ece9e2]/35 block mb-1 font-semibold">
                        Inquiry Details
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent text-sm text-[#ece9e2] placeholder-[#ece9e2]/20 focus:outline-none py-1 resize-none cursor-none"
                        placeholder="Describe your film project, commissions or timeline..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full minimal-button minimal-button-solid cursor-none justify-center gap-2 group"
                    data-cursor="link"
                  >
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5 transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
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
