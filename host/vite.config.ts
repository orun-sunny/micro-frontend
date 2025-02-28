import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js", // Expose the remoteEntry at this path
      exposes: {
        "./Button": "./src/shared/Button.tsx",
        "./Card": "./src/shared/Card.tsx",
        "./Footer": "./src/shared/Footer/Footer.tsx",
        "./Header": "./src/shared/Header/Header.tsx",
        "./Features": "./src/components/Features/Features.tsx",

      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5173,
  },
});
