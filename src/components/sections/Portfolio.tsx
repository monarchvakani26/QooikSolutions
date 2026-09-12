"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeInView, StaggerContainer, staggerItem } from "@/components/animations/FadeInView";
import { TextReveal } from "@/components/animations/TextReveal";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    id: "prishcious",
    title: "Prishcious Nails & Academy",
    description:
      "Editorial, high-touch nail salon and academy website featuring a complete online booking system, WhatsApp and Google Calendar integration, and a dedicated training academy section.",
    url: "https://www.prishciousnails.com",
    industry: "Nail Salon & Academy",
    tags: ["Nail Salon", "Booking System", "Admin Dashboard"],
    screenshot: "/images/portfolio/prishcious.png",
  },
  {
    id: "moodita",
    title: "Moodita",
    description:
      "A premium, immersive digital portfolio and creative e-commerce art shop built for Niomi Gada (advocate, artist, and creator), featuring custom art print purchases, recipe guides, and journal publishing.",
    url: "https://moodita.in",
    industry: "Art & E-commerce",
    tags: ["Digital Portfolio", "E-commerce Shop", "Creative Hub"],
    screenshot: "/images/portfolio/moodita.png",
  },
  {
    id: "flowtech",
    title: "Flow Tech Engineers",
    description:
      "Industrial instrumentation company website with product catalog, technical expertise showcase, and lead capture forms.",
    url: "https://flowtechengineers.in",
    industry: "Engineering",
    tags: ["Business Website", "Lead Generation"],
    screenshot: "/images/portfolio/flowtech.png",
  },
  {
    id: "tropical-salon",
    title: "Tropical Salon",
    description:
      "Lush, cinematic unisex salon and spa website featuring immersive visual storytelling, interactive service menus, and appointment booking.",
    url: "https://tropical-salon.vercel.app",
    industry: "Salon & Spa",
    tags: ["Salon & Spa", "Service Menu", "Online Booking"],
    screenshot: "/images/portfolio/tropicalsalon.png",
  },
  {
    id: "hotpsy",
    title: "Hotpsy Cafe",
    description:
      "Premium cafe website with online menu, table reservation system, and atmospheric brand storytelling.",
    url: "https://hotpsy.vercel.app",
    industry: "Cafe",
    tags: ["Cafe", "Menu & Booking"],
    screenshot: "/images/portfolio/hotpsy.png",
  },
  {
    id: "woksterrr",
    title: "Wokster Chinese Corner",
    description:
      "Mumbai street-style Indo-Chinese restaurant website with digital menu, online ordering, and brand personality.",
    url: "https://woksterrr-indo-chinese-restaurant-o.vercel.app",
    industry: "Restaurant",
    tags: ["Restaurant", "Online Ordering"],
    screenshot: "/images/portfolio/woksterrr.png",
  },
  {
    id: "sabkadentist",
    title: "Sabka Dentist",
    description:
      "Dental clinic website with appointment booking, treatment showcase, and patient trust signals. #1 Clinic in Chembur East.",
    url: "https://dentalahh.vercel.app",
    industry: "Healthcare",
    tags: ["Dental", "Appointment Booking"],
    screenshot: "/images/portfolio/sabkadentist.png",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-surface" aria-label="Portfolio">
      <div className="section-container">
        <FadeInView className="text-center mb-12">
          <p className="eyebrow mb-3">Our Work</p>
          <TextReveal
            text="Real websites. Real businesses."
            as="h2"
            className="text-h1 font-heading font-bold text-ink mb-4"
          />
          <p className="text-body-lg text-ink-secondary max-w-xl mx-auto">
            Every project is built from scratch. Here's a selection of sites we've delivered for Indian businesses.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="card overflow-hidden group hover:shadow-card-hover transition-all duration-400"
            >
              {/* Screenshot with browser chrome */}
              <div className="relative">
                {/* Browser chrome */}
                <div className="h-9 bg-surface-2 flex items-center gap-1.5 px-3 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                  <div className="flex-1 mx-2 h-4 rounded-full bg-border flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-ink-faint" />
                    <span className="text-[9px] text-ink-muted truncate">
                      {item.url.replace("https://", "")}
                    </span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.screenshot}
                    alt={`${item.title} website screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface text-ink text-sm font-semibold shadow-card-md hover:shadow-card-hover transition-shadow"
                      aria-label={`Visit ${item.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Site
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <h3 className="font-heading font-semibold text-ink text-lg">{item.title}</h3>
                  <span className="tag shrink-0">{item.industry}</span>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-medium text-ink-muted bg-surface-2 border border-border px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeInView delay={0.2} className="text-center mt-10">
          <Link href="/portfolio" className="btn-text-link group">
            See all projects
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}
