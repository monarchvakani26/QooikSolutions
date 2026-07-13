"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Bot, TrendingUp, CheckCircle2 } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";

const tabs = [
  {
    id: "web",
    label: "Website Design",
    icon: Globe,
    headline: "A website that works as hard as you do.",
    description:
      "We design custom websites from scratch — built for your specific industry, brand, and goals. No templates. No shortcuts.",
    features: [
      "Custom design (zero templates)",
      "Mobile-first responsive layout",
      "SEO-optimised from day one",
      "Fast page speeds (Core Web Vitals)",
      "WhatsApp & booking integrations",
      "Ongoing support & updates",
    ],
    href: "/services",
    color: "bg-blue-50",
    iconColor: "text-accent",
  },
  {
    id: "ai",
    label: "AI Automation",
    icon: Bot,
    headline: "Automate the repetitive. Focus on the important.",
    description:
      "AI-powered agents that handle WhatsApp enquiries, appointment booking, lead qualification, and follow-ups — 24/7, without you lifting a finger.",
    features: [
      "WhatsApp AI chatbot",
      "Automatic appointment booking",
      "Lead capture & CRM updates",
      "AI voice calling agent",
      "Follow-up sequences",
      "Custom workflow automation",
    ],
    href: "/ai-automation",
    color: "bg-violet-50",
    iconColor: "text-violet-accent",
  },
  {
    id: "growth",
    label: "SEO & Growth",
    icon: TrendingUp,
    headline: "Get found. Get leads. Grow.",
    description:
      "Search visibility, Google Business optimisation, and performance analytics — so your website doesn't just look good, it delivers results.",
    features: [
      "On-page & technical SEO",
      "Google Business Profile setup",
      "Local SEO for Indian markets",
      "Analytics & monthly reports",
      "Conversion rate optimisation",
      "Content strategy support",
    ],
    href: "/services#growth",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

export default function Services() {
  const [active, setActive] = useState("web");
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section id="services" className="section-padding bg-surface" aria-label="Services">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">What We Do</p>
          <TextReveal
            text="Three services. One outcome: growth."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            We combine thoughtful design, smart automation, and search visibility to build businesses that grow online.
          </p>
        </FadeInView>

        {/* Tab switcher */}
        <FadeInView delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-white shadow-btn-accent"
                      : "bg-surface-2 text-ink-secondary hover:text-ink hover:bg-surface-3"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeInView>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`tab-panel-${active}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="card p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-start"
          >
            {/* Left: copy */}
            <div>
              <div className={`w-12 h-12 rounded-xl ${activeTab.color} flex items-center justify-center mb-5`}>
                <activeTab.icon className={`w-6 h-6 ${activeTab.iconColor}`} />
              </div>
              <h3 className="text-h2 font-heading font-bold text-ink mb-3">
                {activeTab.headline}
              </h3>
              <p className="text-body text-ink-secondary mb-6 leading-relaxed">
                {activeTab.description}
              </p>
              <Link href={activeTab.href} className="btn-text-link group">
                Learn more about {activeTab.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Right: features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeTab.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-surface-2 border border-border">
                  <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${activeTab.iconColor}`} />
                  <span className="text-sm text-ink-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
