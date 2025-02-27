import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import type { IncomingMessage, ServerResponse } from "http";

const reloadEndpointPlugin = (): Plugin => ({
  name: "vite-plugin-reload-endpoint",
  configureServer(server) {
    server.middlewares.use((req: IncomingMessage & { url?: string }, res: ServerResponse, next) => {
      if (req.url === "/__fullReload") {
        server.hot?.send({ type: "full-reload" });
        res.end("Full reload triggered");
      } else {
        next();
      }
    });
  },
});
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      remotes: {
        remoteApp: 'http://localhost:5001/assets/remoteEntry.js',
      },
 
      shared: ["react", "react-dom"],
    }),
    reloadEndpointPlugin(),
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
