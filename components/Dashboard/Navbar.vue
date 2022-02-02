<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <div class="flex items-center justify-center">
          <img
            class="w-6 h-6 rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Avatar of Jonathan Reinink"
          />
          <span class="ml-2 text-sm font-semibold">Alfian</span>
          <IconUil:angle-down />
        </div>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <div class="mt-6 text-sm font-bold">Theme</div>
          <div class="mt-2">
            <ThemeToggle type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold">
            {{ $t('components.LanguageSwitcher.changeLanguage') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
    <template #drawer>
      <slot name="drawer" />
    </template>
  </BuilderNavbar>
</template>

<script lang="ts">
export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
