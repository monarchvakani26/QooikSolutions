import type { Metadata } from "next";
import { fraunces, inter, jetbrainsMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/utils";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/cursor/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Qooik Solutions — Websites & AI Automation for Indian Businesses",
    template: "%s | Qooik Solutions",
  },
  description:
    "Premium website design and AI automation for restaurants, cafes, salons, dental clinics, and more. We build websites that grow Indian small businesses.",
  keywords: [
    "website design India",
    "AI automation India",
    "restaurant website",
    "small business website",
    "web design agency India",
    "WhatsApp automation",
    "digital agency",
    "Qooik Solutions",
  ],
  authors: [{ name: "Qooik Solutions" }],
  creator: "Qooik Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Qooik Solutions — Websites & AI Automation for Indian Businesses",
    description:
      "Premium website design and AI automation for restaurants, cafes, salons, dental clinics, and more.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Qooik Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@QooikSolutions",
    creator: "@QooikSolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-background text-ink font-body antialiased selection:bg-accent-soft selection:text-accent">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
