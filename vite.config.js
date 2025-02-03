import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/Portfolio",
  assetsInclude: ['**/*.glb'],
  server: {
    hmr: {
      overlay: false,
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Adjust if needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) return 'three'; // Separate chunk for 'three' library
            return 'vendor'; // All other node_modules in a 'vendor' chunk
          }
        },
      },
    },
  },
});
