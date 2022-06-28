<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.404.title')),
}))
</script>

<template>
  <PageWrapper class="flex flex-col items-center justify-center">
    <h1 class="text-center mb-6 leading-3">
      <span class="font-bold text-8xl block">404</span>
      <span class="block italic">Page Not Found</span>
    </h1>
    <Button text="Home" to="/" size="sm" />
  </PageWrapper>
</template>
