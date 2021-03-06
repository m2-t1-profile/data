export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [

  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // {src: '~/plugins/simpleIcons.js'},
    // {scr: '~/plugins/vue-donut-chart', ssr: false},
    // {scr: '~/plugins/vue-animate-css'},
    '~/plugins/vue-tailwind',
    // '~/plugins/vue-tabs',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'vue-scrollto/nuxt', {duration: 500},
    ],
  ]
  ,
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      // 'Simpleicons',
    ],
    vendor: [],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
  },
};
