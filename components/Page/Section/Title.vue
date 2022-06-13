<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-2xl font-semibold mb-2">
    <slot>{{ text }}</slot>
  </div>
</template>
