<template>
  <input
    v-model="modelValue"
    type="text"
    :class="`${defaultStyle} ${selectedSize}`"
    :placeholder="placeholder"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
// compiler macro
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
})
const emit = defineEmits(['update:modelValue'])

// state:styles
const defaultStyle = `
  block w-full border outline-none 
  transition-color duration-300 
  bg-transparent border-gray-900/10 focus:border-gray-900
  dark:border-gray-50/[0.2] dark:focus:border-white
`
const sizeStyles = reactive({
  lg: 'h-12 px-8 text-lg rounded-lg',
  md: 'h-10 px-6 text-base rounded',
  sm: 'h-8 px-4 text-sm rounded',
  xs: 'h-7 px-4 text-xs rounded',
})

// state
const modelValue = useSyncProps<string>(props, 'modelValue', emit)
const selectedSize = computed(() => sizeStyles[props.size] || sizeStyles.md)

// methods
const onInput = () => emit('update:modelValue', modelValue.value)
</script>
