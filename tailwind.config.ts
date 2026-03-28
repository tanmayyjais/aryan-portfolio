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
        canvas: "var(--canvas)",
        paper: "var(--paper)",
        ember: "var(--ember)",
        gold: "var(--gold)",
        mist: "var(--mist)",
        shadow: "var(--shadow)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      boxShadow: {
        glow: "0 0 100px rgba(181, 133, 87, 0.16)"
      },
      animation: {
        grain: "grain 8s steps(12) infinite",
        pulseSlow: "pulseSlow 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite"
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-3%, -4%)" },
          "20%": { transform: "translate(2%, 2%)" },
          "30%": { transform: "translate(-2%, 3%)" },
          "40%": { transform: "translate(3%, -2%)" },
          "50%": { transform: "translate(-3%, 4%)" },
          "60%": { transform: "translate(4%, 2%)" },
          "70%": { transform: "translate(2%, -3%)" },
          "80%": { transform: "translate(-4%, -2%)" },
          "90%": { transform: "translate(3%, 4%)" }
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.03)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        }
      }
    }
  },
  plugins: []
};

export default config;
