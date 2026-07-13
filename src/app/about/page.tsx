import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView, StaggerContainer } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { Target, Heart, Users, Rocket, Award, Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Qooik Solutions — a premium Indian digital agency helping small businesses grow through stunning websites and intelligent AI automation.",
};

const values = [
  { icon: Heart, title: "Client-First", description: "Every decision starts with what's best for your business and your customers." },
  { icon: Target, title: "Results-Driven", description: "We measure success by your growth — more customers, more revenue, more visibility." },
  { icon: Award, title: "Craftsmanship", description: "We take pride in quality. Every site we ship is something we're proud to put our name on." },
  { icon: Rocket, title: "Speed", description: "Fast delivery, fast websites, fast support. We don't believe in making you wait." },
  { icon: Users, title: "Transparency", description: "No hidden fees, no vague timelines. Clear communication at every stage." },
  { icon: Globe, title: "India-First", description: "Built for the Indian market — we understand your customers, your context, your challenges." },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">Our Story</p>
          </FadeInView>
          <TextReveal
            text="We're Qooik Solutions"
            as="h1"
            className="text-display font-heading font-bold text-ink mb-6 max-w-3xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto mb-8">
              A premium digital agency born in India, built to serve the businesses that keep India running —
              restaurants, salons, clinics, startups, and every small business dreaming of a bigger digital presence.
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <p className="text-body text-ink-secondary max-w-2xl mx-auto">
              We combine world-class design sensibility with cutting-edge AI automation to give Indian small
              businesses access to the same digital tools that Fortune 500 companies use — at prices that actually
              make sense for a growing business.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <FadeInView direction="right" className="flex">
              <div className="card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-center">
                <div>
                  <p className="eyebrow mb-4">Our Mission</p>
                  <h2 className="text-h2 font-heading font-bold text-ink mb-4">
                    Democratizing Premium Digital Presence
                  </h2>
                  <p className="text-ink-secondary leading-relaxed">
                    We believe every business — regardless of size or budget — deserves a website that
                    makes them proud and brings in customers. Our mission is to make premium design
                    and intelligent automation accessible to every Indian entrepreneur.
                  </p>
                </div>
              </div>
            </FadeInView>
            <FadeInView direction="left" delay={0.1} className="flex">
              <div className="card p-8 sm:p-10 relative overflow-hidden flex flex-col justify-center">
                <div>
                  <p className="eyebrow mb-4">Our Vision</p>
                  <h2 className="text-h2 font-heading font-bold text-ink mb-4">
                    AI-First Businesses by 2030
                  </h2>
                  <p className="text-ink-secondary leading-relaxed">
                    We're working towards a future where every small business in India operates with
                    intelligent automation — where no customer query goes unanswered, no booking is missed,
                    and every business has the tools to compete at the highest level.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <FadeInView className="text-center mb-12">
            <p className="eyebrow mb-3">Core Values</p>
            <TextReveal
              text="What We Stand For"
              as="h2"
              className="text-h1 font-heading font-bold text-ink"
            />
          </FadeInView>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.08}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card p-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-h3 font-heading font-semibold text-ink mb-2">{value.title}</h3>
                  <p className="text-caption text-ink-secondary leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <FadeInView className="text-center mb-12">
            <p className="eyebrow mb-3">The Founders</p>
            <TextReveal
              text="Behind Qooik Solutions"
              as="h2"
              className="text-h1 font-heading font-bold text-ink"
            />
          </FadeInView>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeInView className="card p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center text-accent font-heading font-bold text-lg mb-5">
                  MV
                </div>
                <h3 className="text-xl font-heading font-bold text-ink mb-1">Monarch Vakani</h3>
                <p className="text-xs font-mono text-accent uppercase tracking-wider mb-4">Co-Founder & Tech Director</p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Passionate about crafting pixel-perfect, high-performance web experiences and designing reliable backend architectures. Monarch leads the engineering and system automation workflows at Qooik.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.1} className="card p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-soft flex items-center justify-center text-accent font-heading font-bold text-lg mb-5">
                  DB
                </div>
                <h3 className="text-xl font-heading font-bold text-ink mb-1">Daksh Bohra</h3>
                <p className="text-xs font-mono text-accent uppercase tracking-wider mb-4">Co-Founder & Business Lead</p>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Focused on business strategy, digital marketing, and client success. Daksh partners with local business owners to design growth plans, optimize sales funnels, and deploy smart AI receptionists.
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <FadeInView>
            <h2 className="text-h1 font-heading font-bold text-ink mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-body-lg text-ink-secondary max-w-xl mx-auto mb-8">
              Let's start with a free consultation and figure out exactly how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/book-consultation" className="btn-primary">
                <span>Book Free Consultation</span>
              </Link>
              <Link href="/portfolio" className="btn-text-link group">
                View Our Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
