<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-xs text-center text-gray-700 dark:text-gray-500">
    <slot>
      <span>{{ text }}</span>
    </slot>
  </div>
</template>
