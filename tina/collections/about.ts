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
            isTitle: true,
            label: 'Title',
            name: 'title',
            required: true,
            type: 'string',
        },
        {
            label: 'Publication Date',
            name: 'pubDate',
            required: false,
            type: 'datetime',
        },
        {
            isBody: true,
            label: 'body',
            name: 'Body',
            required: true,
            type: 'rich-text',
        },
    ],
};