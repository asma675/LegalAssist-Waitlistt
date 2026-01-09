/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7ff",
          100: "#efefff",
          200: "#dedcff",
          300: "#c5c2ff",
          400: "#a5a0ff",
          500: "#7b72ff",
          600: "#5a43ff",
          700: "#4a2fe6",
          800: "#3e29b8",
          900: "#2f1f7d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)",
        glow: "0 0 0 1px rgba(99, 102, 241, 0.25), 0 18px 55px rgba(99, 102, 241, 0.18)",
        "glow-lg": "0 0 0 1px rgba(99, 102, 241, 0.35), 0 25px 80px rgba(99, 102, 241, 0.28)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(40%)" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
