import type { NuxtApp } from 'nuxt/schema'
import type { RouteLocationRaw } from '#vue-router'

export interface AwesomeLayoutPageNavbarMenuDropdownItem {
  type?: 'link'
  title?: string | ((nuxt: NuxtApp) => string)
  to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
}

export interface AwesomeLayoutPageNavbarMenu {
  type?: 'link' | 'button' | 'dropdown'
  title?: string | ((nuxt: NuxtApp) => string)
  to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
  children?: AwesomeLayoutPageNavbarMenuDropdownItem[]
}
