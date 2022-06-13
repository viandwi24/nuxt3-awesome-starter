<script lang="ts" setup>
import { IApp } from '~/utils/app'

const app = useState<IApp>('app')
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

onMounted(() => {
  if (!navbar.value) return
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)
})

const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>

<template>
  <div
    ref="navbar"
    class="backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-900/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-slate-900/[0.5]"
  >
    <div id="navbar-banner" class="banner">
      <slot name="banner" />
    </div>
    <div class="max-w-8xl w-full mx-auto">
      <div class="py-3 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="lg:hidden flex items-center self-center justify-center mr-2"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                aria-hidden="true"
              >
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title">
            <NuxtLink
              tag="a"
              class="mr-3 flex-none overflow-hidden md:w-auto text-md font-bold text-gray-900 dark:text-gray-200"
              :to="{ name: 'index' }"
            >
              <span class="sr-only">home</span>
              <span class="flex items-center">
                <IconSimpleIcons:nuxtdotjs
                  class="inline-block mr-2 text-lg text-green-600"
                />
                {{ app.name }}
              </span>
            </NuxtLink>
          </slot>
          <!-- menu -->
          <slot name="menu" />
          <!-- options:toggle -->
          <div
            v-if="$slots['options']"
            class="flex-1 flex justify-end lg:hidden"
          >
            <button
              class="flex items-center focus:outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions()"
            >
              <span
                class="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                aria-hidden="true"
              >
                <icon-fa-solid:ellipsis-v />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- drawer -->
        <Transition name="slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            class="fixed lg:hidden bg-gray-100 dark:bg-slate-800 pt-12 top-0 left-0 w-screen h-screen z-30 flex flex-col"
          >
            <div class="flex-1 flex flex-col relative overflow-y-auto">
              <slot name="drawer" :toggleDrawer="toggleDrawer" />
            </div>
          </div>
        </Transition>

        <!-- options -->
        <div v-if="showOptions && $slots['options']">
          <slot
            name="options"
            :toggleOptions="toggleOptions"
            :showOptions="showOptions"
          />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-up-enter-from,
.slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: theme('colors.slate.900');
}
html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
