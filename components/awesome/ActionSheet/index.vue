<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'close', event: MouseEvent): void
}>()
const props = defineProps({
  closeButton: {
    type: Boolean,
    default: true,
  },
  closeButtonText: {
    type: String,
    default: 'Cancel',
  },
})

const isShow = ref(false)

const close = (e: MouseEvent) => {
  isShow.value = false
  setTimeout(() => emit('close', e), 300)
}

const onCloseComponentClick = (e: MouseEvent) => {
  const acceptedClasses = ['action-sheet', 'action-sheet-container']
  const target = e.target as HTMLElement
  const targetClassList = target.classList
  for (const acceptedClass of acceptedClasses) {
    if (targetClassList.contains(acceptedClass)) {
      close(e)
      break
    }
  }
}

onMounted(() => {
  isShow.value = true
})
</script>

<template>
  <Teleport to="body">
    <HeadlessTransitionRoot
      :show="isShow"
      class="action-sheet fixed z-50 top-0 left-0 w-screen h-screen max-h-screen max-w-full flex flex-col justify-end bg-black/[0.5]"
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
      @click="onCloseComponentClick"
    >
      <div class="flex flex-col overflow-hidden relative">
        <div
          class="action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4"
        >
          <slot />
          <AwesomeActionSheetGroup v-if="closeButton">
            <AwesomeActionSheetItemButton
              class="text-red-500 font-bold"
              :text="closeButtonText"
              @click="close"
            />
          </AwesomeActionSheetGroup>
        </div>
      </div>
    </HeadlessTransitionRoot>
  </Teleport>
</template>
