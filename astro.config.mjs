import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // Menggunakan adapter Vercel
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  // Vercel serverless mode untuk mendukung fitur Keystatic
  output: 'server', 
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    mdx(),
    keystatic(),
  ],
});