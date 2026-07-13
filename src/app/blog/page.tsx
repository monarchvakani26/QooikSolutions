import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView, StaggerContainer } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on website design, AI automation, and digital marketing for Indian small businesses — from the Qooik Solutions team.",
};

const posts = [
  {
    slug: "why-restaurants-need-a-website",
    title: "Why Every Restaurant Needs a Website in 2025",
    description: "A restaurant without a website is leaving money on the table. Here's why a professional website is the single best investment you can make for your restaurant.",
    date: "2025-06-15",
    category: "Restaurants",
    readingTime: "5 min read",
  },
  {
    slug: "ai-automation-for-small-businesses",
    title: "How AI Automation Is Changing Small Businesses in India",
    description: "AI isn't just for big corporations anymore. Here's how small businesses across India are using AI automation to cut costs, increase revenue, and compete at a higher level.",
    date: "2025-07-01",
    category: "AI Automation",
    readingTime: "6 min read",
  },
  {
    slug: "signs-your-website-needs-redesign",
    title: "5 Signs Your Business Website Needs a Redesign",
    description: "Is your website costing you customers? Here are 5 clear signs that it's time to invest in a website redesign — and what a modern site can do for your business.",
    date: "2025-07-08",
    category: "Web Design",
    readingTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">Insights & Resources</p>
          </FadeInView>
          <TextReveal
            text="Learn. Grow. Compete."
            as="h1"
            className="text-display font-sans font-bold text-ink mb-4 max-w-2xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
              Practical insights on websites, AI automation, and digital marketing
              for Indian small businesses — no jargon, just actionable advice.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Posts grid */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.1}>
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-hover overflow-hidden flex flex-col group"
              >
                {/* Accent top border instead of gradient */}
                <div className="h-1 bg-accent" />

                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-ink-muted">
                    <span className="flex items-center gap-1.5 font-mono uppercase tracking-wider text-[10px]">
                      <Tag className="w-3 h-3 text-accent" />
                      {post.category}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-sans font-bold text-ink mb-2 group-hover:text-accent transition-colors duration-200 leading-snug flex-1">
                    <Link href={`/blog/${post.slug}`} className="hover:no-underline">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover transition-colors group/link"
                    >
                      Read more
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-background">
        <div className="section-container text-center">
          <FadeInView>
            <div className="card max-w-xl mx-auto p-8">
              <h2 className="text-h2 font-sans font-bold text-ink mb-3">
                Want to grow your business?
              </h2>
              <p className="text-ink-secondary text-sm mb-6 max-w-sm mx-auto">
                Start with a free consultation — we'll assess your digital presence
                and give you an honest plan.
              </p>
              <Link href="/book-consultation" className="btn-primary inline-flex">
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
