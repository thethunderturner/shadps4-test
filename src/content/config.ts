import {defineCollection, z} from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(),
            tags: z.array(z.string()),
            image: image(),
        }),
});

export const collections = {
    blog: blogCollection,
};
