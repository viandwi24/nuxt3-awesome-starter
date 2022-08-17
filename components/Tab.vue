<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
const activeTab = inject<string>('activeTab')
</script>

<template>
  <div v-show="activeTab === name">
    <slot></slot>
  </div>
</template>
