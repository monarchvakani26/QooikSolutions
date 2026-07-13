import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { formatDate } from "@/lib/utils";

// Static post data
const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  tags: string[];
  content: string;
}> = {
  "why-restaurants-need-a-website": {
    title: "Why Every Restaurant Needs a Website in 2025",
    description: "A restaurant without a website is leaving money on the table.",
    date: "2025-06-15",
    category: "Restaurants",
    readingTime: "5 min read",
    tags: ["Restaurant", "Website", "Digital Marketing"],
    content: `
## The Real Cost of Not Having a Website

In 2025, when a new customer is hungry and looking for a place to eat, the first thing they do is search Google. If your restaurant doesn't show up — or shows up with outdated information — you've lost that customer before they ever walked through your door.

**A conservative estimate**: if just 5 potential customers per day skip your restaurant because they couldn't find information online, that's 150 customers per month. At an average bill of ₹500 per person, that's **₹75,000 in monthly revenue** disappearing because of a missing web page.

## What a Restaurant Website Does For You

**1. Shows Up on Google** — When someone searches "restaurant near me," Google prioritizes businesses with complete web profiles. A proper website with local SEO means you appear at the top.

**2. Displays Your Menu Online** — People check the menu before deciding. An updated online menu with prices and photos converts browsers into customers.

**3. Handles Bookings 24/7** — An integrated booking system takes reservations even at 2am when someone is planning tomorrow's dinner.

**4. Builds Trust Before They Arrive** — High-quality photos and a professionally designed website signal that your restaurant takes quality seriously.

**5. WhatsApp Integration** — In India, WhatsApp is how business gets done. A website linking to WhatsApp for orders and reservations meets customers where they already are.

## The Investment That Pays for Itself

A professional restaurant website typically pays for itself within the first month through recovered bookings alone. And unlike advertising spend, your website keeps working 24/7, indefinitely.

Ready to get your restaurant online? [Book a free consultation](/book-consultation).
    `,
  },
  "ai-automation-for-small-businesses": {
    title: "How AI Automation Is Changing Small Businesses in India",
    description: "AI isn't just for big corporations anymore.",
    date: "2025-07-01",
    category: "AI Automation",
    readingTime: "6 min read",
    tags: ["AI Automation", "Small Business", "India"],
    content: `
## What AI Automation Actually Means for a Small Business

Forget the science fiction. AI automation for small businesses is practical and immediate:

- Your WhatsApp answers customer questions at 3am while you sleep
- A customer types "book appointment" and the AI books it automatically
- When someone calls your restaurant, an AI agent takes the order
- Every new lead is automatically followed up within minutes

**These aren't future possibilities — they're working today.**

## The Real Problems AI Solves

**Missed Inquiries = Missed Revenue**: 78% of customers buy from the business that responds first. AI automation means every inquiry gets an instant response, 24/7.

**Admin Overhead is Crushing**: Restaurant owners spend 2-3 hours daily managing WhatsApp messages and reservations. AI automation handles this automatically.

**Scaling Means Hiring**: Traditionally, handling more customers meant hiring more staff. AI breaks this constraint — 10x the interactions with the same team.

## Real Results from Indian Businesses

- **Mumbai Restaurant**: 40% increase in orders, zero missed bookings
- **Bangalore Dental Clinic**: 60% reduction in no-shows through automated reminders  
- **Pune Bakery**: Custom cake orders handled entirely via AI without human involvement

## How to Get Started

You don't need to understand how AI works to benefit from it. At Qooik Solutions, we audit your workflow, build a custom automation system, integrate it with your existing tools, and provide ongoing support.

The entire setup typically takes 1-2 weeks, and most businesses see ROI within the first month.

[Book a free AI demo](/book-consultation) — no jargon, no obligation.
    `,
  },
  "signs-your-website-needs-redesign": {
    title: "5 Signs Your Business Website Needs a Redesign",
    description: "Is your website costing you customers?",
    date: "2025-07-08",
    category: "Web Design",
    readingTime: "4 min read",
    tags: ["Website Redesign", "Web Design"],
    content: `
## Sign 1: It Loads Slowly on Mobile

If your website takes more than 3 seconds to load on a phone, **53% of visitors have already left**. In India, over 70% of web traffic comes from mobile devices. A slow website is actively driving away most of your potential customers.

## Sign 2: It Looks Like It Was Built Before 2020

Web design trends move fast. A website that looked great in 2018 now looks outdated — and customers notice. They associate your website's quality with your business's quality.

## Sign 3: You Can't Update It Yourself

If changing a phone number requires calling your developer, you have unnecessary friction. A modern website lets you make updates in minutes via a simple content management system.

## Sign 4: It's Not Showing Up on Google

If your website doesn't appear in the first few results when someone searches your business name or services, your SEO is broken. Common causes: missing meta tags, slow load times, poor mobile experience.

## Sign 5: Your Competitors' Sites Look Better

Open your top competitor's website. Does it make yours look dated? This perception gap directly affects who customers choose when comparing options.

## What a Redesign Delivers

A professional redesign from Qooik Solutions typically delivers:
- **2-4x more inquiries** from the same traffic
- **2-5x faster loading** through modern performance optimization
- **Better Google rankings** through technical SEO
- **Mobile experience** that actually converts

[Book a free website audit](/book-consultation) — we'll show you exactly what's possible.
    `,
  },
};

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.description,
  };
}

export function generateStaticParams(): Params[] {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main className="pt-24 bg-background">
      {/* Back link */}
      <div className="section-container pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <section className="py-12 bg-background relative overflow-hidden">
        <div className="section-container max-w-3xl">
          <FadeInView>
            <div className="flex flex-wrap items-center gap-3 mb-6 text-xs text-ink-muted">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {post.readingTime}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="text-display-sm font-sans font-bold text-ink mb-4">{post.title}</h1>
            <p className="text-body-lg text-ink-secondary leading-relaxed">{post.description}</p>
          </FadeInView>
        </div>
      </section>

      {/* Article body */}
      <section className="pb-16 bg-background">
        <div className="section-container max-w-3xl">
          <FadeInView delay={0.1}>
            <article
              className="prose prose-sans prose-sm sm:prose-base max-w-none font-sans
                prose-headings:font-sans prose-headings:text-ink prose-headings:font-bold
                prose-p:text-ink-secondary prose-p:leading-relaxed
                prose-strong:text-ink
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-li:text-ink-secondary
                prose-hr:border-border"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .replace(/\n## /g, "\n<h2>")
                  .replace(/\n\n/g, "</p><p>")
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                  .replace(/- (.*?)(?=\n|$)/g, "<li>$1</li>"),
              }}
            />
          </FadeInView>

          {/* Tags */}
          <FadeInView delay={0.2} className="mt-8 pt-8 border-t border-border flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-surface-2 border border-border text-xs text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </FadeInView>

          {/* CTA */}
          <FadeInView delay={0.25} className="mt-10">
            <div className="card p-6 text-center">
              <p className="text-ink-secondary text-sm mb-4">
                Ready to take action? Let's start with a free consultation.
              </p>
              <Link href="/book-consultation" className="btn-primary inline-flex">
                <span>Book Free Consultation</span>
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
