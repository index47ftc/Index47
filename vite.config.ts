import {defineConfig} from "vite";
import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    base: process.env.NODE_ENV === 'production' ? '/Index47/' : '/',
    plugins: [
        react(),
        babel({presets: [reactCompilerPreset()]}),
        tailwindcss(),
        cloudflare()
    ]
});