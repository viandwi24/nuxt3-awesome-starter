<template>
  <div ref="navbar" class="
    top-0 z-40 w-full backdrop-blur flex-none
    ransition-colors duration-500 lg:z-50
    border-b border-gray-900/10 dark:border-gray-50/[0.2]
    supports-backdrop-blur:bg-white/60 bg-white/[0.7] dark:bg-slate-900/[0.7]
    "
  >
    <div class="max-w-8xl mx-auto">
      <div class="py-4 lg:px-8 mx-4 lg:mx-0">
        <div class="relative flex items-center">
          <!-- title -->
          <NuxtLink tag="a" class="mr-3 flex-none overflow-hidden md:w-auto font-bold text-gray-900 dark:text-gray-200" :to="{ name: 'index' }">
            <span class="sr-only">home</span>
            <span class="flex items-center">
              <IconSimpleIcons:nuxtdotjs class="inline-block mr-2 text-xl text-green-600" />
              {{ app.name }}
            </span>
          </NuxtLink>
          <!-- menu -->
          <div class="relative hidden lg:flex items-center ml-auto">
            <nav class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300">
              <ul class="flex items-center space-x-8">
                <li v-for="(item, i) in menus" :key="i">
                  <Anchor v-if="item.type === 'link'" :to="item.route ? item.route : ''" class="hover:no-underline hover:text-slate-900 hover:dark:text-white">{{ item.text }}</Anchor>
                  <Button v-else-if="item.type === 'button'" :text="item.text" size="xs" class="font-extrabold"  :href="item.href ? item.href : false" />
                </li>
              </ul>
            </nav>
            <!-- theme toggle -->
            <div class="border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]">
              <ThemeToggle />
            </div>
          </div>
          <!-- drawer:toggle -->
          <div class="flex-1 flex justify-end md:hidden">
            <button class="flex items-center focus:outline-none" @click="toggleDrawer">
              <span class="text-gray-600 dark:text-gray-300 text-2xl">
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Teleport v-if="showDrawer" to="#app-after">
    <div class="fixed md:hidden bg-gray-100 dark:bg-slate-800 pt-16 top-0 left-0 w-screen h-screen z-30">
      <div class="px-4 py-2 relative">
        <nav class="text-lg leading-6 font-semibold text-gray-600 dark:text-gray-300">
          <ul class="flex flex-col">
            <li v-for="(item, i) in menus" :key="i" class="flex w-full">
              <Anchor v-if="item.type === 'link'" :to="item.route ? item.route : ''" class="flex-1 pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2] hover:no-underline">{{ item.text }}</Anchor>
              <Button v-else-if="item.type === 'button'" :text="item.text" size="xs" class="flex-1 font-extrabold"  :href="item.href ? item.href : false" />
            </li>
          </ul>
        </nav>
        <!-- theme toggle -->
        <div class="mt-6 text-sm font-bold">Theme</div>
        <div class="mt-2">
          <ThemeToggle type="select-box" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { IApp } from "~~/utils/app"

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

export default defineComponent({
  setup() {
    const app = useState<IApp>('app')
    const navbar = ref(null)
    const showDrawer = ref(false)
    const menus: IMenuItem[] = reactive([
      { type: 'link', text: 'Note', route: { name: 'note' } },
      { type: 'link', text: 'Test', route: { name: 'test' } },
      { type: 'link', text: 'About', route: { name: 'about' } },
      { type: 'button', text: 'Github', href: 'https://github.com/viandwi24' },
    ])

    onMounted(() => {
      const { onScroll } = stickyOnScroll(navbar.value as HTMLElement, 0)
      setTimeout(() => onScroll(), 50)
    })
    
    const toggleDrawer = () => showDrawer.value = !showDrawer.value

    return {
      app,
      navbar,
      showDrawer,
      toggleDrawer,
      menus,
    }
  }
})

function stickyOnScroll(el: HTMLElement, offset: number) {
  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > offset) {
      el.classList.add('sticky')
    } else {
      el.classList.remove('sticky')
    }
  }

  // lifecycle hooks
  window.addEventListener('scroll', onScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    onScroll,
  }
}
</script>