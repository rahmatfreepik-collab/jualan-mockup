import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    produk: collection({
      label: 'Produk Mockup',
      slugField: 'title',
      // Menggunakan struktur folder rapi per produk
      path: 'src/content/produk/*',
      // 👇 INI SAKLARNYA: Kita paksa Keystatic memproduksi file .md murni
      format: { contentField: 'content' }, 
      schema: {
        title: fields.slug({ name: { label: 'Judul Produk' } }),
        price: fields.number({ label: 'Harga (Rp)' }),
        category: fields.select({
          label: 'Kategori',
          options: [
            { label: 'Device', value: 'Device' },
            { label: 'Apparel', value: 'Apparel' },
            { label: 'Stationery', value: 'Stationery' }
          ],
          defaultValue: 'Device'
        }),
        gumroadUrl: fields.text({ label: 'Link Gumroad' }),
        image: fields.image({
  label: 'Gambar Produk Mockup',
  // 👇 Ini penting agar gambar otomatis masuk ke folder public Astro kamu
  directory: 'public/images/produk', 
  publicPath: '/images/produk/',
}),
        content: fields.mdx({
          label: 'Deskripsi Produk',
        }),
      },
    }),
  },
});