<template>
  <NuxtLink tag="a" :to="to" :class="styles">
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
    const styles = "transition-all duration-300 dark:hover:text-white hover:text-gray-900 hover:underline"
    const href = toRef(props, 'href')
    const to = toRef(props, 'to')
    return {
      href,
      to,
      styles,
    }
  }
})
</script>