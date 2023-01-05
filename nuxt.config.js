export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' },
      { crossorigin:"anonymous", rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css' }
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
    '@nuxtjs/robots',


    '@nuxtjs/sitemap'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },
  googleAnalytics: {
    id: 'G-22417X0359'
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: () => `https://closetfinder.com/sitemap.xml`
  },

  sitemap: {
    path:'sitemap.xml',
    hostname: 'https://closetfinder.com',
    gzip: true,
    routes: [
      '/',
      '/spot/2',
      {
        url: '/page/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z'
      }
    ]
  },

  image: {
    format: 'webp',
    domains: ['dijitaluzmaniniz.com'],
    /*    alias: {
          unsplash: 'https://dijitaluzmaniniz.com'
        },*/
    provider: 'ipx'
  },

  elementUI: {
    components: [
      'Button', 'DatePicker', 'Carousel', 'CarouselItem',
      'Col','Row','Card','Image'
    ]
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://dijitaluzmaniniz.com/api/',
  }
}
