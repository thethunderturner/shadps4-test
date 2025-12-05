import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://thethunderturner.github.io',
    base: '/shadps4-test',
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        svgo: true,
    },
    integrations: [react(), starlight({title: ''})],
});