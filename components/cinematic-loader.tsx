"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CinematicLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#040404]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center gap-6 text-center">
            <motion.div
              className="h-24 w-24 rounded-full border border-white/15"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            >
              <div className="absolute inset-3 rounded-full border border-white/10" />
              <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-[#f4eadb] via-[#b58557] to-[#7a3f22]" />
            </motion.div>
            <div className="space-y-2">
              <p className="eyebrow">Now Screening</p>
              <p className="font-display text-4xl tracking-[0.15em] text-paper">
                ARYAN KUMAR
              </p>
            </div>
            <div className="h-px w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-transparent via-[#b58557] to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
