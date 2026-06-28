"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorSpotlight() {
  const [cursorState, setCursorState] = useState<"default" | "play" | "view" | "link" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery follow-effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      // Offset cursor by half of its default dimensions to keep centered
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
      
      if (!isVisible) setIsVisible(true);

      // Inspect target elements under pointer to adapt cursor state dynamically
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactable = target.closest("[data-cursor]");
      if (interactable) {
        const type = interactable.getAttribute("data-cursor") as "default" | "play" | "view" | "link" | "hidden";
        setCursorState(type || "link");
      } else {
        // Fallback for standard buttons and links
        const isButtonOrLink = target.closest("a, button, [role='button']");
        if (isButtonOrLink) {
          setCursorState("link");
        } else {
          setCursorState("default");
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorState("hidden");
    };

    window.addEventListener("pointermove", handleMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  // Dimensions & styling based on cursor state
  const getCursorProps = () => {
    switch (cursorState) {
      case "play":
        return {
          width: 80,
          height: 80,
          backgroundColor: "rgba(181, 133, 87, 0.12)",
          borderColor: "rgba(181, 133, 87, 0.8)",
          text: "PLAY",
        };
      case "view":
        return {
          width: 80,
          height: 80,
          backgroundColor: "rgba(236, 233, 226, 0.08)",
          borderColor: "rgba(236, 233, 226, 0.7)",
          text: "VIEW",
        };
      case "link":
        return {
          width: 48,
          height: 48,
          backgroundColor: "rgba(181, 133, 87, 0.08)",
          borderColor: "rgba(181, 133, 87, 0.5)",
          text: "",
        };
      case "hidden":
        return {
          width: 0,
          height: 0,
          backgroundColor: "transparent",
          borderColor: "transparent",
          text: "",
        };
      default:
        return {
          width: 24,
          height: 24,
          backgroundColor: "transparent",
          borderColor: "rgba(236, 233, 226, 0.25)",
          text: "",
        };
    }
  };

  const cursorProps = getCursorProps();

  return (
    <>
      {/* Background Mouse Follow Spotlight (Warm lighting) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{
          background: `radial-gradient(400px circle at ${mouseX.get() + 6}px ${mouseY.get() + 6}px, rgba(181, 133, 87, 0.045), transparent 70%)`,
        }}
      />

      {/* Interactive Camera Lens Cursor */}
      {isVisible && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[9999] hidden items-center justify-center rounded-full border border-dashed text-center md:flex"
          style={{
            x: cursorX,
            y: cursorY,
            width: cursorProps.width,
            height: cursorProps.height,
            backgroundColor: cursorProps.backgroundColor,
            borderColor: cursorProps.borderColor,
            // Offset positioning depending on radius to remain centered on crosshair
            marginLeft: -cursorProps.width / 2 + 6,
            marginTop: -cursorProps.height / 2 + 6,
          }}
          animate={{
            scale: cursorState === "hidden" ? 0 : 1,
            rotate: cursorState === "play" || cursorState === "view" ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        >
          {/* Central crosshair pin */}
          <div className="absolute h-[3px] w-[3px] rounded-full bg-[#b58557]" />

          {/* Camera Lens brackets or ticks */}
          {(cursorState === "play" || cursorState === "view" || cursorState === "link") && (
            <>
              {/* Outer lens focus dashes */}
              <div className="absolute inset-1 rounded-full border border-dashed border-[#b58557]/20" />
              <div className="absolute left-1/2 top-0.5 h-1.5 w-[1px] -translate-x-1/2 bg-[#b58557]/45" />
              <div className="absolute left-1/2 bottom-0.5 h-1.5 w-[1px] -translate-x-1/2 bg-[#b58557]/45" />
              <div className="absolute top-1/2 left-0.5 w-1.5 h-[1px] -translate-y-1/2 bg-[#b58557]/45" />
              <div className="absolute top-1/2 right-0.5 w-1.5 h-[1px] -translate-y-1/2 bg-[#b58557]/45" />
            </>
          )}

          {/* Cursor State Badge Text */}
          {cursorProps.text && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-display text-[0.58rem] font-bold tracking-[0.25em] text-[#ece9e2]"
              style={{ rotate: -45 }} // Re-orient against cursor rotating
            >
              {cursorProps.text}
            </motion.span>
          )}
        </motion.div>
      )}
    </>
  );
}
