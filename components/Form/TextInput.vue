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
const slots = useSlots()

// state:styles
const defaultStyle = `
  outline-none 
  transition-color duration-300 
  bg-transparent border border-gray-900/10 dark:border-gray-50/[0.2] 
  dark:focus:border-white focus:border-gray-900
`
const sizeStyles = reactive<{
  [key: string]: string
}>({
  lg: 'h-12 px-4 text-lg',
  md: 'h-10 px-4 text-base',
  sm: 'h-8 px-4 text-sm',
  xs: 'h-7 px-4 text-xs',
})
const wrapperSizeStyles = reactive<{
  [key: string]: string
}>({
  lg: 'rounded-lg',
  md: 'rounded-lg',
  sm: 'rounded-lg',
  xs: 'rounded-lg',
})

// state
const modelValue = useSyncProps<string>(props, 'modelValue', emit)
const selectedSize = computed(() => sizeStyles[props.size] || sizeStyles.md)
const inputRondedStyle = computed(() =>
  slots.prefix ? 'rounded-r' : 'rounded'
)

// methods
const onInput = () => emit('update:modelValue', modelValue.value)
</script>

<template>
  <div :class="`flex relative overflow-hidden ${wrapperSizeStyles}`">
    <div
      v-if="slots.prefix"
      :class="`px-4 py-2 rounded-l ${defaultStyle} ${selectedSize} bg-gray-100 dark:bg-slate-800 text-gray-500`"
    >
      <slot name="prefix" />
    </div>
    <input
      v-model="modelValue"
      type="text"
      :class="`flex-1 block w-full ${inputRondedStyle} ${defaultStyle} ${selectedSize}`"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>
