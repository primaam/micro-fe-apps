import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "host",
            remotes: {
                module1: "http://localhost:5174/assets/remoteEntry.js",
                module2: "http://localhost:5175/assets/remoteEntry.js",
            },
            shared: ["react", "react-dom"],
        }),
    ],
});
