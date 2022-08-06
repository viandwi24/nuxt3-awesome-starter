<script lang="ts" setup>
// compiler macro
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])

// funcs
const modelValue = useSyncProps<boolean>(props, 'modelValue', emit)
const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  modelValue.value = target.checked
}

// lifecycle
</script>

<template>
  <label for="switch" class="flex cursor-pointer">
    <label
      for="switch"
      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        id="switch"
        type="checkbox"
        class="switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 appearance-none cursor-pointer"
        :checked="modelValue"
        @change="onInputChange"
      />
      <label
        for="switch"
        class="switch-label block overflow-hidden h-6 rounded-full bg-gray-200 dark:bg-slate-700 cursor-pointer border border-slate-300 dark:border-slate-500"
      />
    </label>
    <slot />
  </label>
</template>

<style>
.switch-checkbox:checked {
  right: 0;
}
.switch-checkbox:checked + .switch-label {
  @apply bg-primary-500;
}
</style>
