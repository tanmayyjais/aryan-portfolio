"use client";

import { useEffect } from "react";

export function CinematicCursor() {
  useEffect(() => {
    const ring = document.getElementById("cursor-ring");
    const dot = document.getElementById("cursor-dot");
    if (!ring || !dot) return;

    let rafId: number;
    let curX = 0, curY = 0;
    let targetX = 0, targetY = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      // Dot follows exactly
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      // State
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-cursor='hover'], input, textarea, select, label")) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }
    };

    const tick = () => {
      curX = lerp(curX, targetX, 0.12);
      curY = lerp(curY, targetY, 0.12);
      ring.style.left = `${curX}px`;
      ring.style.top = `${curY}px`;
      rafId = requestAnimationFrame(tick);
    };

    const onLeave = () => { ring.style.opacity = "0"; dot.style.opacity = "0"; };
    const onEnter = () => { ring.style.opacity = "1"; dot.style.opacity = "1"; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="cursor-ring" className="hidden md:block" />
      <div id="cursor-dot" className="hidden md:block" />
    </>
  );
}
