<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="BLANK PAGE" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <div v-for="i in 30" :key="i" class="text-6xl">
          JUST BLANK PAGE WITH TITLE
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>
