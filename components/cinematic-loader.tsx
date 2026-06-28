"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicLoader() {
  const [count, setCount] = useState(5);
  const [isClapped, setIsClapped] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (count > 1) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      // Countdown finished, activate clapper clap
      const clapTimer = setTimeout(() => {
        setIsClapped(true);
      }, 500);

      const exitTimer = setTimeout(() => {
        setVisible(false);
      }, 1100);

      return () => {
        clearTimeout(clapTimer);
        clearTimeout(exitTimer);
      };
    }
  }, [count]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#070707] text-[#ece9e2] select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Dust & Light Flicker Effect */}
          <div className="absolute inset-0 pointer-events-none bg-black/10 opacity-30 animate-pulse z-10" />

          <div className="relative flex flex-col items-center justify-center w-full max-w-md p-6 text-center z-20">
            {!isClapped ? (
              // Film Academy Projector Countdown Leader
              <motion.div 
                key="countdown-leader"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative flex items-center justify-center w-64 h-64 rounded-full border-4 border-dashed border-[#ece9e2]/15"
              >
                {/* Concentric circles */}
                <div className="absolute w-56 h-56 rounded-full border border-[#ece9e2]/10" />
                <div className="absolute w-44 h-44 rounded-full border-2 border-[#ece9e2]/25" />
                <div className="absolute w-12 h-12 rounded-full border border-[#ece9e2]/10" />

                {/* Scope crosshairs */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-[#ece9e2]/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-[1px] bg-[#ece9e2]/10" />
                </div>

                {/* Radial Sweeper */}
                <motion.div
                  className="absolute w-full h-full rounded-full border-t border-[#b58557] origin-center z-30"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                />

                {/* Rotating Film Reels Backdrop */}
                <motion.div
                  className="absolute inset-0 border border-t-[#ece9e2]/20 border-r-[#ece9e2]/5 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />

                {/* Changing Numbers */}
                <AnimatePresence mode="wait">
                  <motion.span
                    key={count}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.3 }}
                    transition={{ duration: 0.15 }}
                    className="font-display text-8xl font-bold tracking-tight text-[#ece9e2]"
                  >
                    {count}
                  </motion.span>
                </AnimatePresence>

                <div className="absolute -bottom-16 text-center space-y-1">
                  <span className="text-[0.62rem] uppercase tracking-[0.3em] text-[#b58557]/80 font-semibold">
                    System Startup
                  </span>
                  <p className="text-xs font-display italic text-[#ece9e2]/40">
                    Establishing Frame Rate
                  </p>
                </div>
              </motion.div>
            ) : (
              // Clapperboard Clap Event
              <motion.div
                key="clapper"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-6"
              >
                {/* Visual Clapperboard Icon */}
                <div className="relative w-32 h-32 flex flex-col items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full fill-none stroke-[#ece9e2]"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Clapperboard Body */}
                    <rect x="15" y="45" width="70" height="40" rx="3" />
                    <line x1="15" y1="58" x2="85" y2="58" />
                    
                    {/* Diagonal lines inside body */}
                    <line x1="30" y1="45" x2="40" y2="58" />
                    <line x1="50" y1="45" x2="60" y2="58" />
                    <line x1="70" y1="45" x2="80" y2="58" />

                    {/* Hinged Top Board (Rotates for the clap) */}
                    <motion.g
                      style={{ originX: "15px", originY: "45px" }}
                      initial={{ rotate: -25 }}
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.16, ease: "easeIn" }}
                    >
                      <polygon points="15,33 85,33 80,45 15,45" />
                      {/* Stripes on hinged board */}
                      <line x1="28" y1="33" x2="38" y2="45" />
                      <line x1="48" y1="33" x2="58" y2="45" />
                      <line x1="68" y1="33" x2="78" y2="45" />
                    </motion.g>
                  </svg>
                </div>

                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.35em] text-[#b58557] font-semibold">
                    SCENE 01 • TAKE 01
                  </p>
                  <h3 className="font-display text-3xl tracking-[0.1em] text-[#ece9e2]">
                    ARYAN KUMAR
                  </h3>
                  <p className="text-[0.62rem] uppercase tracking-[0.25em] text-[#ece9e2]/40">
                    PORTFOLIO REDESIGN
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
