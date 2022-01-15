<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`transition-all duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`transition-all duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`"
    :href="href"
  >
    <slot>{{ text }}</slot>
  </a>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    },
    to: {
      type: [String, Object],
      default: undefined
    },
    href: {
      type: String,
      default: ''
    },
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