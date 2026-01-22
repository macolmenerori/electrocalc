import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [
      react(),
      viteTsconfigPaths() // Handles @ → src/ alias from tsconfig
    ],

    server: {
      port: 3000,
      open: false,
      host: true
    },

    preview: {
      port: 3000
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProd,
          drop_debugger: isProd
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('@mui/material') || id.includes('@mui/icons-material')) {
                return 'mui-vendor';
              }
            }
            return undefined;
          }
        }
      },
      chunkSizeWarningLimit: 600
    },

    publicDir: 'public',

    optimizeDeps: {
      include: ['react', 'react-dom', '@mui/material']
    },

    // SSR configuration
    ssr: {
      noExternal: ['react-helmet-async']
    },

    // SSG options
    ssgOptions: {
      formatting: 'minify'
    }
  };
});
