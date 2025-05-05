import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stringPlugin from 'vite-plugin-string'; // Use the default export

export default defineConfig({
  plugins: [
    react(),
    stringPlugin({
      include: '**/*.md', // This line tells Vite to treat .md files as text
    }),
  ],
});