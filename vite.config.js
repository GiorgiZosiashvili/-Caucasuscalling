import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              pure: true,
              fileName: false,
              displayName: true,
              namespace: 'Silknet',
              minify: true,
              transpileTemplateLiterals: true,
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      components: `${path.resolve(__dirname, './src/components/')}`,
      reusable: `${path.resolve(__dirname, './src/components/reusable/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
    },
  },
});
