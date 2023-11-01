// see all availabe configs here: https://github.com/viandwi24/nuxt3-awesome-starter/blob/v2/app.config.ts
export default defineAppConfig({
  awesome: {
    name: 'Nuxt 3 Awesome Starter Demo',
    description:
      'a demo from starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.',
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/viandwi24',
        medium: 'https://viandwi24.medium.com',
        website: 'https://viandwi24.site',
      },
    },
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: false,
        secondaryActionButton: {
          title: 'See Github',
        }
      }
    },
    project: {
      links: {
        github: 'https://github.com/viandwi24/nuxt3-awesome-starter',
      },
    },
  },
})
