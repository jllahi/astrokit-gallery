/** @type {import("eslint").Config} */
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
    react: false,
    svelte: false,
    stylistic: false,
    // formatters: true,
    ignores: ['.astro', 'dist', 'pnpm-lock.yaml', 'bun.lock'],
  }

  // A11y
  // {
  //     name: 'jsx-a11y',
  //     files: ['**/*.{astro,svelte,tsx,ts}'],
  //     plugins: {
  //         'jsx-a11y': a11y,
  //     },
  //     languageOptions: {
  //         parserOptions: {
  //             ecmaFeatures: {
  //                 jsx: true,
  //             },
  //         },
  //     },
  //     ...a11y.flatConfigs.recommended,
  //     rules: {
  //         ...a11y.configs.recommended.rules,
  //         'jsx-a11y/alt-text': 'error',
  //         'jsx-a11y/prefer-tag-over-role': 'error',
  //     },
  // }
)
