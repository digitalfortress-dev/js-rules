module.exports = {
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports',
  ],
};
