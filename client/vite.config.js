// vite.config.js
import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    proxy: {
      '/server': {
        target: 'https://backenddreampop.onrender.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ''),
      },
      '/products': {
        target: 'https://backenddreampop.onrender.com/',
        changeOrigin: true,
      },
    },
  },
};
