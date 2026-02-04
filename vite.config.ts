import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Importante: define o caminho base para o repositório no GitHub Pages
  base: '/Or-amento/',
  build: {
    outDir: 'dist',
  },
});