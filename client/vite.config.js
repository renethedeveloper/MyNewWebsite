// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ''),
      },
      '/products': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};
