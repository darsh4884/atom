import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],

  build: {
    minify: true,
    sourcemap: true,

    lib: {
      entry: import.meta.dirname + "./index.ts",
      formats: ["es"],
      fileName: "index",
    },

    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
