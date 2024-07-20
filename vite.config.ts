import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          "@babel/typescript",
          "patronum/babel-preset",
          "atomic-router/babel-preset",
        ],
        plugins: [
          [
            "effector/babel-plugin",
            { addLoc: true, factories: ["effector-forms"] },
          ],
        ],
      },
    }),
    svgr({ include: "**/*.svg" }),
  ],
  server: { watch: { usePolling: true } },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
})
