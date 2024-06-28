/** @type {import('prettier').Config} */

const prettierConfig = {
	astroAllowShorthand: true,
	bracketSpacing: true,
	endOfLine: 'lf', // end_of_line = lf
	printWidth: 80, // default: 80
	semi: false, // default: true
	singleQuote: true, // default: false
	useTabs: true, // indent_style = space
	tabWidth: 2, // indent_size = 2
	trailingComma: 'es5',
	tailwindAttributes: ['class:list', 'cn'],
	tailwindFunctions: ['class:list', 'tv', 'cn'],
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-organize-imports',
		'prettier-plugin-packagejson',
		'prettier-plugin-tailwindcss',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
export default prettierConfig
