import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ← this enables Tailwind processing
  ],
  server: {
    port: 5173,
    open: true,
  },
})
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
>>>>>>> 11e47f4bf0e5ef48ff0786190f95e1efafc27cec
