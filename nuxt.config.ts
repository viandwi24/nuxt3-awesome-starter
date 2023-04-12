import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: [
    // chore
    '@nuxtjs/eslint-module',
    // styling & ui
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    // management
    '@pinia/nuxt',

    // todo: feat/localization
    // '@nuxtjs/i18n'
  ],

  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],

  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
    {
      prefix: 'Awesome',
      path: resolve('./components/awesome'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // todo: feat/localization
  // module::i18n
  // i18n: {
  //   strategy: 'no_prefix',
  //   defaultLocale: 'en',
  //   langDir: 'locales',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //   },
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     fallbackLocale: 'en',
  //     redirectOn: 'root',
  //   },
  //   locales: [
  //     {
  //       code: 'en', // English
  //       iso: 'en-US',
  //       name: 'English',
  //       file: 'en.yml',
  //     },
  //     {
  //       code: 'id', // Indonesia
  //       iso: 'id-ID',
  //       name: 'Indonesia',
  //       file: 'id.yml',
  //     }
  //   ]
  // },
})
