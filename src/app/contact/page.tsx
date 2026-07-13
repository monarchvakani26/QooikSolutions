import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import Contact from "@/components/sections/Contact";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Qooik Solutions. Send us a message, WhatsApp us, or book a free consultation to discuss your project.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 bg-background">
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">Get in Touch</p>
          </FadeInView>
          <TextReveal
            text="We'd Love to Hear About Your Business"
            as="h1"
            className="text-display-sm font-heading font-bold text-ink mb-4 max-w-3xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto mb-6">
              Whether you have a project in mind or just want to explore what's possible —
              reach out and we'll respond within 24 hours.
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <a
              href={`${siteConfig.whatsapp}?text=Hi%20Qooik%20Solutions%21%20I%27d%20like%20to%20discuss%20a%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-semibold hover:bg-green-100 transition-all duration-200 shadow-card"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp for instant response
            </a>
          </FadeInView>
        </div>
      </section>

      <Contact />
    </main>
  );
}
