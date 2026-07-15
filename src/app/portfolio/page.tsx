import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FadeInView } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View Qooik Solutions' portfolio of premium websites built for Indian restaurants, cafes, dental clinics, and engineering companies.",
};

const projects = [
  {
    id: "moodita",
    title: "Moodita",
    description: "Premium digital portfolio and creative hub built for Niomi Gada — advocate, artist, and writer. Features an interactive creative art gallery, long-form journals, recipes, and a custom e-commerce shop interface.",
    url: "https://moodita.in",
    industry: "Art & E-commerce",
    tags: ["Digital Portfolio", "E-commerce Shop", "Creative Hub"],
    screenshot: "/images/portfolio/moodita.png",
    bgClass: "bg-orange-50/50",
    highlights: ["Interactive Art Gallery", "Integrated Print Shop", "Food & Travel Notebooks", "SEO Structured Schema"],
  },
  {
    id: "flowtech",
    title: "Flow Tech Engineers",
    description: "Industrial instrumentation company website showcasing their products, technical services, and expertise. Built for lead generation and professional credibility.",
    url: "https://flowtechengineers.in",
    industry: "Engineering",
    tags: ["Business Website", "Lead Generation", "Engineering"],
    screenshot: "/images/portfolio/flowtech.png",
    bgClass: "bg-blue-50/50",
    highlights: ["SEO-optimized", "Product catalog", "Lead capture forms", "Mobile-first design"],
  },
  {
    id: "hotpsy",
    title: "Hotpsy Cafe",
    description: "Premium cafe website with an immersive menu experience, table reservations, and brand storytelling that captures the cafe's unique cozy atmosphere.",
    url: "https://hotpsy.vercel.app",
    industry: "Cafe",
    tags: ["Cafe", "Menu", "Reservations", "Branding"],
    screenshot: "/images/portfolio/hotpsy.png",
    bgClass: "bg-amber-50/40",
    highlights: ["Online menu", "Table booking", "Brand storytelling", "Gallery section"],
  },
  {
    id: "woksterrr",
    title: "Wokster Chinese Corner",
    description: "Mumbai street-style Indo-Chinese restaurant website with vibrant design, digital menu, and online ordering integration that matches the restaurant's bold personality.",
    url: "https://woksterrr-indo-chinese-restaurant-o.vercel.app",
    industry: "Restaurant",
    tags: ["Restaurant", "Online Ordering", "Indo-Chinese"],
    screenshot: "/images/portfolio/woksterrr.png",
    bgClass: "bg-red-50/40",
    highlights: ["Online ordering", "Digital menu", "Vibrant branding", "WhatsApp integration"],
  },
  {
    id: "sabkadentist",
    title: "Sabka Dentist",
    description: "Dental clinic website designed to build patient trust, showcase treatments, and streamline appointment booking. #1 Rated Dental Clinic in Chembur East.",
    url: "https://dentalahh.vercel.app",
    industry: "Healthcare",
    tags: ["Dental Clinic", "Appointment Booking", "Healthcare"],
    screenshot: "/images/portfolio/sabkadentist.png",
    bgClass: "bg-teal-50/50",
    highlights: ["Appointment booking", "Trust building", "Treatment showcase", "10L+ Happy Smiles"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="pt-24 bg-background">
      {/* Hero */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="section-container text-center">
          <FadeInView>
            <p className="eyebrow mb-4">Our Work</p>
          </FadeInView>
          <TextReveal
            text="Real Websites. Real Results."
            as="h1"
            className="text-display-sm font-heading font-bold text-ink mb-4 max-w-3xl mx-auto"
          />
          <FadeInView delay={0.2}>
            <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto">
              Every project is built from scratch — no templates, no shortcuts.
              Here's a selection of websites we've delivered for Indian businesses.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-surface">
        <div className="section-container">
          <div className="flex flex-col gap-10">
            {projects.map((project, i) => (
              <FadeInView key={project.id} delay={i * 0.08}>
                <div className="card overflow-hidden group hover:shadow-card-hover hover:border-border-mid transition-all duration-500">
                  <div className="grid lg:grid-cols-2">
                    {/* Screenshot area */}
                    <div className={`relative h-64 lg:h-auto ${project.bgClass} flex items-center justify-center`}>
                      <div className="absolute inset-0 flex flex-col">
                        {/* Browser chrome */}
                        <div className="h-8 bg-surface-2 flex items-center gap-1.5 px-3 border-b border-border flex-shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                          <div className="flex-1 mx-3 h-4 rounded-full bg-border flex items-center px-2">
                            <span className="text-[9px] text-ink-muted truncate">
                              {project.url.replace("https://", "")}
                            </span>
                          </div>
                        </div>
                        {/* Screenshot Image */}
                        <div className="relative flex-1">
                          <Image
                            src={project.screenshot}
                            alt={`${project.title} website screenshot`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <span className="eyebrow text-[10px] text-accent">
                              {project.industry}
                            </span>
                            <h2 className="text-h2 font-heading font-bold text-ink mt-1">
                              {project.title}
                            </h2>
                          </div>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 rounded-lg border border-border hover:bg-surface-2 transition-colors"
                            aria-label={`Visit ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4 text-ink-secondary" />
                          </a>
                        </div>
                        <p className="text-ink-secondary leading-relaxed mb-5 text-sm">
                          {project.description}
                        </p>
                        <div className="mb-6">
                          <p className="eyebrow text-[10px] mb-2.5">Key Highlights</p>
                          <ul className="grid grid-cols-2 gap-2">
                            {project.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-1.5 text-xs text-ink-secondary">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-0.5 rounded-full bg-surface-2 text-[10px] text-ink-muted border border-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors group/link"
                      >
                        Visit Live Site
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <FadeInView>
            <h2 className="text-h2 font-heading font-bold text-ink mb-4">
              Your Business Could Be Next
            </h2>
            <p className="text-ink-secondary max-w-lg mx-auto mb-8">
              Every site in this portfolio started with a single conversation. Let's start yours.
            </p>
            <Link href="/book-consultation" className="btn-primary inline-flex">
              <span>Book Free Consultation</span>
            </Link>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
