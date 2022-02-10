<template>
  <PageWrapper class="flex justify-center items-center">
    <div class="background-overlay">
      <div
        class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"
      ></div>
      <div
        class="absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
      ></div>
      <div
        class="absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"
      ></div>
      <div class="absolute bottom-0 right-0 triangle-shape"></div>
    </div>
    <div class="flex flex-col z-10">
      <h1 class="text-center">
        <span
          v-for="(item, i) in $t('pages.index.title').split(',')"
          :key="i"
          class="linear-wipe-text drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-bold uppercase"
        >
          {{ item }}
        </span>
      </h1>
      <div class="flex space-x-4 justify-center mt-10">
        <Button
          size="lg"
          text="Nuxt 3"
          class="font-extrabold"
          href="https://v3.nuxtjs.org"
        />
        <Button
          size="lg"
          text="Github"
          type="secondary"
          class="font-extrabold"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        />
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'page',
})
</script>

<style lang="scss">
.linear-wipe-text {
  $color1: theme('colors.blue.500');
  $color2: theme('colors.purple.500');
  background: linear-gradient(
    to right,
    $color1 20%,
    $color2 40%,
    $color2 60%,
    $color1 80%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 20s ease infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}
</style>
