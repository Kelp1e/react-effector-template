import { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      // For <GridTransition />
      gridTemplateRows: {
        open: "1fr",
        closed: "0fr",
      },
    },
  },
  plugins: [],
} as Config
