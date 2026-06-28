import { Instagram, Youtube, Mail } from "lucide-react";
import { contact } from "@/lib/site-data";

const HOLES = Array.from({ length: 40 });

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#f5f0e8]/05">
      {/* Filmstrip bar */}
      <div className="overflow-hidden border-b border-[#f5f0e8]/04">
        <div className="flex items-center gap-2 py-2 px-4">
          {HOLES.map((_, i) => (
            <div key={i} className="filmstrip-hole flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="shell py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-display text-lg tracking-[0.08em] text-[#f5f0e8]/80">
            ARYAN KUMAR
          </p>
          <p className="font-mono text-[0.6rem] tracking-[0.22em] uppercase text-[#f5f0e8]/30">
            © {new Date().getFullYear()} · Cinematographer · Student of Cinema
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href={contact.instagram} target="_blank" rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5f0e8]/08 text-[#f5f0e8]/40 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-none" data-cursor="hover">
            <Instagram className="h-4 w-4" />
          </a>
          <a href={contact.youtube} target="_blank" rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5f0e8]/08 text-[#f5f0e8]/40 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-none" data-cursor="hover">
            <Youtube className="h-4 w-4" />
          </a>
          <a href={`mailto:${contact.email}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f5f0e8]/08 text-[#f5f0e8]/40 hover:border-[#c9a96e]/40 hover:text-[#c9a96e] transition-all duration-300 cursor-none" data-cursor="hover">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Bottom filmstrip bar */}
      <div className="overflow-hidden border-t border-[#f5f0e8]/04">
        <div className="flex items-center gap-2 py-2 px-4">
          {HOLES.map((_, i) => (
            <div key={i} className="filmstrip-hole flex-shrink-0" />
          ))}
        </div>
      </div>
    </footer>
  );
}
