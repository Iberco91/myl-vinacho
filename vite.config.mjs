import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        champions: resolve(__dirname, 'champions.html'),
        licho: resolve(__dirname, 'licho.html'),
        carlicho: resolve(__dirname, 'carlicho.html'),
        informacioncartas: resolve(__dirname, 'informacioncartas.html'),
        aclaraciones: resolve(__dirname, 'aclaraciones.html'),
        otros: resolve(__dirname, 'otros.html'),
      },
    },
  },
})