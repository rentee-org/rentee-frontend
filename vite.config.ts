import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  define: {
    'process.env': {},
  },
  server: {
    allowedHosts: [
      // ngrok host
      'bright-shoes-shine.loca.lt',
      '8b34-102-89-32-202.ngrok-free.app'
    ],
    proxy: {
      '/auth/register': {
        target: 'https://graceful-luck-production.up.railway.app/docs',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/auth/, '/auth/register'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/app/components'),
      '@utils': path.resolve(__dirname, 'src/lib/utils'),
      '@ui': path.resolve(__dirname, 'src/app/components/ui'),
      '@lib': path.resolve(__dirname, 'src/common/lib'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@marketing': path.resolve(__dirname, 'src/marketing'),
    },
  },
})
// vite.config.ts