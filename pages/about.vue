<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.about.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.about.description'),
    },
  ],
}))
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.about.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <Tabs>
          <Tab name="git" title="git">
            <div class="p-4">
              <div class="text-2xl">test 1</div>
            </div>
          </Tab>
          <Tab name="npx" title="npx">
            <div class="p-4">
              <div class="text-2xl">test 2</div>
            </div>
          </Tab>
        </Tabs>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
