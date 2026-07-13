"use client";

import { motion } from "framer-motion";
import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";

const industries = [
  { name: "Restaurants", emoji: "🍽️" },
  { name: "Cafes & Bakeries", emoji: "☕" },
  { name: "Salons & Spas", emoji: "💅" },
  { name: "Dental Clinics", emoji: "🦷" },
  { name: "Real Estate", emoji: "🏠" },
  { name: "Photographers", emoji: "📸" },
  { name: "Event Companies", emoji: "🎉" },
  { name: "Manufacturing", emoji: "⚙️" },
  { name: "Startups", emoji: "🚀" },
  { name: "Personal Brands", emoji: "✨" },
  { name: "Retail Shops", emoji: "🛍️" },
  { name: "Healthcare", emoji: "🏥" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-background" aria-label="Industries we serve">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">Who We Serve</p>
          <TextReveal
            text="Built for real Indian businesses."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            From a 5-table restaurant to a growing startup — if you have a business, we have a website for it.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3" staggerDelay={0.04}>
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={staggerItem}
              className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-surface border border-border shadow-card hover:shadow-card-hover hover:border-border-mid transition-all duration-300 cursor-default"
            >
              <span className="text-2xl" role="img" aria-hidden="true">{industry.emoji}</span>
              <span className="text-xs font-medium text-ink-secondary text-center leading-snug group-hover:text-ink transition-colors duration-200">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
