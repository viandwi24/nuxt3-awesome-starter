<template>
  <input
    type="text"
    @input="onInput"
    v-model="value"
    :class="`${defaultStyle} ${selectedSize}`"
    :placeholder="placeholder"
  >
</template>

<script lang="ts" setup>
// compiler macro
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md'
  },
})
const emit = defineEmits(['update:value'])

// state:styles
const defaultStyle = `
  block w-full border outline-none 
  transition-color duration-300 
  bg-transparent border-gray-900/10 focus:border-gray-90
  dark:border-gray-50/[0.2] dark:focus:border-gray-400
`
const sizeStyles = reactive({
  lg: "h-12 px-8 text-lg rounded-lg",
  md: "h-10 px-6 text-base rounded",
  sm: "h-8 px-4 text-sm rounded",
  xs: "h-7 px-4 text-xs rounded",
})

// state
const value = useSyncProps<string>(props, 'value', emit)
const selectedSize = computed(() => sizeStyles[props.size] || sizeStyles.md)

// methods
const onInput = () => emit('update:value', value.value)
</script>