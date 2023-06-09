// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // modules:['nuxt-purgecss'], 
    css: ['~/assets/css/main.scss'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      plugins:[{src:'~/plugins/gsap', ssr:true}],
      build: {
        transpile: ['gsap'],
      },
})
