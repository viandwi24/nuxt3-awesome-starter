<template>
  <div class="text-2xl font-semibold mb-1">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>
