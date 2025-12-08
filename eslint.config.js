import { defineConfig } from "eslint/config";
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default defineConfig([
    {
        ignores: ['**/dist', '**/node_modules', '**/.github', '**/.changeset', '**/.astro', 'tina/'],
    },
    js.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ["**/*.astro"],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
                extraFileExtensions: [".astro"],
            },
        },
        rules: {
            "astro/no-set-html-directive": "error",
        },
    },
]);