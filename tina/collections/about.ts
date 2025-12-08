import type { Collection } from 'tinacms'

export const About: Collection = {
    name: 'about',
    label: 'About',
    path: 'src/content/about',
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
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
        },
        {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: false,
        },
        {
            type: 'rich-text',
            label: 'body',
            name: 'Body',
            isBody: true,
            required: true,
        },
    ],
};