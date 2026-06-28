import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        cream: "var(--cream)",
        gold: "var(--gold)",
        crimson: "var(--crimson)",
        panel: "var(--panel)",
        muted: "var(--muted)",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        gold: "0 0 60px rgba(201, 169, 110, 0.18)",
        "gold-lg": "0 0 120px rgba(201, 169, 110, 0.14)",
        crimson: "0 0 60px rgba(139, 26, 26, 0.25)",
      },
      animation: {
        grain: "grain 0.85s steps(6) infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -5%)" },
          "20%": { transform: "translate(-7%, 3%)" },
          "30%": { transform: "translate(4%, -10%)" },
          "40%": { transform: "translate(-3%, 8%)" },
          "50%": { transform: "translate(-6%, 4%)" },
          "60%": { transform: "translate(7%, -1%)" },
          "70%": { transform: "translate(-1%, 6%)" },
          "80%": { transform: "translate(2%, 12%)" },
          "90%": { transform: "translate(-4%, 3%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 169, 110, 0.1)" },
          "50%": { boxShadow: "0 0 60px rgba(201, 169, 110, 0.35)" },
        },
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
      },
    },
  },
  plugins: [],
};

export default config;
