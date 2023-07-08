import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Nuxt 3 Awesome Starter',
      description:
        'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
      project: {
        links: {
          github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
        },
      },
      layout: {
        page: {
          navbar: {
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'Nuxt&nbsp;3 Awesome Starter',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'viandwi24',
        links: {
          github: 'https://github.com/viandwi24',
          medium: 'https://viandwi24.medium.com',
          website: 'https://viandwi24.site',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
