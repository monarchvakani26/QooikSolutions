import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import Services from "@/components/sections/Services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Qooik Solutions' full range of services: website design, AI automation, SEO, e-commerce, and more for Indian businesses.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 bg-background">
      {/* Hero */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">Everything We Offer</p>
          </FadeInView>
          <TextReveal
            text="Services Designed to Grow Your Business"
            as="h1"
            className="text-display-sm font-heading font-bold text-ink mb-4 max-w-3xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto">
              From a simple landing page to a full AI automation system — we cover everything your
              business needs to compete and grow in the digital age.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Services section reuse */}
      <Services />

      {/* CTA */}
      <section className="section-padding bg-surface">
        <div className="section-container text-center">
          <FadeInView>
            <h2 className="text-h2 font-heading font-bold text-ink mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-ink-secondary max-w-lg mx-auto mb-8">
              Book a free 30-minute call. We'll assess your business and recommend exactly what will move the needle.
            </p>
            <Link href="/book-consultation" className="btn-primary inline-flex">
              <span className="flex items-center gap-2">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
