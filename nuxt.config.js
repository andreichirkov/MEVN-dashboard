export default {
  server: {
    port: 8000, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    // timing: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mevn-dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // './assets/styles/global.scss'
    { src: './assets/styles/global.scss', lang: 'scss'}
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axiosport.js',
    '@/plugins/formGenerator.js',
    '@/plugins/vee-validate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  styleResources: {
    scss: [
      './assets/styles/colors.scss',
    ]
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          //10 секунд для тестирования
          maxAge: 1800,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints: {
          user: false,
          refresh: {
            url: 'auth/refresh',
            method: 'post',
          },
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'accessToken'
          },
          logout: {
            url: 'auth/logout',
            method: 'post',
          }
        }
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NUXT_APP_BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    //указание что конкретно помещать в билд
    //чтобы правильно забрал кусочек файла и восстановил зависимости внутри плагина
    transpile: ['vee-validate/dist/rules']
  }
}
