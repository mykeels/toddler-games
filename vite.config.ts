import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { VitePWA } from "vite-plugin-pwa";
import * as pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Toddler Games",
        short_name: "Toddler Games",
        description: "Toddler Games",
        theme_color: "#000000",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
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
