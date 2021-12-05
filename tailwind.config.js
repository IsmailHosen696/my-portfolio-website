const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      blue: colors.blue,
      white: colors.white,
      yellow: colors.yellow,
      purple: colors.purple,
      red: colors.red,
      green: colors.green
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
