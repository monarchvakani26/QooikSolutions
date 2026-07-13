"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";

function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isInView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [mounted, isInView, end]);

  return (
    <span ref={ref}>
      {prefix}{mounted ? value : end}{suffix}
    </span>
  );
}

const stats = [
  { value: 5, suffix: "", label: "Projects Delivered", sublabel: "Premium hand-crafted websites" },
  { value: 2, suffix: "", label: "AI Automations", sublabel: "WhatsApp & chatbot workflows" },
  { value: 99, suffix: "%", label: "Client Satisfaction", sublabel: "Rated 5-star across all work" },
  { value: 2, suffix: "h", prefix: "< ", label: "Qooik Reply Time", sublabel: "Average response speed" },
];

export default function Statistics() {
  return (
    <section id="statistics" className="section-padding bg-surface" aria-label="Statistics">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">By the Numbers</p>
          <TextReveal
            text="Results that speak."
            as="h2"
            className="text-h1 font-heading font-bold text-ink"
          />
        </FadeInView>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <FadeInView key={stat.label} delay={i * 0.08}>
              <div className="card p-6 text-center hover:shadow-card-hover transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-heading font-bold text-accent tabular-nums mb-1">
                  <Counter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="font-semibold text-ink text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-ink-muted">{stat.sublabel}</div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
