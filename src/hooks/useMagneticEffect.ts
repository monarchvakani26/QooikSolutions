"use client";

import { useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

export function useMagneticEffect(strength: number = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (shouldReduceMotion || !ref.current) return;
      const { left, top, width, height } =
        ref.current.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      ref.current.style.transition = "transform 0.1s ease";
    },
    [strength, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
    ref.current.style.transition = "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
