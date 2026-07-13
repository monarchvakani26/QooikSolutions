"use client";

import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Qooik built an <strong>AI automation system</strong> that automatically handles our customer enquiries and schedules follow-ups. It <strong>saved us 15+ hours every week</strong> and made sure we <strong>never miss a hot lead</strong>.",
    name: "Palak Gada",
    role: "Founder, Window World",
    industry: "AI Automation",
    initials: "PG",
    color: "bg-purple-100 text-purple-700",
    url: undefined,
  },
  {
    id: 2,
    quote:
      "Our new <strong>engineering company website is stunning</strong> and completely optimized for SEO. We are now <strong>ranking on Google search</strong> for our core keywords, bringing in <strong>high-quality B2B sales enquiries</strong> organically.",
    name: "Vaibhav Teredesai",
    role: "Founder, Flow Tech Engineers",
    industry: "Web & SEO",
    initials: "VT",
    color: "bg-blue-100 text-blue-700",
    url: "https://flowtechengineers.in",
  },
  {
    id: 3,
    quote:
      "The team at Qooik created a <strong>high-converting landing page</strong> and managed our paid search campaigns. Our <strong>cost-per-lead dropped by 45%</strong> and the quality of inbound calls has <strong>improved significantly</strong>.",
    name: "Shrenik Jain",
    role: "Founder, Shrenik Jain Digital",
    industry: "Marketing",
    initials: "SJ",
    color: "bg-amber-100 text-amber-700",
    url: undefined,
  },
  {
    id: 4,
    quote:
      "We deployed Qooik's <strong>AI Voice Receptionist</strong> to handle after-hours calls. It <strong>answers client questions 24/7</strong>, books property site-visits, and logs lead details directly into our CRM. Truly a <strong>game-changer for real estate</strong>.",
    name: "Rajesh Mehta",
    role: "Founder, Mehta Realty",
    industry: "Real Estate",
    initials: "RM",
    color: "bg-emerald-100 text-emerald-700",
    url: undefined,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background" aria-label="Client testimonials">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">Client Stories</p>
          <TextReveal
            text="What our clients say."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            Real feedback from real business owners across India.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.1}>
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              className="card p-6 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300"
            >
              <div>
                <Quote className="w-6 h-6 text-accent/30 mb-4" />
                <blockquote
                  className="text-body text-ink-secondary leading-relaxed mb-5 italic"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                />
              </div>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.color} flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">
                    {t.url ? (
                      <a
                        href={t.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-accent transition-colors"
                        id={`testimonial-client-link-${t.id}`}
                      >
                        {t.name}
                      </a>
                    ) : (
                      t.name
                    )}
                  </div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
                </div>
                <span className="ml-auto tag">{t.industry}</span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
