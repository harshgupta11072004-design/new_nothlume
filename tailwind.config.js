/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          50: "#080808",
          100: "#0D0D0D",
          200: "#111111",
          300: "#151515",
        },
        mute: "#A8A8B3",
        line: "#2A2A2A",
      },
      boxShadow: {
        glow: "0 0 60px rgba(99, 140, 255, 0.18)",
        "glow-sm": "0 0 24px rgba(94, 234, 212, 0.12)",
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #7C9CFF 0%, #6B7CFF 45%, #5EEAD4 100%)",
        "hero-glow":
          "radial-gradient(ellipse at 70% 20%, rgba(124, 156, 255, 0.16), transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(94, 234, 212, 0.08), transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
