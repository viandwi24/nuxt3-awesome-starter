<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]">
    <section class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20">
      <div class="py-4">
        <div class="mb-1">
          {{ app.name }}
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © 2022 <a href="https://github.com/viandwi24">viandwi24</a>.
          All rights reserved. Made with <span class="text-red-500">❤</span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts" setup>
import { IApp } from "~~/utils/app"
const app = useState<IApp>('app')
</script>