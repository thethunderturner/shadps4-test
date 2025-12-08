import type { Collection } from 'tinacms'

export const Quickstart: Collection = {
    name: 'quickstart',
    label: 'Quickstart',
    path: 'src/content/wiki',
    format: 'mdx',
    ui: {
        filename: {
            slugify: ({title}) => {
                return title
                    ?.toLowerCase()
                    ?.split(' ')
                    ?.join('-')
                    ?.normalize('NFD')
                    ?.replace(/[^a-z0-9-]/g, '')
                    .replace(/--/g, '')
                    .slice(0, 80)
                    .replace(/^-|-$/, '');
            },
        },
    },
    fields: [
        {
            isBody: true,
            label: 'Body',
            name: 'body',
            required: true,
            type: 'rich-text',
        },
    ],
};