import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            tags: z.array(z.string()),
            image: image().optional(),
            category: z.string().optional(),
        }),
});

export const collections = {
    blog: blogCollection,
};
