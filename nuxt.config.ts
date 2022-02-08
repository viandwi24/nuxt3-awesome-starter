import { defineNuxtConfig } from 'nuxt3'
import { IntlifyModuleOptions } from '@intlify/nuxt3'
import { VueUseNuxtOptions } from '@vueuse/nuxt'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// types
declare module '@nuxt/schema' {
  interface NuxtConfig {
    vueuse?: VueUseNuxtOptions
    intlify?: IntlifyModuleOptions
  }
}

// metas
const seo = {
  title: 'Nuxt 3 Awesome Starter',
  description:
    'a Nuxt 3 starter template or boilerplate with a lot of useful features. Nuxt3 + Tailwindcss 3',
}
const generateMetaSeo = () => {
  const metas = [
    { key: 'description', content: seo.description },
    { key: 'og:title', content: seo.title },
    { key: 'og:description', content: seo.description },
    { key: 'og:image', content: 'https://nuxt.js.org/img/logo.png' },
    { key: 'og:image:width', content: '1200' },
    { key: 'og:image:height', content: '630' },
    { key: 'og:type', content: 'website' },
  ]
  return metas.map((meta) => ({
    hid: meta.key,
    name: meta.key,
    property: meta.key,
    content: meta.content,
  }))
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // meta
  meta: {
    title: seo.title,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...generateMetaSeo(),
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
    '@vueuse/nuxt',
  ],

  // auto import components
  components: true,

  // vite plugins
  vite: {
    plugins: [
      UnpluginComponentsVite({
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
      fallbackLocale: 'en',
      availableLocales: ['en', 'id', 'ja'],
    },
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },
})
