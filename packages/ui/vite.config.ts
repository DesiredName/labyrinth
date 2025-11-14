import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    dts({
      rollupTypes: true,
      include: ['src'],
      outDir: 'dist',
      logLevel: 'info',
      // tsconfigPath: path.resolve(__dirname, "../../tsconfig.base.json")
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: (format) => `index.${format}.js`,
    },
    minify: 'esbuild',
    sourcemap: process.env.NODE_ENV == 'development',
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        'tailwindcss',
        'tailwind-merge',
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'react-dom',
          'styled-components': 'styled-components',
        },
        assetFileNames: (asset) => {
          if (asset.originalFileName === 'style.css') {
            return 'index.css';
          }
          return asset.name ?? '';
        },
      },
    },
    outDir: 'dist',
  },
});
