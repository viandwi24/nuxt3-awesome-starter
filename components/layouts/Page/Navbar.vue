<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'

const { awesome } = useAppConfig()
const $screen = useAwesomeScreen()
const nuxtApp = useNuxtApp()

const menus = computed(() => awesome?.layout?.page?.navbar?.menus || [])

// drawer
const showDrawer = ref(false)

const parseMenuTitle = (title?: string | ((nuxt: any) => string)) =>
  typeof title === 'function' ? title(nuxtApp) : title || ''
const parseMenuRoute = (
  to: RouteLocationRaw | ((nuxt: any) => RouteLocationRaw)
) => (typeof to === 'function' ? to(nuxtApp) : to)
</script>

<template>
  <header
    class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5]"
  >
    <!-- content -->
    <div
      class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4"
    >
      <!-- title -->
      <div>
        <slot name="title">
          <NuxtLink to="/" class="font-bold text-lg text-primary-500">
            <Icon
              name="simple-icons:nuxtdotjs"
              class="font-black text-xl font-mono mr-2 inline-block"
            />
            <span class="capitalize">{{ awesome.name }}</span>
          </NuxtLink>
        </slot>
      </div>
      <!-- menus -->
      <div
        v-if="$screen.higherThan('md', $screen.current.value)"
        class="flex space-x-4 items-center"
        :class="{ 'divide-x divide-gray-500': menus.length > 0 }"
      >
        <div class="flex space-x-4 text-sm items-center">
          <!-- dynamic menus -->
          <template v-for="(item, i) in menus">
            <template v-if="item?.type === 'link'">
              <NuxtLink :key="i" :to="parseMenuRoute(item.to)" #="{ isActive }">
                <span
                  :class="{
                    'text-gray-900 dark:text-gray-100 font-bold': isActive,
                    'text-gray-700 dark:text-gray-300': !isActive,
                  }"
                  >{{ parseMenuTitle(item?.title) }}</span
                >
              </NuxtLink>
            </template>
            <template v-if="item?.type === 'button'">
              <AwesomeButton
                :key="i"
                :text="parseMenuTitle(item?.title)"
                size="xs"
                :to="parseMenuRoute(item.to)"
              />
            </template>
          </template>
        </div>
        <!-- others -->
        <div class="pl-4 flex space-x-3 text-xl">
          <!-- todo: feat/localization -->
          <!-- <AwesomeLink class="text-gray-400 hover:text-gray-100">
            <Icon name="la:language" />
          </AwesomeLink> -->
          <LayoutPageNavbarDropdownThemeSwitcher />
          <AwesomeLink
            v-if="awesome?.project?.links?.github"
            class="dark:text-gray-400 text-gray-600"
            :href="awesome?.project?.links?.github"
          >
            <Icon name="mdi:github-face" />
          </AwesomeLink>
        </div>
      </div>
      <!-- drawer:btn -->
      <div
        v-else
        class="flex space-x-4 items-center"
        :class="{ 'divide-x divide-gray-500': menus.length > 0 }"
      >
        <div class="pl-4 flex space-x-3 text-xl">
          <AwesomeLink
            v-if="awesome?.project?.links?.github"
            class="text-gray-400 hover:text-gray-100"
            @click.prevent="() => (showDrawer = !showDrawer)"
          >
            <Icon name="uil:bars" />
          </AwesomeLink>
        </div>
      </div>
    </div>
    <!-- misc -->
    <!-- drawer -->
    <AwesomeActionSheet
      v-if="!$screen.higherThan('md', $screen.current.value) && showDrawer"
      @close="() => (showDrawer = false)"
    >
      <AwesomeActionSheetGroup>
        <AwesomeActionSheetHeader>
          <AwesomeActionSheetHeaderTitle text="Menu" />
        </AwesomeActionSheetHeader>
        <AwesomeActionSheetItem>
          <div
            class="flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center"
          >
            <!-- dynamic menus -->
            <template v-for="(item, i) in menus">
              <template v-if="item?.type === 'link'">
                <NuxtLink
                  :key="i"
                  :to="parseMenuRoute(item.to)"
                  #="{ isActive }"
                  class="w-full py-2"
                >
                  <span
                    :class="{
                      'text-gray-900 dark:text-gray-100 font-bold': isActive,
                      'text-gray-700 dark:text-gray-300': !isActive,
                    }"
                    >{{ parseMenuTitle(item?.title) }}</span
                  >
                </NuxtLink>
              </template>
              <template v-if="item?.type === 'button'">
                <AwesomeButton
                  :key="i"
                  :text="parseMenuTitle(item?.title)"
                  size="xs"
                  :to="parseMenuRoute(item.to)"
                  class="w-full"
                />
              </template>
            </template>
          </div>
        </AwesomeActionSheetItem>
        <AwesomeActionSheetItem class="flex flex-col">
          <div class="pb-2">
            <div class="mt-2 mb-2 text-sm font-bold capitalize">
              Change Team
            </div>
            <LayoutPageNavbarDropdownThemeSwitcher type="select-box" />
          </div>
        </AwesomeActionSheetItem>
      </AwesomeActionSheetGroup>
      <AwesomeActionSheetGroup>
        <AwesomeActionSheetItemButton
          class="flex justify-center items-center text-base space-x-2"
        >
          <Icon name="mdi:github-face" class="text-lg font-bold" />
          <span class="text-sm">Github</span>
        </AwesomeActionSheetItemButton>
      </AwesomeActionSheetGroup>
    </AwesomeActionSheet>
  </header>
</template>
