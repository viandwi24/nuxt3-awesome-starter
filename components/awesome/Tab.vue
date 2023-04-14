<script lang="ts" setup>
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
  <div v-show="activeTab === name" class="relative overflow-auto px-6 py-2">
    <slot />
  </div>
</template>
