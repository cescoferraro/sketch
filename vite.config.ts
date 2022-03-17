import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactSvgPlugin from "vite-plugin-svg-react";

console.log(reactSvgPlugin);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sketch/",
  plugins: [
    reactSvgPlugin({
      useSVGO: true, // optimize svg by SVGO
    }),
    react(),
  ],
});
