<template>
  <div class="flex items-center border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]">
    <Listbox v-model="themeSetting">
      <ListboxLabel class="sr-only">Theme</ListboxLabel>
      <ListboxButton type="button">
        <span class="flex justify-center items-center dark:hidden">
          <IconUil:sun />
        </span>
        <span class="justify-center items-center hidden dark:flex">
          <IconUil:moon />
        </span>
      </ListboxButton>
      <ListboxOptions class="p-1 absolute z-50 top-full right-0 bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300">
        <ListboxOption 
          v-for="theme in [
            { key: 'light', text: 'Light' },
            { key: 'dark', text: 'Dark' },
            { key: 'system', text: 'System' },
            { key: 'realtime', text: 'Realtime' },
          ]"
          :key="theme.key"
          :value="theme.key"
          :class="{ 
            'py-2 px-2 flex items-center cursor-pointer': true,
            'text-sky-500 bg-gray-50 dark:bg-gray-600/30': (themeSetting === theme.key),
          }"
        >
          <span class="text-sm mr-2">
            <IconUil:sun v-if="theme.key === 'light'" />
            <IconUil:moon v-else-if="theme.key === 'dark'" />
            <IconUil:laptop v-else-if="theme.key === 'system'" />
            <IconUil:clock v-else-if="theme.key === 'realtime'" />
          </span>
          {{ theme.text }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
  </div>
</template>

<script lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { IThemeSettingOptions, ITheme } from '~~/utils/theme'
export default defineComponent({
  components: {
    Listbox, ListboxButton, ListboxLabel, ListboxOptions, ListboxOption,
  },
  setup() {
    const app = {
      name: 'LSP APP',
      version: '4.5',
      institution: 'SMKN 1 MOJOKERTO',
    }
    const themeSetting = useState<IThemeSettingOptions>('theme.setting')
    return {
      themeSetting,
    }
  }
})
</script>