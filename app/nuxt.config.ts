export default defineNuxtConfig({
  extends: '../',

  // pass USE_STATIC to env when use "pnpm generate" for client only rendering support in @nuxt/content
  ssr: process.env.USE_STATIC ? false : undefined,
  nitro: process.env.USE_STATIC ? { preset: 'service-worker' } : undefined,
})
