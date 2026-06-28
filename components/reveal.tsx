"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "wipe";
} & MotionProps;

const VARIANTS = {
  fade: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  wipe: {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { clipPath: "inset(0 0% 0 0)", opacity: 1 },
  },
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade",
  ...props
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={VARIANTS[variant]}
      transition={{
        duration: 0.75,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
