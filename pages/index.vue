<template>
  <div class="flex-1 flex max-w-8xl mx-auto h-full justify-center items-center pb-20 relative">
    <div class="background-overlay">
      <div class="absolute top-0 left-0 translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"></div>
      <div class="absolute hidden md:block top-0 left-0 translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"></div>
      <div class="absolute hidden md:block bottom-0 right-0 -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"></div>
      <div class="absolute bottom-0 right-0 triangle-shape"></div>
    </div>
    <div class="flex flex-col z-10">
      <div class="text-center">
        <span
          v-for="item in ['nuxt3', 'awesome', 'starter']"
          class="linear-wipe-text drop-shadow-xl text-5xl lg:text-9xl block font-bold uppercase"
          :key="item"
        >
          {{ item }}
        </span>
      </div>
      <div class="flex space-x-4 justify-center mt-10">
        <Button size="lg" text="Github" class="font-extrabold" href="https://github.com/viandwi24" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  layout: 'page'
})
</script>

<style lang="scss">
.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>