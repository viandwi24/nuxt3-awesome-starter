<template>
  <div ref="navbar" class="
    top-0 z-40 w-full backdrop-blur flex-none
    ransition-colors duration-500 lg:z-50
    border-b border-gray-900/10 dark:border-gray-50/[0.2]
    supports-backdrop-blur:bg-white/60 bg-transparent
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
                <li><Anchor :to="{ name: 'note' }">Note</Anchor></li>
                <li><Anchor :to="{ name: 'about' }">About</Anchor></li>
                <li><Button text="Github" size="xs" class="font-extrabold" href="https://github.com/viandwi24" /></li>
              </ul>
            </nav>
            <!-- theme toggle -->
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IApp } from "~~/utils/app"

export default defineComponent({
  setup() {
    const app = useState<IApp>('app')
    const navbar = ref(null)

    onMounted(() => {
      stickyOnScroll(navbar.value as HTMLElement, 0)
    })    

    return {
      app,
      navbar,
    }
  }
})

function stickyOnScroll(el: HTMLElement, offset: number) {
  const onScroll = (e) => {
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
    console.log("123")
  })
}
</script>