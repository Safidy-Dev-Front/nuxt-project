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
      fontFamily: {
        sans: ['Graphik-regular', 'sans-serif', ...defaultTheme.fontFamily.sans],
        'bold': ['Graphik-bold', 'sans-serif'],
        'light': ['Graphik-light', 'sans-serif']
      },
      margin:{
        '-top-banner': '-202px',
        '-60':'60px'
      },
    },backgroundColor: theme => ({
      ...theme('colors'),
      'default': '#374754',
      'primary': '#2091F9',
     }),
    fontSize:{
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': ['1.75rem',{
          lineHeight: '2.5rem',

        }],
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': ['4.625rem',{
          lineHeight: '5.625rem',
        }],
       '7xl': '5rem',
    },
    minHeight:{
      'banner':'885px'
    }
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
          '.header__nav-network': {
            maxWidth: '170px'
          },
          '.container-medium': {
            maxWidth: '826px',
            padding: '1.875rem'
          }
      })
    }
  ],
}

