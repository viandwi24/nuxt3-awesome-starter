<script lang="ts" setup>
const { awesome } = useAppConfig()
</script>

<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <div
      class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex items-center text-xs text-gray-400"
    >
      <div>
        Copyright © {{ awesome.layout.footer.year }} {{ awesome.author.name }}.
        All rights reserved. Made with ❤
      </div>
      <div>{{ awesome.name }}</div>
    </div>
  </footer>
</template>
