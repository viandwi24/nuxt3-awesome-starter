<script setup>
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
  queryContent(props.path).findOne()
)
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="pageTitle" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <ContentRenderer :value="data" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
