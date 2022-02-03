<template>
  <div>
    <Html :class="`${theme === 'dark' ? 'dark' : ''}`" :lang="locale">
      <Body
        class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
      />
    </Html>
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app'
import { ITheme } from './utils/theme'
AppSetup()
const theme = useState<ITheme>('theme.current')
const locale = useState<string>('locale.setting')
</script>
