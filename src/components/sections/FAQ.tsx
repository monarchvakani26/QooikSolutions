"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects are completed in 2–4 weeks depending on scope. You'll receive a specific timeline in your proposal. We start with a discovery call, then deliver mockups within the first week.",
  },
  {
    q: "Do I need to provide any content?",
    a: "We guide you through what we need — business info, photos, logos, and any specific text. We can also write copy for you as part of the Growth or Scale packages.",
  },
  {
    q: "Will the website work on mobile?",
    a: "Yes, every site we build is mobile-first. We design for phones first, then scale up to tablets and desktops — because most of your customers will visit on their phones.",
  },
  {
    q: "What happens after the website goes live?",
    a: "We provide a handover session, documentation, and a support window (1–6 months depending on your plan). After that, ongoing support is available at a monthly retainer.",
  },
  {
    q: "Can you take over an existing website?",
    a: "Yes. We can redesign or rebuild an existing website on a new stack. We'll audit what you have and recommend the best path forward.",
  },
  {
    q: "How does the AI automation work?",
    a: "We build custom AI workflows using WhatsApp Business API, voice AI agents, and CRM integrations. Everything is tailored to your specific business processes — we don't use off-the-shelf chatbot builders.",
  },
  {
    q: "What's the payment structure?",
    a: "50% on project kickoff, 50% on launch. For larger projects, we can discuss milestone-based payment. All prices are fixed — no surprise invoices.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-background" aria-label="Frequently asked questions">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">FAQ</p>
          <TextReveal
            text="Questions we get a lot."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
        </FadeInView>

        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <FadeInView key={i} delay={i * 0.04}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-surface-2 transition-colors duration-150"
                  aria-expanded={open === i}
                  id={`faq-trigger-${i}`}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-sm font-semibold text-ink">{faq.q}</span>
                  {open === i
                    ? <Minus className="w-4 h-4 text-accent flex-shrink-0" />
                    : <Plus className="w-4 h-4 text-ink-muted flex-shrink-0" />
                  }
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-ink-secondary leading-relaxed border-t border-border pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
