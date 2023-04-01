/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily:{
          sans:['Graphik-regular','sans-serif', ...defaultTheme.fontFamily.sans],
          'bold':['Graphik-bold','sans-serif'],
          'light':['Graphik-light', 'sans-serif']
        }
    },
    },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1210px',
          },
          '@screen xl': {
            maxWidth: '1210px',
          },
        },
        '.header__nav-network':{
          maxWidth: '170px'
        }
      })
    }
  ],
}

