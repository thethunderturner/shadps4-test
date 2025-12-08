import { CATEGORIES } from '@/data/categories'
import type { Collection } from 'tinacms'

export const BlogPost: Collection = {
    name: 'post',
    label: 'Blog Post',
    path: 'src/content/blog',
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
            description: 'The image used for the cover of the post',
            label: 'Cover Image',
            name: 'heroImage',
            required: false,
            type: 'image',
        },

        {
            description: 'Select an category for this post',
            label: 'Category',
            name: 'category',
            options: [...CATEGORIES],
            required: true,
            type: 'string',
        },
        {
            description: 'A short description of the post',
            label: 'description',
            name: 'description',
            required: true,
            type: 'string',
        },
        {
            label: 'Publication Date',
            name: 'pubDate',
            required: true,
            type: 'datetime',
        },
        {
            description: 'If this is checked the post will not be published',
            label: 'Draft',
            name: 'draft',
            type: 'boolean',
        },
        {
            description: 'Tags for this post',
            label: 'Tags',
            list: true,
            name: 'tags',
            required: false,
            type: 'string',
            ui: {
                component: 'tags',
            },
        },
        {
            isTitle: true,
            label: 'Title',
            name: 'title',
            required: true,
            type: 'string',
        },
        {
            isBody: true,
            label: 'body',
            name: 'Body',
            required: true,
            templates: [
                {
                    fields: [
                        {
                            label: 'Cite',
                            name: 'cite',
                            required: false,
                            type: 'string',
                        },
                        {
                            label: 'Quote',
                            name: 'children',
                            type: 'rich-text',
                        },
                    ],
                    label: 'Blockquote',
                    name: 'Blockquote',
                },
                {
                    fields: [
                        {
                            label: 'Title (Optional)',
                            name: 'title',
                            required: false,
                            type: 'string',
                        },
                        {
                            label: 'Youtube URL',
                            name: 'url',
                            type: 'string',
                        },
                    ],
                    label: 'Youtube Embed',
                    name: 'YoutubeEmbed',
                },
            ],
            type: 'rich-text',
        },
    ],
};
