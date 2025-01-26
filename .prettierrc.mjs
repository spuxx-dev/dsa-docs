/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
  lineWidth: 120,
  trailingComma: 'all',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
