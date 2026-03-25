// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
    site: 'https://ubzrst.github.io',
    integrations: [
        mermaid({ theme: 'default', autoTheme: true })
    ],
});
