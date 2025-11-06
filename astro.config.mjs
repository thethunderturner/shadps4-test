import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://thethunderturner.github.io',
    base: '/shadps4-test',
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react()],
});
