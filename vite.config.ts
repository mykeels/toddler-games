import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import { VitePWA } from 'vite-plugin-pwa';
import rawPlugin from 'vite-raw-plugin';
import * as pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: process.env.BASE_URL || '/',
    build: {
      target: 'esnext',
      rollupOptions: {
        input: 'index.html',
        output: {
          format: 'esm',
        },
        external: [],
      },
    },
    plugins: [
      react(),
      ...(process.env.STORYBOOK
        ? []
        : [
            VitePWA({
              registerType: 'prompt',
              manifest: {
                name: 'Toddler Games',
                short_name: 'Toddler Games',
                description: 'Toddler Games',
                theme_color: '#BB017A',
                background_color: '#000000',
                display: 'fullscreen',
                categories: ['education', 'game'],
                icons: [
                  {
                    src: './logo.svg',
                    sizes: '192x192',
                    type: 'image/svg',
                  },
                  {
                    src: './logo.svg',
                    sizes: '512x512',
                    type: 'image/svg',
                  },
                  {
                    src: './logo.svg',
                    sizes: '1024x1024',
                    type: 'image/svg',
                  },
                ],
              },
            }),
          ]),
      rawPlugin({
        fileRegex: /\.md$/,
      }),
      federation({
        name: 'toddler-games',
        filename: 'remoteEntry.js',
        exposes: {
          './index': './src/main.mfe.tsx',
          './what-do-you-hear': './src/games/WhatDoYouHear/index.mfe.tsx',
          './read-words': './src/games/ReadWords/index.mfe.tsx',
          './read-word': './src/games/ReadWords/word.mfe.tsx',
          './create-read-word': './src/games/ReadWords/CreateReadWord.mfe.tsx',
          './place-the-letters': './src/games/PlaceTheLetters/index.mfe.tsx',
          './alphabet': './src/Alphabet/index.mfe.tsx',
        },
        shared: ['react', 'react-dom', 'react-router'],
      }),
    ],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
      ...Object.entries(env).reduce((acc: Record<string, string>, [key, value]) => {
        acc[`process.env.${key}`] = JSON.stringify(value);
        return acc;
      }, {}),
    },
  };
});
