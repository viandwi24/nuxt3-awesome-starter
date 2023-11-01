<script lang="ts" setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  pageTitle: {
    type: String,
    default: '',
  },
})

const { data } = await useAsyncData(props.path, () =>
  queryContent(props.path).findOne(),
)
if (!data) abortNavigation('404')
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle :text="pageTitle" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <ContentRenderer :value="data as any" />
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
