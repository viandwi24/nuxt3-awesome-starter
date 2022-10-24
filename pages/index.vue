<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: '#FF4D4D',
    endColor: '#F9CB28',
    delay: 4,
  },
])
const tooltip = ref(false)

// const
const cancelTooltip = () => {
  tooltip.value = false
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copy to clipboard`
}
const copyBash = () => {
  const bash = 'git clone https://github.com/viandwi24/nuxt3-awesome-starter'
  navigator.clipboard.writeText(bash)
  tooltip.value = true
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copied!!!`
}
</script>

<template>
  <PageWrapper class="flex-1 flex">
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
    <PageBody class="flex-1 flex">
      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-5/8 flex flex-col z-10">
          <h1 class="text-center md:text-left mt-4">
            <span
              v-for="(item, i) in leadingsText"
              :key="i"
              :style="`--content: '${item.text}'; --start-color: ${
                item.startColor
              }; --end-color: ${item.endColor}; --animation-name: anim-fg-${
                i + 1
              }`"
              class="animated-text-bg drop-shadow-xl text-5xl xl:text-8xl 2xl:text-9xl block font-black uppercase"
            >
              <span class="animated-text-fg">{{ item.text }}</span>
            </span>
          </h1>
          <div
            class="flex space-x-4 ml-4 mt-10 justify-center md:justify-start"
          >
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
        <div class="hidden md:flex md:w-3/8 justify-center items-end relative">
          <Gem class="absolute -top-64 -right-0" />
          <div class="ml-4 w-100 z-10 h-auto shadow">
            <div
              class="win-header bg-gray-200 dark:bg-slate-800 flex flex space-x-4 px-3 py-2 rounded-t-lg relative border-b-2 border-gray-300/75 dark:border-slate-700/75"
            >
              <div class="win-controls flex space-x-1 items-center">
                <div class="w-3 h-3 bg-red-500 rounded-full" />
                <div class="w-3 h-3 bg-green-500 rounded-full" />
                <div class="w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
              <div class="flex-1 font-bold text-center pr-12 text-sm">BASH</div>
              <div class="text-sm flex justify-center items-center">
                <div class="tooltip">
                  <button
                    class="text-gray-100 flex justify-center items-center"
                    @click="copyBash"
                    @mouseout="cancelTooltip"
                  >
                    <span class="tooltiptext">Copy to clipboard</span>
                    <icon-material-symbols:content-copy-outline />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="win-body rounded-b-lg bg-gray-200/90 dark:bg-slate-800/90 px-3 py-2 font-mono backdrop-filter backdrop-blur-lg"
            >
              <div>
                $ git clone https://github.com/viandwi24/nuxt3-awesome-starter
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }

  33.333%,
  50% {
    opacity: 1;
  }
}

@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
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

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
