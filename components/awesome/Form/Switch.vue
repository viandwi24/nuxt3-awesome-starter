<script lang="ts" setup>
// compiler macro
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  on: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: undefined,
  },
})
const emit = defineEmits(['update:modelValue'])

// random
const randomId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15)

// state
const id = ref(props.id || randomId())
const input = ref<HTMLInputElement>()

// funcs
const checked = useSyncProps<boolean>(props, 'modelValue', emit)
const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  checked.value = target.checked
  emit('update:modelValue', target.checked)
}

// lifecycle
onMounted(() => {
  if (props.on) {
    checked.value = true
    emit('update:modelValue', true)
    if (input.value) input.value.checked = true
  }
})
</script>

<template>
  <label :for="id" class="flex cursor-pointer">
    <label
      :for="id"
      class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"
    >
      <input
        :id="id"
        ref="input"
        type="checkbox"
        class="switch-checkbox absolute block w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 appearance-none cursor-pointer"
        :checked="checked"
        @change="onInputChange"
      />
      <label
        :for="id"
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
