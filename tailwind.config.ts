import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9d2fda",
        secondary: "#d42881",
        "primary-dark": "#7a22b0",
        "secondary-dark": "#a81f65",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #9d2fda 0%, #d42881 100%)",
        "gradient-brand-soft": "linear-gradient(135deg, rgba(157,47,218,0.08) 0%, rgba(212,40,129,0.08) 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a0a0f 0%, #12071e 50%, #1a0a14 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "line-grow": "lineGrow 1s ease forwards",
        "counter": "counter 2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      boxShadow: {
        "brand": "0 4px 32px rgba(157,47,218,0.18)",
        "brand-lg": "0 8px 48px rgba(157,47,218,0.22)",
        "card": "0 2px 24px rgba(0,0,0,0.07)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
