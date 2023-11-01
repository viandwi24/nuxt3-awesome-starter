<script lang="ts" setup>
const { awesome } = useAppConfig()
const { parseMenuRoute, parseMenuTitle } = useNavbarParser()

const props = defineProps({
  withAlert: {
    type: Boolean,
    default: true,
  },
})
const showAlert = ref(
  awesome?.layout?.welcome?.disableInfoReplaceIndexInWelcomePage
    ? !awesome?.layout?.welcome?.disableInfoReplaceIndexInWelcomePage
    : props.withAlert,
)

const titlesText = computed<string[]>(() =>
  (
    awesome?.layout?.welcome?.title ||
    awesome?.name ||
    'Nuxt&nbsp;3 Awesome Starter'
  )
    .replaceAll('&nbsp;', '[space]')
    .split(' ')
    .map((item) => item.replaceAll('[space]', ' ')),
)
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

onMounted(() => {
  try {
    console.log('aweawe', parseMenuTitle('aweawe'), this)
  } catch (error) {
    console.log('aweawe error', error)
  }
})
</script>

<template>
  <LayoutPageWrapper class="flex-1 flex">
    <LayoutPageSection class="flex-1 flex">
      <div class="flex-1 flex flex-col items-center justify-center">
        <h1 class="text-center mt-4">
          <span
            v-for="(item, i) in leadingsText"
            :key="i"
            :style="`--content: '${item.text}'; --start-color: ${
              item.startColor
            }; --end-color: ${item.endColor}; --animation-name: anim-fg-${
              i + 1
            }`"
            class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
          >
            <span class="animated-text-fg">{{ item.text }}</span>
          </span>
        </h1>
        <div class="px-4 mt-6 text-center max-w-[500px] md:max-w-[600px]">
          {{
            awesome?.description ||
            'a starter template for Nuxt 3 with minimalist themes design, built in components, drawer & menus, and more.'
          }}
        </div>
        <div
          v-if="showAlert"
          class="mt-4 w-auto text-center text-white bg-gray-800 rounded px-4 py-1 text-sm"
        >
          create file "~/pages/index.vue" to replace this page
        </div>
        <div class="flex space-x-4 ml-2 mt-8 justify-center md:justify-start">
          <AwesomeButton
            size="lg"
            :text="
              parseMenuTitle(
                awesome?.layout?.welcome?.primaryActionButton?.title ||
                  'Nuxt 3',
              )
            "
            :to="
              parseMenuRoute(
                awesome?.layout?.welcome?.primaryActionButton?.to ||
                  'https://nuxt.com',
              )
            "
            class="font-extrabold"
          />
          <AwesomeButton
            v-if="
              parseMenuRoute(
                awesome?.layout?.welcome?.secondaryActionButton?.to ||
                  awesome?.project?.links?.github,
              )
            "
            :text="
              parseMenuTitle(
                awesome?.layout?.welcome?.secondaryActionButton?.title ||
                  'Github',
              )
            "
            :to="
              parseMenuRoute(
                awesome?.layout?.welcome?.secondaryActionButton?.to ||
                  awesome?.project?.links?.github,
              )
            "
            size="lg"
            class="font-extrabold"
            type="secondary"
          />
        </div>
      </div>
      <div class="top-0 left-0 absolute w-screen">
        <div class="absolute right-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex">
          <div
            class="flex-1 rounded-l-9xl bg-gradient-to-l from-blue-600/10"
          ></div>
        </div>
        <div class="absolute left-0 top-0 w-1/4 h-screen py-10 pt-12 z-0 flex">
          <div
            class="flex-1 rounded-r-9xl bg-gradient-to-r from-green-600/10"
          ></div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>

<style lang="scss">
:root {
  --padding: 0.05em;
}

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
  padding-left: var(--padding);
  padding-right: var(--padding);
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
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: var(--padding);
  padding-right: var(--padding);
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
</style>
