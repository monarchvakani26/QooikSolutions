import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView, StaggerContainer } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import {
  Bot, Phone, Calendar, Database, MessageSquare,
  Mail, HeadphonesIcon, ArrowRight, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "Automate your business with AI: WhatsApp agents, voice calling, appointment booking, CRM updates, and more. Qooik Solutions AI services for Indian businesses.",
};

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp AI Agent",
    description: "A 24/7 AI agent on your business WhatsApp that handles customer queries, takes orders, books appointments, and qualifies leads — automatically.",
    useCases: ["Answer FAQs", "Take food orders", "Book appointments", "Send reminders"],
  },
  {
    icon: Phone,
    title: "AI Voice Calling",
    description: "Automated AI phone calls that sound natural and handle inbound/outbound calls for lead qualification, appointment reminders, and customer follow-ups.",
    useCases: ["Lead qualification calls", "Appointment reminders", "Follow-up campaigns", "Customer surveys"],
  },
  {
    icon: Calendar,
    title: "Booking Automation",
    description: "Intelligent scheduling that syncs with your calendar, sends confirmations, and handles reschedules — zero admin work required.",
    useCases: ["Online booking widget", "Calendar sync", "Auto confirmations", "Rescheduling flows"],
  },
  {
    icon: Database,
    title: "CRM Automation",
    description: "Every customer interaction automatically logged, leads scored, and follow-ups scheduled — your CRM runs itself.",
    useCases: ["Auto lead logging", "Lead scoring", "Follow-up scheduling", "Pipeline management"],
  },
  {
    icon: HeadphonesIcon,
    title: "AI Customer Support",
    description: "An intelligent support agent on your website and WhatsApp that resolves common issues instantly and escalates complex ones to your team.",
    useCases: ["24/7 query resolution", "Order tracking", "Complaint handling", "Human handoff"],
  },
  {
    icon: Mail,
    title: "Email & Invoice Automation",
    description: "Automated email sequences, invoice generation, and payment reminders — all triggered by customer actions without any manual effort.",
    useCases: ["Welcome sequences", "Invoice generation", "Payment reminders", "Re-engagement emails"],
  },
];

export default function AIAutomationPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">AI Automation</p>
          </FadeInView>
          <TextReveal
            text="Your Business Should Work Even While You Sleep"
            as="h1"
            className="text-display font-heading font-bold text-ink mb-6 max-w-3xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto mb-8">
              Intelligent AI agents that handle your customers, bookings, and operations 24/7 —
              so you can focus on what you do best.
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/book-consultation" className="btn-primary inline-flex">
                <span>Book Free AI Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-text-link group">
                Talk to Us First
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <FadeInView className="text-center mb-12">
            <p className="eyebrow mb-3">Capabilities</p>
            <TextReveal
              text="What We Can Automate"
              as="h2"
              className="text-h1 font-heading font-bold text-ink mb-4"
            />
            <p className="text-ink-secondary max-w-xl mx-auto">
              Each automation is custom-built for your business — not a generic chatbot, but
              an intelligent agent that understands your specific context.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="card p-6 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-h3 font-heading font-semibold text-ink">{feature.title}</h3>
                  </div>
                  <p className="text-caption text-ink-secondary leading-relaxed mb-4">{feature.description}</p>
                  <ul className="flex flex-col gap-1.5">
                    {feature.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-2 text-xs text-ink-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <FadeInView>
            <div className="card max-w-2xl mx-auto p-10 relative overflow-hidden">
              <h2 className="text-h1 font-heading font-bold text-ink mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-ink-secondary mb-8">
                Book a free 30-minute demo. We'll show you exactly what automation
                would look like for your specific business.
              </p>
              <Link href="/book-consultation" className="btn-primary inline-flex">
                <span>Book Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
