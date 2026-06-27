import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        cobalt: "#2757c6",
        aqua: "#11a4c9",
        clay: "#d67a31",
        moss: "#2f7d5b",
        paper: "#f8faf7",
      },
      boxShadow: {
        soft: "0 18px 55px rgba(16, 32, 51, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
