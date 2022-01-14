<template>
  <div class="flex-1 max-w-8xl w-full mx-auto h-full relative lg:px-8 px-4 py-4">
    <section>
      <div class="text-3xl font-bold">
        NOTE
      </div>
      <div>
        <div v-for="i in 30" :key="i" class="text-6xl">JUST BLANK PAGE WITH TITLE</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: 'page'
})
</script>