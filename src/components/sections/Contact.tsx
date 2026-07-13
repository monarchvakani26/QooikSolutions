"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/utils";
import { useState } from "react";

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding bg-surface" aria-label="Contact">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy + contact info */}
          <div>
            <FadeInView>
              <p className="eyebrow mb-3">Get in Touch</p>
              <TextReveal
                text="Let's build something great together."
                as="h2"
                className="text-h1 font-heading font-bold text-ink mb-5"
              />
              <p className="text-body-lg text-ink-secondary mb-8">
                Tell us about your business and what you need. We'll get back to you within one business day.
              </p>
            </FadeInView>

            <FadeInView delay={0.1} className="flex flex-col gap-3">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-2 border border-border hover:border-border-mid hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                  <MessageCircle className="w-4.5 h-4.5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-ink-muted mb-0.5">WhatsApp (fastest)</div>
                  <div className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                    Chat with us
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-ink-muted ml-auto group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-2 border border-border hover:border-border-mid hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-ink-muted mb-0.5">Email</div>
                  <div className="text-sm font-medium text-ink">{siteConfig.email}</div>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface-2 border border-border hover:border-border-mid hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-ink-muted mb-0.5">Phone</div>
                  <div className="text-sm font-medium text-ink">{siteConfig.phone}</div>
                </div>
              </a>
            </FadeInView>
          </div>

          {/* Right: contact form */}
          <FadeInView delay={0.15}>
            <div className="card p-7">
              <h3 className="font-heading font-semibold text-ink text-lg mb-5">Send us a message</h3>
              {status === "success" ? (
                <div className="py-8 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <p className="font-semibold text-ink mb-1">Message sent!</p>
                  <p className="text-sm text-ink-secondary">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-ink-secondary mb-1.5">Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface-2 text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-ink-secondary mb-1.5">Phone / WhatsApp</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface-2 text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-ink-secondary mb-1.5">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@business.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface-2 text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-business" className="block text-xs font-medium text-ink-secondary mb-1.5">Business Type</label>
                    <input
                      id="contact-business"
                      name="business_type"
                      type="text"
                      placeholder="e.g. Restaurant, Salon, Startup"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface-2 text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-ink-secondary mb-1.5">What do you need?</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your business and what you're looking for..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface-2 text-ink text-sm placeholder:text-ink-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-600">Something went wrong. Please try WhatsApp or email directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
