import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'], // Incluye archivos .JPG como activos
});
