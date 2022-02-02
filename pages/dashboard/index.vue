<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="Dashboard" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem
          debitis ab dolorum tempore placeat possimus perferendis porro sit aut
          nobis quasi hic consequuntur, atque impedit nihil totam illo odit?
        </p>
      </PageSection>
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
  layout: 'dashboard',
})
</script>
