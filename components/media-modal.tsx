"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type MediaModalProps = {
  children: React.ReactNode;
  open: boolean;
  title: string;
  meta?: string;
  onClose: () => void;
};

export function MediaModal({
  children,
  open,
  title,
  meta,
  onClose,
}: MediaModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[120] bg-[#f2ede4]/96 px-4 py-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="container-shell relative max-h-[calc(100vh-2rem)] overflow-auto rounded-[2rem] border border-black/10 bg-[#faf6ef] p-4 md:p-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-4xl leading-none text-black">
                  {title}
                </h3>
                {meta ? (
                  <p className="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-black/45">
                    {meta}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition hover:border-black/25"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
