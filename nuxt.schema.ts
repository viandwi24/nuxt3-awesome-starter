import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Nuxt 3 Awesome Starter',
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
          year: 2022,
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
