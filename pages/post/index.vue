<script lang="ts" setup>
// compiler micro
definePageMeta({ layout: 'page' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Posts" class="capitalize" />
    </LayoutPageHeader>
    <ContentList v-slot="{ list }" path="/post">
      <LayoutPageSection v-for="article in list" :key="article._path">
        <div
          class="hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <div class="mt-1 text-slate-600 dark:text-gray-400 text-right">
            <div>{{ article.date }}</div>
            <AwesomeLink
              class="text-sm flex items-center justify-end space-x-1"
              :href="`https://www.github.com/${article.author}`"
            >
              <Icon name="mdi:github-face" class="text-xs" />
              <span>{{ article.author }}</span>
            </AwesomeLink>
          </div>
          <div class="flex flex-col">
            <div class="text-xl font-semibold text-slate-800 dark:text-gray-50">
              {{ article.title }}
            </div>
            <div class="text-slate-700 dark:text-gray-300 mb-1">
              {{ article.description }}
            </div>
            <div class="flex">
              <AwesomeLink
                class="text-sm flex space-x-1 items-center text-primary-500"
                :to="article._path"
              >
                <span>learn more</span>
                <Icon name="ic:baseline-arrow-right-alt" class="text-sm" />
              </AwesomeLink>
            </div>
          </div>
        </div>
      </LayoutPageSection>
    </ContentList>
  </LayoutPageWrapper>
</template>
