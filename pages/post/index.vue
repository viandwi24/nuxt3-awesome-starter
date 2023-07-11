<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: 'Posts' })
// query
// const query: QueryBuilderParams = { path: '/post' }
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Posts" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <ContentList path="/post">
        <template #default="{ list }">
          <div
            v-for="article in list"
            :key="article._path"
            class="hover:no-underline p-6 flex space-x-6 rounded border border-gray-900/10 dark:border-gray-50/[0.2] mb-4"
          >
            <div class="mt-1 text-gray-600 dark:text-gray-400 text-right">
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
              <div
                class="text-xl font-semibold text-gray-800 dark:text-gray-50"
              >
                {{ article.title }}
              </div>
              <div class="text-gray-700 dark:text-gray-300 mb-1">
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
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
