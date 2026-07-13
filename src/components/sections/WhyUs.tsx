"use client";

import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";
import {
  Brush, Cpu, HeadphonesIcon, LineChart, Clock, Award
} from "lucide-react";

const reasons = [
  {
    icon: Brush,
    title: "Custom, Not Cookie-Cutter",
    description:
      "Every website is designed from scratch for your specific business, industry, and audience. You'll never see your design on another site.",
  },
  {
    icon: Cpu,
    title: "Built to Convert",
    description:
      "We design with your business goals in mind — calls, bookings, enquiries. Beautiful design that actually drives results.",
  },
  {
    icon: HeadphonesIcon,
    title: "Real Human Support",
    description:
      "Direct WhatsApp access to your project team. No ticketing systems, no bots. Real answers from real people.",
  },
  {
    icon: LineChart,
    title: "Data-Driven Decisions",
    description:
      "Analytics-first approach from day one. We track what matters and iterate based on real user behaviour.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We respect your timeline. Projects are delivered within the agreed schedule with a clear milestone process.",
  },
  {
    icon: Award,
    title: "Industry Specialists",
    description:
      "Deep experience across restaurants, clinics, salons, and more — we know what works in each vertical.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-surface" aria-label="Why choose Qooik">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">Why Qooik</p>
          <TextReveal
            text="Not an agency. A growth partner."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            We're a small, focused team that moves fast and cares deeply about the businesses we build for.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={staggerItem}
                className="card p-6 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-ink mb-2">{reason.title}</h3>
                <p className="text-caption text-ink-secondary leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
