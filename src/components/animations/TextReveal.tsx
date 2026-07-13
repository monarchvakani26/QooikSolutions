"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  staggerDelay = 0.05,
  as: Tag = "h2",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: "100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div ref={ref} className="contents" aria-label={text}>
      <Tag
        className={cn(className)}
        aria-hidden="true"
      >
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden"
            >
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
              {i < words.length - 1 && "\u00A0"}
            </span>
          ))}
        </motion.span>
      </Tag>
    </div>
  );
}
