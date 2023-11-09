import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  publicDir: false,
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.{js,jsx}'],
      exclude: [],
    }),
  ],
});
