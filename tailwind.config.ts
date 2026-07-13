import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — light theme
        background: "#FAFAF8",
        surface:    "#FFFFFF",
        "surface-2": "#F4F4F1",
        "surface-3": "#EEEDE9",

        // Ink (text) tokens
        ink:            "#0F1115",
        "ink-secondary": "rgba(15,17,21,0.62)",
        "ink-muted":    "rgba(15,17,21,0.38)",
        "ink-faint":    "rgba(15,17,21,0.14)",

        // Border
        border:       "rgba(15,17,21,0.08)",
        "border-mid": "rgba(15,17,21,0.14)",
        "border-strong": "rgba(15,17,21,0.22)",

        // Single accent color — electric blue
        accent:      "#2554FF",
        "accent-hover": "#1A44E8",
        "accent-soft": "#EEF2FF",

        // Kept for the ONE permitted gradient (hero underline + pricing card border)
        // Not to be used as fills anywhere else
        "violet-accent": "#7C3AED",
      },
      fontFamily: {
        heading: ["var(--font-fraunces)", ...fontFamily.serif],
        mono:    ["var(--font-jetbrains-mono)", ...fontFamily.mono],
        body:    ["var(--font-inter)", ...fontFamily.sans],
        sans:    ["var(--font-inter)", ...fontFamily.sans],
      },
      fontSize: {
        display: [
          "clamp(2.8rem, 7vw, 6.5rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        "display-sm": [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.015em" },
        ],
        h1: [
          "clamp(1.8rem, 4vw, 3.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.4rem, 3vw, 2.25rem)",
          { lineHeight: "1.2", letterSpacing: "-0.015em" },
        ],
        h3: [
          "clamp(1.1rem, 2vw, 1.4rem)",
          { lineHeight: "1.35", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body:      ["1rem",     { lineHeight: "1.7" }],
        caption:   ["0.875rem", { lineHeight: "1.5" }],
        xs:        ["0.75rem",  { lineHeight: "1.4" }],
      },
      backgroundImage: {
        // The ONE permitted gradient — used only for hero word underline
        // and the "most popular" pricing card border. Nowhere else.
        "gradient-accent": "linear-gradient(135deg, #2554FF, #7C3AED)",
        // Subtle pattern for hero bg
        "grid-pattern":
          "linear-gradient(rgba(15,17,21,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,17,21,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        // Realistic elevation shadows — no neon glows
        card:      "0 1px 3px rgba(15,17,21,0.07), 0 4px 16px rgba(15,17,21,0.05)",
        "card-md": "0 2px 6px rgba(15,17,21,0.08), 0 8px 24px rgba(15,17,21,0.06)",
        "card-hover": "0 4px 8px rgba(15,17,21,0.08), 0 16px 40px rgba(15,17,21,0.10)",
        "card-xl": "0 8px 16px rgba(15,17,21,0.10), 0 32px 64px rgba(15,17,21,0.12)",
        // For portfolio collage screenshots
        screenshot: "0 8px 32px rgba(15,17,21,0.18), 0 2px 8px rgba(15,17,21,0.10)",
        // Accent shadow for the CTA button
        "btn-accent": "0 4px 16px rgba(37,84,255,0.28)",
      },
      animation: {
        "fade-in":        "fadeIn 0.5s ease forwards",
        "slide-up":       "slideUp 0.6s ease forwards",
        "float":          "float 6s ease-in-out infinite",
        "float-delayed":  "float 6s ease-in-out infinite 2s",
        "float-delayed2": "float 6s ease-in-out infinite 3.5s",
        "marquee":        "marquee 30s linear infinite",
        "marquee-reverse":"marquee 30s linear infinite reverse",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--float-rotate, 0deg))" },
          "50%":      { transform: "translateY(-12px) rotate(var(--float-rotate, 0deg))" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "6rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
