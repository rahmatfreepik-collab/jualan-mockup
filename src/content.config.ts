import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  'produk': defineCollection({
    // 👇 SAPU JAGAT: Astro otomatis membaca file .md MAUPUN .mdx tanpa pilih kasih
    loader: glob({ 
      pattern: '*.{md,mdx}', 
      base: './src/content/produk' 
    }),
    schema: z.object({
      title: z.string(),
      price: z.number(),
      category: z.string().optional(),
      gumroadUrl: z.string().optional(),
      image: z.string().optional(),
    }),
  }),
};