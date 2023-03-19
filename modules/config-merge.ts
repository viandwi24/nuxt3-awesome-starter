import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'Config Merging for Nuxt 3 Awesome Starter',
  },
  setup(options, nuxt) {
    // example: merge tailwindcss config
    //@ts-ignore
    nuxt.hook('tailwindcss:config', (config) => {
      // todo: merge config
      return config
    })

    // example: another configs files
  }
})
