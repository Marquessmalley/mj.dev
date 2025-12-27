/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        midnight: {
          50: "#f0f4f8",
          100: "#d9e2ec",
          200: "#bcccdc",
          300: "#9fb3c8",
          400: "#829ab1",
          500: "#627d98",
          600: "#486581",
          700: "#334e68",
          800: "#243b53",
          900: "#1a242f",
          950: "#111921",
        },
        teal: {
          primary: "#00d4aa",
          secondary: "#00b894",
          muted: "rgba(0, 212, 170, 0.1)",
          glow: "rgba(0, 212, 170, 0.3)",
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 4s ease-in-out infinite",
        "float-fast": "float 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px -5px rgba(0, 212, 170, 0.3)" },
          "50%": { boxShadow: "0 0 40px -5px rgba(0, 212, 170, 0.5)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern":
          "linear-gradient(rgba(0, 212, 170, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 212, 170, 0.3)",
        "glow-lg": "0 0 60px -15px rgba(0, 212, 170, 0.4)",
        card: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
