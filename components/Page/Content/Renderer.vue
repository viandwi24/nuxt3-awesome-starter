<script setup>
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
})

const { data } = await useAsyncData(props.path, () =>
  queryContent(props.path).findOne()
)
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.about.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <ContentRenderer :value="data" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
