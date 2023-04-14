<script lang="ts" setup>
// components
const PageWrapper = resolveComponent('LayoutPageWrapper')

// compiler macro
const props = defineProps({
  code: {
    type: Number,
    default: 400,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
})

// computed
const errorsMap: {
  [key: string]: string
} = {
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
}
const error = computed(() => {
  const { code } = props
  return {
    code,
    message: errorsMap[code.toString()] || 'Unknown Error',
  }
})
</script>

<template>
  <component
    :is="props.wrap ? PageWrapper : 'div'"
    :class="props.wrap ? 'flex flex-col items-center justify-center' : ''"
  >
    <h1 class="text-center mb-6 leading-3">
      <span class="font-bold text-8xl block">{{ error.code }}</span>
      <span class="block italic">{{ error.message }}</span>
    </h1>
    <AwesomeButton text="Home" to="/" size="sm" />
  </component>
</template>
