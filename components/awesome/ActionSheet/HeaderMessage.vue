<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-xs text-center text-slate-500">
    <slot>
      <span>{{ text }}</span>
    </slot>
  </div>
</template>
