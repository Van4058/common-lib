import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts()
    ],
    build: {
        lib: {
            entry: "src/index.ts",
            name: "CommonLib",
            // formats: ["es", "cjs"],
            fileName: (format) => `common-lib.${format}.js`,
        },
        rollupOptions: {
            external: ["dayjs", "node_modules"], // không bundle
        },
    },
})
