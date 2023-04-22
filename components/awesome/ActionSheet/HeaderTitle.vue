<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="text-xs font-bold text-center text-slate-400">
    <slot>
      <span>{{ text }}</span>
    </slot>
  </div>
</template>
