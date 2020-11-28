export default {
  server: {
    host: '192.168.1.11',
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-tailwind-composition-api-responsive-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  env: {
    STRIPE_PUBLISHABLE_KEY:
      'pk_test_51Hq3hiGSEIx7qQ7Je8d8nNSKyNDfJAPYkbqgVrE3YQrak37ednOxRS02r4Ab0CfQWs9N9jqhexVsNB7dRAtjFnYp00WfA81RHL',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/fontawesome.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/composition-api',
  ],

  generate: {
    // choose to suit your project
    interval: 2000,
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
