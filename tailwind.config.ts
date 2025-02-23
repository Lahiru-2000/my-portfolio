import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        times: ['Times New Roman', 'Times', 'serif'],
        georgia: ["Georgia", "serif"],
        calibri: ["Calibri", "sans-serif"],
        futura: ["Futura", "sans-serif"],
      },
      screens: {
        xsm: "360px",
      },
    },
  },
  plugins: [],
} satisfies Config;
