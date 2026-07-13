// Shared TypeScript types for Qooik Solutions website

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "web" | "ai" | "growth";
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  url: string;
  industry: string;
  screenshot?: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  content: string;
  rating: number;
  isSample: true; // Always true — never remove this flag
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  tags: string[];
  content?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
