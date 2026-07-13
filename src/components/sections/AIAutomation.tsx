"use client";

import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";
import { Bot, Calendar, MessageCircle, PhoneCall, RefreshCw, Database } from "lucide-react";

const automations = [
  {
    icon: Bot,
    title: "WhatsApp AI Agent",
    description: "Answers common customer questions, sends menus, and captures leads 24/7 — without you being online.",
  },
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Customers book appointments directly through WhatsApp or your website. Confirmed, reminded, managed automatically.",
  },
  {
    icon: PhoneCall,
    title: "AI Voice Calling",
    description: "An AI agent that calls back missed enquiries within 60 seconds — so you never lose a lead.",
  },
  {
    icon: MessageCircle,
    title: "Follow-Up Sequences",
    description: "Automated follow-up messages to quotes, enquiries, and past customers. Turn interest into revenue.",
  },
  {
    icon: Database,
    title: "CRM & Lead Tracking",
    description: "Every lead captured and stored automatically. See exactly where each customer is in your pipeline.",
  },
  {
    icon: RefreshCw,
    title: "Custom Workflows",
    description: "We build automation flows unique to your business — from order confirmations to re-engagement campaigns.",
  },
];

export default function AIAutomation() {
  return (
    <section id="ai-automation" className="section-padding bg-background" aria-label="AI automation">
      <div className="section-container">
        <FadeInView className="max-w-2xl mb-12">
          <p className="eyebrow mb-3">AI Automation</p>
          <TextReveal
            text="Your business, running while you sleep."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary">
            AI automation means your business handles enquiries, books appointments, and follows up with leads — without anyone on your team doing it manually.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
          {automations.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="card p-6 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-h3 font-heading font-semibold text-ink mb-2">{item.title}</h3>
                <p className="text-caption text-ink-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
