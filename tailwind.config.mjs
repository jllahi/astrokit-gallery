import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans],
        heading2: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
        logo: ['Inter Variable', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'font-color': 'var(--font-color)',
        'background-color': 'var(--background-color)',
      },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
  plugins: [],
}
