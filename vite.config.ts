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
      include: ['react', 'react-dom', '@mui/material', 'react-cookie-consent']
    },

    define: {
      __APP_VERSION__: JSON.stringify(pkg.version)
    },

    resolve: {
      alias: {
        // MUI v9.1.0 imports 'react-transition-group/TransitionGroupContext' (bare subpath).
        // RTG 4.x has no `exports` field so Node ESM can't resolve directory imports.
        // Alias to the explicit ESM file; ssr.noExternal ensures the server build
        // routes MUI through Vite's resolver where this alias applies.
        'react-transition-group/TransitionGroupContext':
          'react-transition-group/esm/TransitionGroupContext.js'
      }
    },

    // SSR configuration
    ssr: {
      noExternal: ['react-helmet-async', 'react-cookie-consent', '@mui/material']
    },

    // SSG options
    ssgOptions: {
      formatting: 'minify'
    }
  };
});
