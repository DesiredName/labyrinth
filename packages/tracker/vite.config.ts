import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      include: ['src'],
      outDir: 'dist',
      logLevel: 'info',
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
    outDir: 'dist',
  },
});
