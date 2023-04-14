<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'

const { awesome } = useAppConfig()
const $screen = useAwesomeScreen()

const menus = computed(() => awesome?.layout?.page?.navbar?.menus || [])
</script>

<template>
  <header
    class="flex sticky backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
  >
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
        :class="{ 'divide-x divide-slate-500': menus.length > 0 }"
      >
        <div class="flex space-x-4 text-sm items-center">
          <template v-for="(item, i) in menus">
            <template v-if="item?.type === 'link'">
              <NuxtLink :key="i" :to="item.to" #="{ isActive }">
                <span
                  :class="{
                    'text-slate-900 dark:text-slate-100 font-bold': isActive,
                    'text-slate-700 dark:text-slate-300': !isActive,
                  }"
                  >{{ item?.title || '' }}</span
                >
              </NuxtLink>
            </template>
            <template v-if="item?.type === 'button'">
              <AwesomeButton
                :key="i"
                :text="item?.title || ''"
                size="xs"
                :to="item.to"
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
            class="text-gray-400 hover:text-gray-100"
            :href="awesome?.project?.links?.github"
          >
            <Icon name="mdi:github-face" />
          </AwesomeLink>
        </div>
      </div>
      <!-- drawer -->
      <div
        v-else
        class="flex space-x-4 items-center"
        :class="{ 'divide-x divide-slate-500': menus.length > 0 }"
      >
        <div class="pl-4 flex space-x-3 text-xl">
          <AwesomeLink
            v-if="awesome?.project?.links?.github"
            class="text-gray-400 hover:text-gray-100"
            @click.prevent="() => {}"
          >
            <Icon name="uil:bars" />
          </AwesomeLink>
        </div>
      </div>
    </div>
  </header>
</template>
