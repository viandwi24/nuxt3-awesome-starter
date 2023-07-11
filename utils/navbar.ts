import { RouteLocationRaw } from '#vue-router'

export function parseMenuTitle(title?: string | ((nuxt: any) => string)) {
  return typeof title === 'function' ? title(useNuxtApp()) : title || ''
}
export function parseMenuRoute(
  to?: RouteLocationRaw | ((nuxt: any) => RouteLocationRaw)
) {
  return typeof to === 'function' ? to(useNuxtApp()) : to
}
