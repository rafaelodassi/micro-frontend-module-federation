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
      name: 'shell',
      remotes: {
        remoteHeader: 'http://localhost:3001/assets/remoteEntry.js',
        remoteCards: 'http://localhost:3002/assets/remoteEntry.js',
        remoteFooter: 'http://localhost:3003/assets/remoteEntry.js',
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
  resolve: {
    alias: {
      ui: path.resolve(__dirname, '../../packages/ui'),
      context: path.resolve(__dirname, '../../packages/context'),
    },
  },
});
