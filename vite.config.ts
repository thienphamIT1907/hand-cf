import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'postcss-nesting';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
  ],

  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        relativeUrls: true,
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
