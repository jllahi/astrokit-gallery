import { defineCollection, z } from 'astro:content'
// import { rssSchema } from '@astrojs/rss';

const images = defineCollection({
	type: 'data',
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			// slug: z.string().optional(),
			title: z.string().trim().max(180),
			description: z.string().trim().max(256).optional(),
			image: image().refine((img) => img.width >= 1024, {
				message: 'Cover image must be at least 1024 pixels wide!',
			}),
		}),
})

// const links = defineCollection({
//   type: "data",
//   schema: z.object({
//     title: z.string().optional(),
//     description: z.string().optional(),
//     url: z.string().url().optional(),
//   }),
// })

export const collections = { images }
