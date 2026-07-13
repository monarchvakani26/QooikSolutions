import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import AIAutomation from "@/components/sections/AIAutomation";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import Statistics from "@/components/sections/Statistics";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Qooik Solutions — Websites & AI Automation for Indian Businesses",
  description:
    "Premium website design and AI automation for restaurants, cafes, salons, dental clinics, and small businesses across India. Book a free consultation today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Testimonials />
      <AIAutomation />
      <WhyUs />
      <Process />
      <Industries />
      <Statistics />
      <FAQ />
      <Contact />
    </>
  );
}
