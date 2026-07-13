import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { siteConfig } from "@/lib/utils";
import { Calendar, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description:
    "Book a free 30-minute consultation with Qooik Solutions. Tell us about your business and we'll create a custom plan for your digital growth.",
};

const whatToExpect = [
  "30-minute call, zero obligation",
  "We'll learn about your business and goals",
  "You'll get a custom project recommendation",
  "We'll provide a clear timeline and quote",
  "No pushy sales — just honest advice",
];

export default function BookConsultationPage() {
  return (
    <main className="pt-24 bg-background">
      <section className="section-padding relative overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Left */}
            <div>
              <FadeInView>
                <p className="eyebrow mb-4">Free Consultation</p>
              </FadeInView>
              <TextReveal
                text="Book Your Free Strategy Call"
                as="h1"
                className="text-display-sm font-heading font-bold text-ink mb-6"
              />
              <FadeInView delay={0.15}>
                <p className="text-ink-secondary leading-relaxed mb-8">
                  A free, no-obligation 30-minute call where we listen to your business goals,
                  understand your challenges, and show you exactly how we'd help.
                </p>
              </FadeInView>
              <FadeInView delay={0.2}>
                <div className="card p-6 mb-6">
                  <h3 className="text-sm font-semibold text-ink mb-4">What to Expect</h3>
                  <ul className="flex flex-col gap-3">
                    {whatToExpect.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInView>
              <FadeInView delay={0.25}>
                <p className="text-xs text-ink-muted">
                  Prefer to reach out directly?{" "}
                  <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    WhatsApp us
                  </a>{" "}
                  or{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                    send an email
                  </a>
                  .
                </p>
              </FadeInView>
            </div>

            {/* Right — Booking options */}
            <FadeInView direction="left" delay={0.1}>
              <div className="card p-8">
                <h2 className="text-h3 font-heading font-semibold text-ink mb-6">
                  Choose How to Connect
                </h2>

                <div className="flex flex-col gap-4">
                  {/* WhatsApp */}
                  <a
                    href={`${siteConfig.whatsapp}?text=Hi%21%20I%27d%20like%20to%20book%20a%20free%20consultation%20with%20Qooik%20Solutions.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-xl bg-green-50 border border-green-200/50 hover:bg-green-100/50 hover:border-green-300 transition-all duration-200"
                    id="book-whatsapp"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">WhatsApp (Fastest)</div>
                      <div className="text-xs text-ink-muted mt-0.5">Typically reply within minutes</div>
                    </div>
                  </a>

                  {/* Call */}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="group flex items-center gap-4 p-5 rounded-xl bg-accent-soft border border-accent/10 hover:bg-accent-soft/80 hover:border-accent/30 transition-all duration-200"
                    id="book-call"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">Schedule a Call</div>
                      <div className="text-xs text-ink-muted mt-0.5">{siteConfig.phone}</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${siteConfig.email}?subject=Free%20Consultation%20Request&body=Hi%20Qooik%20Solutions%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.`}
                    className="group flex items-center gap-4 p-5 rounded-xl bg-surface-2 border border-border hover:bg-surface-3 transition-all duration-200"
                    id="book-email"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface-3 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-ink-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm">Send Us an Email</div>
                      <div className="text-xs text-ink-muted mt-0.5">{siteConfig.email}</div>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-ink-muted text-center">
                    Or fill in our{" "}
                    <Link href="/contact" className="text-accent hover:underline">
                      detailed contact form
                    </Link>{" "}
                    and we'll reach out to you.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
    </main>
  );
}
