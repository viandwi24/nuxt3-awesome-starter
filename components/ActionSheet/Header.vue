<template>
  <div class="text-xs font-bold text-center mb-2">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    text: {
      type: String,
      default: '',
    },
  },
})
</script>