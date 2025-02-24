/** @type {import('prettier').Config} */

const prettierConfig = {
  arrowParens: 'always',
  astroAllowShorthand: true,
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: 'lf', // end_of_line = lf
  jsxSingleQuote: false,
  printWidth: 100, // default: 80
  quoteProps: 'consistent',
  semi: false, // default: true
  singleQuote: true, // default: false
  tabWidth: 2, // indent_size = 2
  tailwindAttributes: ['class:list', 'className'],
  tailwindFunctions: ['clsx', 'cn', 'tw', 'tv'],
  trailingComma: 'es5',
  useTabs: false, // indent_style = space
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
