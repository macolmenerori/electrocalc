import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  version: string;
};

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

    esbuild: isProd ? { drop: ['console', 'debugger'] } : {},

    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild',
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

    define: {
      __APP_VERSION__: JSON.stringify(pkg.version)
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
