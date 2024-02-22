// import standardConfig from 'prettier-config-standard'
/** @type {import("prettier").Config} */
export default {
	// ...standardConfig,
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'none',
	semi: false,
	printWidth: 100,
	astroAllowShorthand: true,
	// pluginSearchDirs: false,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
		'prettier-package-json',
		'prettier-plugin-tailwindcss'
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
