import Link from "next/link";
import Image from "next/image";
import { X, Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/utils";

const footerLinks = {
  "Quick Links": [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Website Design", href: "/services" },
    { label: "AI Automation", href: "/ai-automation" },
    { label: "SEO & Growth", href: "/services#growth" },
    { label: "Industries", href: "/industries" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border" aria-label="Footer">
      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-5" aria-label="Qooik Solutions home">
              <Image
                src="/images/logo.png"
                alt="Qooik Solutions"
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-ink-secondary leading-relaxed max-w-xs mb-6">
              Premium website design and AI automation for Indian small businesses.
              We build websites that grow businesses.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-2.5 mb-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-ink-secondary hover:text-ink transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-accent" />
                WhatsApp Us
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {/* X / Twitter */}
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Qooik Solutions on X"
                className="p-2 rounded-lg bg-surface border border-border text-ink-muted hover:text-ink hover:border-border-mid transition-all duration-150"
              >
                <X className="w-4 h-4" />
              </a>
              {/* Instagram */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Qooik Solutions on Instagram"
                className="p-2 rounded-lg bg-surface border border-border text-ink-muted hover:text-ink hover:border-border-mid transition-all duration-150"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="eyebrow mb-4">{category}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-secondary hover:text-ink transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-muted">
            © {new Date().getFullYear()} Qooik Solutions. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Made with care in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
