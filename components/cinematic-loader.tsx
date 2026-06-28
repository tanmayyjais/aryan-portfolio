"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicLoader() {
  const [count, setCount] = useState(5);
  const [clapped, setClapped] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (count > 1) {
      const t = setTimeout(() => setCount(c => c - 1), 420);
      return () => clearTimeout(t);
    }
    const clap = setTimeout(() => setClapped(true), 420);
    const exit = setTimeout(() => setVisible(false), 950);
    return () => { clearTimeout(clap); clearTimeout(exit); };
  }, [count]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070707] select-none overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
        >
          {/* Scanlines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)" }}
          />

          {!clapped ? (
            <motion.div
              key="counter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-10"
            >
              {/* Circular leader */}
              <div className="relative w-52 h-52 flex items-center justify-center">
                {/* Outer ring spinning */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-[#c9a96e]/20"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                />
                {/* Inner static ring */}
                <div className="absolute inset-6 rounded-full border border-[#f5f0e8]/10" />
                {/* Crosshairs */}
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full h-[1px] bg-[#f5f0e8]/08" />
                </div>
                <div className="absolute inset-0 flex justify-center">
                  <div className="h-full w-[1px] bg-[#f5f0e8]/08" />
                </div>
                {/* Sweeper */}
                <motion.div
                  className="absolute inset-0 rounded-full border-t-2 border-[#c9a96e]"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.42, ease: "linear" }}
                />
                {/* Number */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={count}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.4 }}
                    transition={{ duration: 0.12 }}
                    className="font-display text-8xl font-bold text-[#f5f0e8] z-10"
                  >
                    {count}
                  </motion.span>
                </AnimatePresence>
              </div>

              <div className="text-center space-y-2">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.38em] text-[#c9a96e]/80">
                  Preparing Projection
                </p>
                <p className="font-display text-lg tracking-[0.15em] text-[#f5f0e8]/50 italic">
                  Aryan Kumar
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="clapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-6"
            >
              <svg viewBox="0 0 120 100" className="w-36 h-28 fill-none stroke-[#c9a96e]" strokeWidth="3" strokeLinecap="round">
                <rect x="10" y="48" width="100" height="45" rx="4" />
                <line x1="10" y1="65" x2="110" y2="65" />
                <line x1="30" y1="48" x2="42" y2="65" />
                <line x1="58" y1="48" x2="70" y2="65" />
                <line x1="85" y1="48" x2="97" y2="65" />
                <motion.g
                  initial={{ rotate: -28 }} animate={{ rotate: 0 }}
                  transition={{ duration: 0.13, ease: "easeIn" }}
                  style={{ originX: "10px", originY: "48px" }}
                >
                  <polygon points="10,35 110,35 105,48 10,48" />
                  <line x1="30" y1="35" x2="40" y2="48" />
                  <line x1="58" y1="35" x2="68" y2="48" />
                  <line x1="85" y1="35" x2="95" y2="48" />
                </motion.g>
              </svg>
              <div className="text-center space-y-1">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[#c9a96e]">Scene 01 · Take 01</p>
                <h2 className="font-display text-3xl tracking-[0.12em] text-[#f5f0e8]">ARYAN KUMAR</h2>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
