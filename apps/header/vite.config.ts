import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'header',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header',
      },
      shared: [
        'react',
        'react-dom',
        {
          context: {
            requiredVersion: require('../../packages/context/package.json')
              .version,
          },
        },
      ],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      ui: path.resolve(__dirname, '../../packages/ui'),
      'tailwind-config': path.resolve(
        __dirname,
        '../../packages/tailwind-config'
      ),
      context: path.resolve(__dirname, '../../packages/context'),
    },
  },
});
