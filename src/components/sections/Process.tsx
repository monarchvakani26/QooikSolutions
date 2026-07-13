"use client";

import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free 30-minute consultation to understand your business, goals, and what your ideal website should achieve.",
  },
  {
    number: "02",
    title: "Proposal & Plan",
    description:
      "Within 48 hours, you receive a detailed proposal: design direction, feature list, timeline, and fixed price. No surprises.",
  },
  {
    number: "03",
    title: "Design & Build",
    description:
      "We design and build your site with regular check-ins. You see progress at every milestone before we move forward.",
  },
  {
    number: "04",
    title: "Review & Refine",
    description:
      "Two rounds of revisions included. We fine-tune until every detail is exactly right — your feedback drives the outcome.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We handle deployment, domain setup, and all technical details. Your site goes live with zero stress on your side.",
  },
  {
    number: "06",
    title: "Support & Growth",
    description:
      "Post-launch, we monitor performance, make updates, and help your site grow with your business. Long-term partners, not one-off vendors.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-background" aria-label="Our process">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">How It Works</p>
          <TextReveal
            text="Six steps to a website that grows."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            A clear, predictable process — so you always know what's happening and what comes next.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="card p-6 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="text-3xl font-heading font-bold text-accent/20 group-hover:text-accent/30 transition-colors mb-4 tabular-nums">
                {step.number}
              </div>
              <h3 className="text-h3 font-heading font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-caption text-ink-secondary leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
