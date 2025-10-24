import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ["src"],
      outDir: "dist",
      logLevel:'info',
      tsconfigPath: path.resolve(__dirname, "../../tsconfig.base.json")
    })
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`
    },
    minify: 'esbuild',
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: { 
          react: 'react',
          'react-dom': 'react-dom',
          'styled-components': 'styled-components'
        }
      }
    },
    outDir: "dist"
  }
});
