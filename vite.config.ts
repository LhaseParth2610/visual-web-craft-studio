import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/visual-web-craft-studio/",

  server: {
    host: true,
    port: 8080,
  },

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
