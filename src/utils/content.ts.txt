import type { CollectionEntry, ContentCollectionKey } from "astro:content"
import site from '@/data/site'

export function filterContent<items>(
	items: CollectionEntry<ContentCollectionKey>[],
	{
		filterOutDrafts = true,
		filterOutFuture = true,
		sortByDate = true,
		limit = undefined,
	}: {
		filterOutDrafts?: boolean
		filterOutFuture?: boolean
		sortByDate?: boolean
		limit?: number | undefined
	} = {}
) {
	const filteredContent = items.filter((item) => {
		const { date, draft } = item.data

		// filterOutDrafts if true
		if (filterOutDrafts && draft) return false

		// filterOutFuturePosts if true
		if (filterOutFuture && new Date(date) > new Date()) return false

		return true
	})

	// sortByDate or randomize
	if (sortByDate) {
		filteredContent.sort(
			(a, b) =>
				new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
		)
	} else {
		filteredContent.sort(() => Math.random() - 0.5)
	}

	// limit if number is passed
	if (typeof limit === 'number') {
		return filteredContent.slice(0, limit)
	}

	return filteredContent
}

export function formatDate(date: string | number | Date) {
	return new Date(date).toLocaleDateString(site.language, {
		timeZone: "UTC",
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})
}

export function slugify(text: string) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/-{2,}/g, "-")
		.replace(/^-+/, "")
		.replace(/-+$/, "")
}

export const getSortedPosts = (images: CollectionEntry<"images">[]) =>
	images
		.filter(({ data }) => !data.draft)
		.sort(
			(a, b) =>
				Math.floor(new Date(b.data.date).getTime() / 1000) -
				Math.floor(new Date(a.data.date).getTime() / 1000)
		)
