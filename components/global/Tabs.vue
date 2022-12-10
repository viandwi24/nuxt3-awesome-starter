<script lang="ts" setup>
// types
interface TabItem {
  name: string
  title: string
}

// composables
const slots = useSlots()
defineEmits(['click'])

// vars
const tabs = ref<HTMLDivElement>()
const tabHeaderIndicator = ref<HTMLDivElement>()
const tabItems = ref<TabItem[]>([])
const activeTab = ref<string>()

// provides
provide('activeTab', activeTab)

// methods
const updateIndicator = () => {
  if (!tabs.value || !tabHeaderIndicator.value) return

  // dom
  const dom = tabHeaderIndicator.value
  // get header tab item dom
  const currentActiveIndex = tabItems.value.findIndex(
    ({ name }) => name === activeTab.value
  )
  const tabItem = tabs.value.querySelectorAll('.tabs-header-item')[
    currentActiveIndex
  ] as HTMLDivElement
  if (!tabItem) return

  // set dom position and size to tab item
  const padding = 24
  const diff = 30
  dom.style.width = `${tabItem.offsetWidth + diff}px`
  dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`
}

// watchs
watch(tabItems, () => updateIndicator())
watch(activeTab, () => updateIndicator())

// lifecycle
onBeforeMount(() => {
  if (slots.default) {
    slots.default().forEach((element, i) => {
      const tab = element.props as TabItem
      tabItems.value.push(tab)
      if (i === 0) activeTab.value = tab.name
    })
  }
})
onMounted(() => {
  ;(async () => {
    while (
      typeof tabHeaderIndicator.value === 'undefined' ||
      typeof tabs.value === 'undefined'
    ) {
      await new Promise((resolve) => setTimeout(resolve, 10))
    }
    setTimeout(() => {
      updateIndicator()
    }, 350)
  })()
})
</script>

<template>
  <div ref="tabs" class="tabs">
    <ClientOnly>
      <div
        class="tabs-header relative overflow-hidden flex space-x-6 text-sm font-bold text-gray-300 bg-primary-700/45 rounded-t-lg px-5 py-3"
      >
        <div
          v-for="item in tabItems"
          :key="item.name"
          :class="{
            'tabs-header-item': true,
            'text-white': activeTab === item.name,
          }"
          :style="{
            zIndex: 2,
          }"
          @click="activeTab = item.name"
        >
          <a href="#" @click.prevent="$emit('click')">
            {{ item.title }}
          </a>
        </div>
        <span
          ref="tabHeaderIndicator"
          class="absolute flex h-full top-0 left-0 p-1 py-1.5 overflow-hidden transition-all duration-300"
          :style="{ zIndex: 1 }"
        >
          <span class="flex-1 bg-slate-500/40 rounded-lg" />
        </span>
      </div>
    </ClientOnly>
    <div
      class="tabs-body relative text-slate-800 dark:text-white bg-gray-200 dark:bg-slate-800 shadow rounded-b-lg"
    >
      <slot />
    </div>
  </div>
</template>
