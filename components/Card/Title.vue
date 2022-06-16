<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-xl font-semibold mb-2">
    <slot>{{ text }}</slot>
  </div>
</template>
