import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { remarkAlert } from 'remark-github-blockquote-alert';
import react from '@astrojs/react';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

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
    integrations: [react(), mdx(), sitemap()],
    markdown: {
        remarkPlugins: [remarkAlert],
    },
});