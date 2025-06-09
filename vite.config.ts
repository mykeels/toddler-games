import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import rawPlugin from 'vite-raw-plugin';
import * as pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Toddler Games",
        short_name: "Toddler Games",
        description: "Toddler Games",
        theme_color: "#BB017A",
        background_color: "#000000",
        display: "fullscreen",
        categories: ["education", "game"],
        icons: [
          {
            src: "./logo.svg",
            sizes: "192x192",
            type: "image/svg",
          },
          {
            src: "./logo.svg",
            sizes: "512x512",
            type: "image/svg",
          },
          {
            src: "./logo.svg",
            sizes: "1024x1024",
            type: "image/svg",
          },
        ],
      },
    }),
    rawPlugin({
      fileRegex: /\.md$/,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
});
