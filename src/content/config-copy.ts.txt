import { defineCollection, z } from "astro:content"
// import { rssSchema } from '@astrojs/rss';

const images = defineCollection({
	type: "content",
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			// slug: z.string().optional(),
			title: z.string().trim().max(180),
			description: z.string().trim().max(256).optional(),
			location: z.string().trim().max(256).optional(),
			author: z.string().optional(),
			image: image().refine((img) => img.width >= 1024, {
				message: "Cover image must be at least 1024 pixels wide!",
			}),
			date: z.coerce.date(),
			updated: z.coerce.date().optional(),
			// categories: z.array(z.string()).default(['Uncategorized']),
			// categories: reference("categories"),
			// tags: z.array(reference("tags")).optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
			draft: z.boolean().optional(),
			featured: z.boolean().optional(),
			license: z.string().optional(),
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
