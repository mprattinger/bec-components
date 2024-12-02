import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from "vite-plugin-dts";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "./lib/index.ts"),
            name: "bec-components",
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom", "tailwindcss"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    tailwindcss: "tailwindcss",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [react(), dts({ rollupTypes: true })],
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});
