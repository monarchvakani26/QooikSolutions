"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rafId: number;
    let ringX = 0;
    let ringY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovering = true;
    };
    const onLeave = () => {
      isHovering = false;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <>
      {/* Dot — small, sharp ink dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-ink"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
      {/* Ring — larger trailing circle */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-8 h-8 rounded-full border border-ink/30 transition-transform duration-150"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      />
    </>
  );
}
