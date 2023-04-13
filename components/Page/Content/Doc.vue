<script setup>
const props = defineProps({
  emptyTip: {
    type: String,
    required: false,
    default: 'This page is empty',
  },
})
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <PageHeader>
        <PageTitle :text="doc.title" />
      </PageHeader>
      <PageBody>
        <PageSection>
          <ContentRenderer :value="doc" />
        </PageSection>
      </PageBody>
    </template>
    <template #empty>
      <h1>{{ emptyTip }}</h1>
    </template>
    <template #not-found>
      <Error :code="404" wrap />
    </template>
  </ContentDoc>
</template>
