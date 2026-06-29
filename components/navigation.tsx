"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#featured-work" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Simple scrollspy
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
    >
      <div 
        className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full border transition-all duration-500 ${
          scrolled 
            ? "bg-black/60 backdrop-blur-md border-[#f5f0e8]/10 shadow-lg shadow-black/20" 
            : "bg-transparent border-transparent"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = active === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="relative px-4 py-2 rounded-full text-[0.65rem] sm:text-xs font-mono uppercase tracking-[0.2em] transition-colors overflow-hidden group"
            >
              <span className={`relative z-10 transition-colors duration-300 ${
                isActive ? "text-[#0a0a0a]" : "text-[#f5f0e8]/70 group-hover:text-[#f5f0e8]"
              }`}>
                {link.name}
              </span>
              
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-[#c9a96e] rounded-full z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
