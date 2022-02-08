import {
  defineNuxtModule,
  addServerMiddleware,
  resolvePath,
  requireModule,
} from '@nuxt/kit'
import { withTrailingSlash } from 'ufo'
import chalk from 'chalk'
import consola from 'consola'

const logger = consola.withScope('tailwind-viewer')

export default defineNuxtModule({
  meta: {
    name: 'tailwind-viewer',
    version: '1.0.0',
    configKey: 'tailwind-viewer',
  },
  defaults: {
    configPath: 'tailwind.config.js',
  },
  async setup(options, nuxt) {
    if (nuxt.options.dev) {
      const configPath = await resolvePath(options.configPath)
      const tailwindConfig = requireModule(configPath, { clearCache: true })
      const path = '/_tailwind/'
      const createServer = await import(
        'tailwind-config-viewer/server/index.js'
      ).then((r) => r.default || r)
      const { withoutTrailingSlash } = await import('ufo')
      const _viewerDevMiddleware = createServer({
        tailwindConfigProvider: () => tailwindConfig,
      }).asMiddleware()
      const viewerDevMiddleware = (req, res) => {
        if (req.originalUrl === withoutTrailingSlash(path)) {
          res.writeHead(301, { Location: withTrailingSlash(req.originalUrl) })
          res.end()
        }
        _viewerDevMiddleware(req, res)
      }
      addServerMiddleware({ path, handler: viewerDevMiddleware })
      nuxt.hook('listen', () => {
        const url = `http://localhost:${nuxt.options.server.port}${path}`
        const listenInfo = `${chalk.green(
          'Tailwind Config Viewer'
        )}: ${chalk.cyan(url)}`

        // log
        logger.info(listenInfo)
      })
    }
  },
})
