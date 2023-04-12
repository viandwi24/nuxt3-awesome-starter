export default defineAppConfig({
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
          menus: [
            { type: 'link', title: 'Blank', to: { name: 'blank' } },
            { type: 'link', title: 'Post', to: { name: 'post' } },
            { type: 'link', title: 'Test', to: { name: 'test' } },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
          ],
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
  },
})
