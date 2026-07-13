import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const siteConfig = {
  name: "Qooik Solutions",
  description:
    "Premium website design and AI automation services for Indian small businesses. We build websites that grow businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qooiksolutions.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "qooiksolutions@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 89282 44779",
  whatsapp: process.env.NEXT_PUBLIC_WA_NUMBER ?? "918928244779",
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://x.com/QooikSolutions",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/qooiksolutions/",
  },
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
};
