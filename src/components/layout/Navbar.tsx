"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-surface/95 backdrop-blur-sm border-b border-border shadow-card"
            : "bg-transparent"
        )}
      >
        <nav className="section-container flex items-center justify-between h-[72px]" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" aria-label="Qooik Solutions home">
            <Image
              src="/images/logo.png"
              alt="Qooik Solutions"
              width={200}
              height={60}
              className="h-12 w-auto object-contain rounded-lg"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-ink-secondary hover:text-ink rounded-lg hover:bg-surface-2 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors duration-150"
            >
              Contact
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-accent hover:bg-accent-hover transition-colors duration-150 shadow-btn-accent"
              id="nav-cta"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-surface-2 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-ink/20 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface border-l border-border shadow-card-xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[72px] border-b border-border">
                <span className="font-heading font-bold text-lg text-ink">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-surface-2 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-lg text-base font-medium text-ink-secondary hover:text-ink hover:bg-surface-2 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-ink-secondary hover:text-ink hover:bg-surface-2 transition-colors"
                >
                  Contact
                </Link>
              </nav>
              <div className="px-5 py-5 border-t border-border">
                <Link
                  href="/book-consultation"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-accent hover:bg-accent-hover transition-colors shadow-btn-accent"
                >
                  Book Free Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
