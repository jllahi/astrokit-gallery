// import sentry from '@sentry/astro'
// import spotlightjs from '@spotlightjs/astro'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import metaTags from 'astro-meta-tags'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	site: 'https://astrokit-gallery.vercel.app',
	integrations: [
		// sentry(),
		// spotlightjs(),
		tailwind(),
		// robotsTxt(),
		icon({
			iconDir: 'src/assets/icons',
			include: {
				heroicons: ['sun', 'moon'],
			},
		}),
		metaTags(),
	],
})
