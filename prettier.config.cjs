/** @type {import("prettier").Config} */
const config = {
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    filepath: 'src/**/*.{js,jsx,ts,tsx}',
}

module.exports = config
