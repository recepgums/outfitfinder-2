const axios = require('axios')
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Closet Finder |  Identifying Celebrity Outfits',
    description: "Closet Finder identifies the outfits and make up products worn by celebrities and shows you where you can buy their clothes",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'},
      {
        crossorigin: "anonymous",
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-element-ui',
    '@nuxt/image',
    '@nuxtjs/device',
    'nuxt-lazy-load',

    '@nuxtjs/sitemap'
  ],
  loading:{color:'deeppink'},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  googleAnalytics: {
    id: 'G-22417X0359'
  },

  sitemap: {
    path: '/sitemap.xml',
    routes: () => {
      let arr =  axios.get('https://api.closetfinder.com/api/spot').then(resp => {
        return resp.data.data.map(spot => `/spot/${spot.slug}`)
      })

      let arr2 =  axios.get('https://api.closetfinder.com/api/celebrity').then(resp => {
        return resp.data.data.map(spot => `/celebrity/${spot.slug}`)
      })

      return arr
    }
  },

  image: {
    format: 'webp'
  },

  elementUI: {
    components: [
      'Button', 'DatePicker', 'Carousel', 'CarouselItem',
      'Col', 'Row', 'Card', 'Image', 'Tag'
    ]
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://127.0.0.1:8000/api/'
    baseURL: 'http://192.168.1.105:8000/api/'
  },

  device: {
    refreshOnResize: true
  }
}
