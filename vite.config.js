import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,              // يسمح بالوصول من الخارج
    port: 5173,              // نفس المنفذ الافتراضي
    strictPort: true,        // استخدم نفس المنفذ فقط
    hmr: {
      host: "45.130.104.108", // ضع هنا IP السيرفر
      port: 5173
    }
  }
})