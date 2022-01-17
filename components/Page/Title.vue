<template>
  <div class="text-4xl font-bold">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})
</script>