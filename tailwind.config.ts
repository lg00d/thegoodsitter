
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FEC6A1",
          foreground: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#E5DEFF",
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#FDE1D3",
          foreground: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#F1F0FB",
          foreground: "#6B7280",
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-slight": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "wag": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        "paw-print": {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "50%": { transform: "scale(1.2) rotate(5deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        }
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-slow": "fade-in-slow 0.8s ease-out",
        "bounce-slight": "bounce-slight 3s ease-in-out infinite",
        "wag": "wag 1s ease-in-out infinite",
        "paw-print": "paw-print 2s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#F1F0FB',
            borderRadius: '100vh',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#6BA5E7',
            borderRadius: '100vh',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
