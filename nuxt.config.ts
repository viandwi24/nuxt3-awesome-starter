import { defineNuxtConfig, NuxtConfig } from 'nuxt3'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { IntlifyModuleOptions } from '@intlify/nuxt3'

export interface NuxtIntlifyConfig {
  intlify: IntlifyModuleOptions
}

export type NuxtConfigMerged = NuxtConfig & NuxtIntlifyConfig

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    title: 'Nuxt 3 Awesome Starter',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt3 Awesome Starter',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // css
  css: ['~/assets/sass/app.scss', '~/assets/sass/vendor.scss'],

  // plugins
  plugins: ['~/plugins/navbar.ts'],

  // build
  build: {
    transpile: ['@headlessui/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  // build modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    'unplugin-icons/nuxt',
    '@nuxtjs/svg',
    '@intlify/nuxt3',
  ],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      ViteComponents({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },

  // localization - i18n config
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'en',
    },
  },

  // merge IntlifyModuleOptions to nuxt config
} as NuxtConfigMerged)
