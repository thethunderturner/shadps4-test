import {defineCollection, z} from 'astro:content';
import {CATEGORIES} from '../data/categories.ts';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
            title: z.string().max(80),
            description: z.string(),
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            tags: z.optional(z.array(z.string())),
            heroImage: z.optional(image()),
            draft: z.boolean().default(false),
            category: z.enum(CATEGORIES)
        }),
});

const aboutCollection = defineCollection({
    type: 'content',
    schema: () =>
        z.object({
            title: z.string(),
            lastUpdated: z.date().optional(),
        }),
});

export const collections = {
    blog: blogCollection,
    about: aboutCollection
};
