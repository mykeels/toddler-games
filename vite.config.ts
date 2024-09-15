import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
});
