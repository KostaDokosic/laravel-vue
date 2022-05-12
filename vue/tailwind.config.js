
// tailwind.config.js
module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/,
        /tooltip/,
        /popover/,
        /notification/,
      ],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // ...
}