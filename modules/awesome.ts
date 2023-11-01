import { existsSync, statSync } from 'fs'
import {
  useNuxt,
  defineNuxtModule,
  createResolver,
  addImportsDir,
} from '@nuxt/kit'
import resolveConfig from 'tailwindcss/resolveConfig'
import type { Config as TailwindConfig } from 'tailwindcss'

export default defineNuxtModule({
  meta: {
    name: 'Nuxt 3 Awesome Starter Kit Module',
  },
  async setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // example: merge tailwindcss config
    // tailwindcss:get_config
    let tsConfigs = {}
    for (const layer of nuxt.options._layers) {
      let isJs = true
      let storesPath = resolver.resolve(layer.cwd, 'tailwind.config.js')
      if (!existsSync(storesPath) || !statSync(storesPath).isFile()) {
        storesPath = resolver.resolve(layer.cwd, 'tailwind.config.ts')
        isJs = false
      }

      if (existsSync(storesPath) && statSync(storesPath).isFile()) {
        // get config
        const configPath = resolver.resolve(storesPath)
        const config = await import(configPath)
        tsConfigs = Object.assign(tsConfigs, config.default)
      }
    }
    const tsConfig = resolveConfig(tsConfigs as any) as TailwindConfig

    // todo: merge config
    // @ts-ignore
    nuxt.hook('tailwindcss:config', (config) => {
      return config
    })

    // example: another configs files

    // stores autoimports
    // * this is fixed for newest pinia
    // : per -layers autoimports
    for (const layer of nuxt.options._layers) {
      const storesPath = resolver.resolve(layer.cwd, 'stores')
      if (existsSync(storesPath) && statSync(storesPath).isDirectory()) {
        addImportsDir(storesPath)
      }
    }
  },
})
