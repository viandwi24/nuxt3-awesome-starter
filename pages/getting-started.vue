<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.getting-started.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.getting-started.description'),
    },
  ],
}))
</script>

<template>
  <PageContentRenderer
    path="/page/getting-started"
    :page-title="$t('pages.getting-started.title')"
  />
</template>
