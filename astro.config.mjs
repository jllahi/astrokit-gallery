import mkcert from 'vite-plugin-mkcert'
// import sentry from '@sentry/astro'
// import spotlightjs from '@spotlightjs/astro'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
// import sitemap from '@astrojs/sitemap'
// import robotsTxt from 'astro-robots-txt'
import icon from 'astro-icon'
import debugcss from 'astro-debugcss'
import metaTags from 'astro-meta-tags'

// https://astro.build/config
export default defineConfig({
	site: 'https://astrokit-gallery.vercel.app',
	integrations: [
		// sentry(),
		// spotlightjs(),
		tailwind(),
		// sitemap(),
		// robotsTxt(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
				// ri: [
				// 	'github-line',
				// 	'twitter-x-line',
				// 	'calendar-2-line',
				// 	'price-tag-3-line',
				// ],
				// uis: ['*'],
			},
		}),
		debugcss(),
		metaTags(),
	],
	// image: {
	//   service: squooshImageService()
	// }
	vite: {
		plugins: [mkcert()],
	},
})
