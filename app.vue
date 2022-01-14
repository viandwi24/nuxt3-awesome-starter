<template>
  <div>
    <Html :class="`${(theme === 'dark' ? 'dark' : '')}`" />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import { AppSetup } from './utils/app';
import { ITheme } from './utils/theme';
// app setup
AppSetup()
// get state
const theme = useState<ITheme>('theme.current')
</script>