import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Configura la carpeta de salida
    rollupOptions: {
      external: ['bootstrap/dist/css/bootstrap.min.css'], // Externaliza Bootstrap
    },
  },
})
