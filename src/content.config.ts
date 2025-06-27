import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { DateTime } from "luxon";

const postCollection = defineCollection({
  loader: glob({pattern: "**/*.{md,mdx}", base: "./src/posts"}),
  schema: ({ image }) => z.object({
    slug: z.string(),
    title: z.string(),
    date: z.string().transform((date) => DateTime.fromISO(date, { zone: 'utc' }).toISO() as string),
    description: z.string().optional(),
    meta_description: z.string().optional(),
    excerpt: z.string().optional(),
    published: z.boolean().default(true),
    comments: z.boolean().default(true),
    sharing: z.boolean().default(true),
    noindex: z.boolean().default(false),
    image: image().optional(),
    prev: z.string().optional(),
    next: z.string().optional(),
    first: z.string().optional(),
    last: z.string().optional(),
    categories: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'post': postCollection,
};
