"use client";

import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Qooik delivered our cafe website in under 3 weeks and it's already bringing in table bookings every day. The WhatsApp bot they set up handles half our enquiries automatically.",
    name: "Rahul Mehta",
    role: "Owner, Hotpsy Cafe",
    industry: "Cafe",
    initials: "RM",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: 2,
    quote:
      "Our engineering website now shows up on Google for the right keywords and we're getting enquiry calls we never used to get. Worth every rupee.",
    name: "Priya Sharma",
    role: "Director, Flow Tech Engineers",
    industry: "Engineering",
    initials: "PS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    quote:
      "The AI automation system they built books appointments for our clinic without any staff involvement. It's changed how we manage our schedule completely.",
    name: "Dr. Anand Kulkarni",
    role: "Founder, Sabka Dentist",
    industry: "Healthcare",
    initials: "AK",
    color: "bg-teal-100 text-teal-700",
  },
  {
    id: 4,
    quote:
      "We went from zero online presence to 200+ website visitors a week and online orders within a month of launching with Qooik.",
    name: "Vikram Patel",
    role: "Co-founder, Wokster Chinese Corner",
    industry: "Restaurant",
    initials: "VP",
    color: "bg-red-100 text-red-700",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background" aria-label="Client testimonials">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">Client Stories</p>
          <TextReveal
            text="What our clients say."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            Real feedback from real business owners across India.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              className="card p-6 hover:shadow-card-hover transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-accent/30 mb-4" />
              <blockquote className="text-body text-ink-secondary leading-relaxed mb-5 italic">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
                </div>
                <span className="ml-auto tag">{t.industry}</span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
