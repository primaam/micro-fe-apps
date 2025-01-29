import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: "module1",
            filename: "remoteEntry.js",
            exposes: {
                "./Button": "./src/components/Button.jsx",
            },
            shared: ["react", "react-dom"],
        }),
    ],
    build: {
        modulePreload: false,
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        port: 5174,
    },
});
