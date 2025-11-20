import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    allowedHosts: ['mostashark-gaza.com', 'www.mostashark-gaza.com'],
    hmr: {
      host: "mostashark-gaza.com",  // الافضل استخدام الدومين بدل الـ IP
      port: 5173
    }
  }
})
