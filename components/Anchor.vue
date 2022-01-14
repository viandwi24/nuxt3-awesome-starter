<template>
  <NuxtLink tag="a" :to="to" class="transition-all duration-300 dark:hover:text-white hover:text-gray-900 hover:underline">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    class: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: '#'
    },
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  setup(props) {
    const href = toRef(props, 'href')
    const to = toRef(props, 'to')
    return {
      href,
      to,
    }
  }
})
</script>