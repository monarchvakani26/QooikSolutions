"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

// Portfolio screenshot card for the collage
function CollageCard({
  src,
  alt,
  rotate,
  zIndex,
  offsetX,
  offsetY,
  delay = 0,
  floatDuration = 5,
}: {
  src: string;
  alt: string;
  rotate: string;
  zIndex: number;
  offsetX: string;
  offsetY: string;
  delay?: number;
  floatDuration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: parseFloat(rotate) }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        zIndex,
        left: offsetX,
        top: offsetY,
        transform: `rotate(${rotate})`,
        animation: `float-card-${delay.toString().replace(".", "")} ${floatDuration}s ease-in-out infinite ${delay}s`,
      }}
      className="collage-card"
    >
      <div className="relative w-[220px] sm:w-[260px] rounded-xl overflow-hidden shadow-screenshot border border-border bg-surface">
        {/* Browser chrome */}
        <div className="h-7 bg-surface-2 flex items-center gap-1.5 px-2.5 border-b border-border">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
          <div className="w-2 h-2 rounded-full bg-green-400/70" />
          <div className="flex-1 mx-2 h-3 rounded bg-border flex items-center px-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-ink-faint mr-1" />
            <div className="h-1.5 w-16 rounded-full bg-ink-faint" />
          </div>
        </div>
        <div className="relative h-[140px] sm:h-[165px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="280px"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const primaryBtn = useMagneticEffect(0.2);

  const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
      aria-label="Hero section"
    >
      {/* Subtle grid pattern — very light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,17,21,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,21,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 section-container w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-8 items-center">
          {/* ── Left column: Copy ─────────────────── */}
          <div className="max-w-2xl">
            {/* Eyebrow — monospace, no pill */}
            <motion.p
              className="eyebrow mb-6"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Qooik Solutions — Digital Agency, India
            </motion.p>

            {/* Headline — serif, solid ink, one word underlined */}
            <motion.h1
              className="text-display font-heading font-bold text-ink text-balance mb-6 leading-[1.0]"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              We Build Websites{" "}
              <br className="hidden sm:block" />
              That{" "}
              <span className="underline-accent">Grow</span>{" "}
              Businesses.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              className="text-body-lg text-ink-secondary mb-10 text-balance max-w-xl"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
            >
              Websites. AI Automation. Business Growth.{" "}
              <span className="text-ink">
                Everything your business needs to scale.
              </span>
            </motion.p>

            {/* CTA row — one solid button + one text link */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/book-consultation"
                ref={primaryBtn.ref as React.Ref<HTMLAnchorElement>}
                onMouseMove={primaryBtn.handleMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
                onMouseLeave={primaryBtn.handleMouseLeave}
                className="btn-primary group"
                id="hero-cta-primary"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>

              {/* Text link — NOT a bordered pill button */}
              <Link
                href="/portfolio"
                className="btn-text-link group"
                id="hero-cta-secondary"
              >
                View our work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            >
              {[
                "50+ Projects Delivered",
                "20+ Businesses Automated",
                "99% Client Satisfaction",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-ink-muted">
                  <span className="w-1 h-1 rounded-full bg-accent inline-block" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: Portfolio collage ─────────────────── */}
          {!shouldReduceMotion && (
            <div
              className="hidden lg:block relative"
              style={{ width: 420, height: 480 }}
              aria-hidden="true"
            >
              {/* Card 1 — Flowtech (back-left) */}
              <motion.div
                className="absolute"
                style={{ top: "8%", left: "0%", zIndex: 1, rotate: -4 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                >
                  <div className="relative w-[230px] rounded-xl overflow-hidden shadow-screenshot border border-border bg-surface">
                    <div className="h-6 bg-surface-2 flex items-center gap-1 px-2 border-b border-border">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                      <div className="flex-1 mx-1.5 h-2.5 rounded bg-border" />
                    </div>
                    <div className="relative h-[150px]">
                      <Image src="/images/portfolio/flowtech.png" alt="Flowtech Engineers website" fill className="object-cover object-top" sizes="240px" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2 — Hotpsy (center-top, most prominent) */}
              <motion.div
                className="absolute"
                style={{ top: "0%", left: "28%", zIndex: 3, rotate: 2 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <div className="relative w-[250px] rounded-xl overflow-hidden shadow-screenshot border border-border bg-surface">
                    <div className="h-6 bg-surface-2 flex items-center gap-1 px-2 border-b border-border">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                      <div className="flex-1 mx-1.5 h-2.5 rounded bg-border" />
                    </div>
                    <div className="relative h-[168px]">
                      <Image src="/images/portfolio/hotpsy.png" alt="Hotpsy cafe website" fill className="object-cover object-top" sizes="260px" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3 — Woksterrr (bottom-left) */}
              <motion.div
                className="absolute"
                style={{ top: "42%", left: "4%", zIndex: 2, rotate: -2 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.85, ease }}
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                >
                  <div className="relative w-[215px] rounded-xl overflow-hidden shadow-screenshot border border-border bg-surface">
                    <div className="h-6 bg-surface-2 flex items-center gap-1 px-2 border-b border-border">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                      <div className="flex-1 mx-1.5 h-2.5 rounded bg-border" />
                    </div>
                    <div className="relative h-[140px]">
                      <Image src="/images/portfolio/woksterrr.png" alt="Woksterrr restaurant website" fill className="object-cover object-top" sizes="225px" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 4 — DentalAHH (bottom-right) */}
              <motion.div
                className="absolute"
                style={{ top: "48%", left: "36%", zIndex: 4, rotate: 3 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease }}
              >
                <motion.div
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
                >
                  <div className="relative w-[230px] rounded-xl overflow-hidden shadow-screenshot border border-border bg-surface">
                    <div className="h-6 bg-surface-2 flex items-center gap-1 px-2 border-b border-border">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                      <div className="flex-1 mx-1.5 h-2.5 rounded bg-border" />
                    </div>
                    <div className="relative h-[152px]">
                      <Image src="/images/portfolio/dentalahh.png" alt="DentalAHH clinic website" fill className="object-cover object-top" sizes="240px" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="eyebrow text-[10px]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-ink-muted to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
