import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const reactSvgPlugin = require("vite-plugin-svg-react").default;
console.log(reactSvgPlugin);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactSvgPlugin({
      useSVGO: true, // optimize svg by SVGO
    }),
    react(),
  ],
});
