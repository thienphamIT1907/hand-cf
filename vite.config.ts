import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'postcss-nesting';
import { resolve } from 'path';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: false }),
    react(),
    viteTsconfigPaths(),
    AutoImport({
      dts: './src/@types/auto-imports.d.ts',
      imports: ['react'],
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },

  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [postcssNesting(), tailwindcss()],
    },
  },
  resolve: {
    alias: [
      { find: '~', replacement: resolve(__dirname, './node_modules') },
      { find: '@root', replacement: resolve(__dirname, '.') },
    ],
  },
  server: {
    port: 6300,
  },
});
