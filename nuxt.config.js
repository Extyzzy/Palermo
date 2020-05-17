import ru from './i18n/ru-ru/index.js'
import ro from './i18n/ro-ro/index.js'
import en from './i18n/en-us/index.js'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Palermo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap' }
    ]
  },
  router: {
    middleware: ['sub-domain-redirect']
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  babel: {
    presets: [
      'es2015',
      'stage-0'
    ],
    plugins: [
      'transform-runtime'
    ]
  },
  plugins: [
    { src: '~/plugins/i18n.js' },
    { src: '~/plugins/owl.js', ssr: false },
    { src: '~plugins/vue-js-modal' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix',
        defaultLocale: 'ru',
        defaultLocaleRouteNameSuffix: 'default',
        rootRedirect: 'ru',
        locales: [
          'en',
          'ro',
          'ru'
        ],
        vueI18n: {
          fallbackLocale: 'ru',
          messages: { ru, en, ro }
        }
      }
    ],
    'nuxt-lazy-load',
    'nuxt-svg-loader',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],
  styleResources: {
    scss: [
      'assets/scss/theme/_colors.scss',
      'assets/scss/theme/_font-styles.scss',
      'assets/scss/_reset.scss'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // baseURL: 'http://backend-dev.palermo.md/api'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: `${process.env.API_URL}auth/login`, method: 'post', propertyName: 'access_token' },
          logout: { url: `${process.env.API_URL}auth/logout`, method: 'post' },
          user: { url: `${process.env.API_URL}auth/me`, method: 'post', propertyName: false }
        },
        // tokenRequired: true,
        tokenType: 'Bearer'
      }
    },
    redirect: false
  }
}
