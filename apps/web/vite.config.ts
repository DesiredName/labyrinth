import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  build: {
    sourcemap: process.env.NODE_ENV == 'development',
  },
  plugins: [tailwindcss(), react(),],
  resolve: {
    alias: {
      "@ui": path.resolve(__dirname, "../../packages/ui"),
      "@utils": path.resolve(__dirname, "../../packages/utils/src")
    }
  }
});
