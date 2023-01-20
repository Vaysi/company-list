import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint --ext .js,.jsx,.ts,.tsx --fix src",
      },
    }),
  ],
});
