import { socialLinks } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section id="contact" className="section-space pt-0">
      <div className="container-shell border-t border-black/10 pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <p className="section-kicker">Contact</p>
            <h2 className="font-display text-[3rem] leading-[0.96] tracking-[-0.04em] text-black md:text-[4rem]">
              Let&apos;s create stories worth remembering.
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-link"
              >
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-black/42">
                  {link.label}
                </span>
                <span className="mt-2 block font-display text-[1.8rem] leading-none text-black">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
