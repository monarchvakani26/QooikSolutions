import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import Industries from "@/components/sections/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Qooik Solutions builds websites and AI automation for restaurants, cafes, salons, dental clinics, photographers, real estate, startups, and more across India.",
};

export default function IndustriesPage() {
  return (
    <main className="pt-24 bg-background">
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">Industries We Serve</p>
          </FadeInView>
          <TextReveal
            text="We Know Your Industry Inside Out"
            as="h1"
            className="text-display-sm font-heading font-bold text-ink mb-4 max-w-3xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto">
              Deep expertise across 14+ industries. We don't just build websites — we build
              solutions that understand your customers, your competition, and your market.
            </p>
          </FadeInView>
        </div>
      </section>

      <Industries />

      <section className="section-padding bg-surface">
        <div className="section-container text-center">
          <FadeInView>
            <h2 className="text-h2 font-heading font-bold text-ink mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-ink-secondary max-w-lg mx-auto mb-8">
              We work with all types of businesses. If you don't see your industry listed,
              reach out — we'd love to learn about your business.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              <span>Contact Us</span>
            </Link>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
