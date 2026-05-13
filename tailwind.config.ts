import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flow: {
          // Primary orange/gold — FLOW lettering in logo
          orange:       "#E8890A",
          "orange-hover": "#C97408",
          // Secondary teal/cyan — sky in logo
          teal:         "#16C7D9",
          "teal-hover": "#0FAEC0",
          // Sunset red-orange — gradient in logo
          sunset:       "#E84D2A",
          // Backgrounds
          black:        "#070707",   // deepest background
          dark:         "#0E0E0E",   // section backgrounds
          card:         "#141414",   // card surfaces
          "card-hover": "#1A1A1A",
          // Text
          cream:        "#F5E7D0",   // warm off-white — readable on dark
          muted:        "#A89880",   // muted cream for secondary text
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)",    "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter:  "-0.03em",
        widest:   "0.2em",
      },
      boxShadow: {
        orange: "0 4px 24px rgba(232,137,10,0.30)",
        "orange-lg": "0 8px 40px rgba(232,137,10,0.40)",
        teal:   "0 4px 24px rgba(22,199,217,0.25)",
        "teal-lg": "0 8px 40px rgba(22,199,217,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.55s ease forwards",
        "fade-in": "fadeIn 0.45s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
