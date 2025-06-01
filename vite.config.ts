import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: [
      // ngrok host
      'bright-shoes-shine.loca.lt',
      '8b34-102-89-32-202.ngrok-free.app'
    ]
  }
})
