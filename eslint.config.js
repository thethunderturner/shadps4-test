const {defineConfig, globalIgnores} = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const parser = require('astro-eslint-parser');
const js = require('@eslint/js');

const {FlatCompat} = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = defineConfig([
    {
        extends: compat.extends('plugin:astro/recommended'),

        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
            ecmaVersion: 'latest',

            parserOptions: {
                tsconfigRootDir: __dirname,
            },
        },
    },
    {
        files: ['**/*.astro'],

        languageOptions: {
            parser: parser,

            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        },

        rules: {
            'astro/no-set-html-directive': 'error',
        },
    },
    globalIgnores(['**/dist', '**/node_modules', '**/.github', '**/.changeset']),
]);
