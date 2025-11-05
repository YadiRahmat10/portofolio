// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import path from 'path'

// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   build: {
//     outDir: 'dist', // direktori output build
//     assetsDir: 'assets', // folder aset statis
//     rollupOptions: {
//       input: 'index.html', // pastikan file utama benar
//     },
//   },
//   base: './', // penting agar path relatif di Vercel
//   server: {
//     host: true,
//     port: 5173,
//   },
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // direktori output build
    assetsDir: 'assets', // folder aset statis
    rollupOptions: {
      input: 'index.html', // pastikan file utama benar
    },
  },
  server: {
    host: true,
    port: 5173,
  },
})
