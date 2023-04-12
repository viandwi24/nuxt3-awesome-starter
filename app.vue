<script lang="ts" setup>
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
})
</script>

<template>
  <Html class="dark">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>
