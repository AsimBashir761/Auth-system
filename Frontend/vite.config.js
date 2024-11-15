import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration to proxy requests during development
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:8080',  // Backend URL
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      },
      '/products': {
        target: 'http://localhost:8080',  // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
