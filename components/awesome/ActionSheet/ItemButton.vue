<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    class="px-4 py-2 text-center flex items-center justify-center active:bg-gray-700/[0.5] hover:bg-gray-700/[0.5]"
  >
    <slot>
      <span>{{ text }}</span>
    </slot>
  </div>
</template>
