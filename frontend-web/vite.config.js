import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {          // <-- TAMBAHKAN BARIS INI
    port: 8005,      // <-- TENTUKAN PORT BARU DI SINI
  }                  // <-- TAMBAHKAN BARIS INI
})