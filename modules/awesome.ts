import { existsSync, statSync } from 'fs'
import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'Nuxt 3 Awesome Starter Kit Module',
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // example: merge tailwindcss config
    //@ts-ignore
    nuxt.hook('tailwindcss:config', (config) => {
      // todo: merge config
      return config
    })

    // example: another configs files


    // layers
    for (const layer of nuxt.options._layers) {

      // stores autoimports
      const storesPath = resolver.resolve(layer.cwd, 'stores')
      if (existsSync(storesPath) && statSync(storesPath).isDirectory()) {
        addImportsDir(storesPath)
      }
    }
  }
})
