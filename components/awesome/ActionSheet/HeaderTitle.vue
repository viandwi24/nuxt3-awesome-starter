<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-xs font-bold text-center text-gray-800 dark:text-gray-400">
    <slot>
      <span>{{ text }}</span>
    </slot>
  </div>
</template>
