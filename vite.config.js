import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://127.0.0.1:5000", // Your local backend
//         changeOrigin: true,             // Handle CORS issues
//         secure: false                   // If using HTTPS locally
//       },
//     },
//   },
  build: {
    outDir: "dist", // Explicitly define the output directory
  },
  plugins: [react()],
});
