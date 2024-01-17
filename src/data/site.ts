interface Site {
	title: string
	description: string
	language: string
	logo?: {
		src: "./src/assets/icons/logo.svg",
		alt: string
	}
	opengraph: {
		title: string
		description: string
		image?: string
	}
}

export const site: Site = {
	title: "AstroKit Gallery",
	description: "We are all made from stars",
	language: "es-ES",
	opengraph: {
		title: "AstroKit Gallery",
		description: "We are all made from stars",
		image: "./src/assets/images/astrokit-gallery-og.jpg"
	}
}

export default site