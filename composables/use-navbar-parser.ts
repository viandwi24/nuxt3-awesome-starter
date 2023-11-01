import type { RouteLocationRaw } from '#vue-router'

export function useNavbarParser() {
  return {
    parseMenuTitle: function parseMenuTitle(
      title?: string | ((nuxt: any) => string),
    ) {
      return typeof title === 'function' ? title(useNuxtApp()) : title || ''
    },
    parseMenuRoute: function parseMenuRoute(
      to?: RouteLocationRaw | ((nuxt: any) => RouteLocationRaw),
    ) {
      return typeof to === 'function' ? to(useNuxtApp()) : to
    },
  }
}
