export default defineNuxtConfig({
  extends: '../',
  ssr: process.env.USE_STATIC ? false : undefined,
  nitro: process.env.USE_STATIC ? { preset: 'service-worker' } : undefined,
})
