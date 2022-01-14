module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      }
    },
  },
  plugins: [],
}
