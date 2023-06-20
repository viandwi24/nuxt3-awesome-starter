<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Blank Page" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Section Title" />
      <div>My Content</div>
    </LayoutPageSection>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Another Section" />
      <div>My Content</div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
