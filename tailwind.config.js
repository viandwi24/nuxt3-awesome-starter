const MyTheme = {
  colors: {
    green: {
      50: '#f6fbf9',
      100: '#ecf8f3',
      200: '#d0ede0',
      300: '#b3e3cd',
      400: '#7bcda8',
      500: '#42b883',
      600: '#3ba676',
      700: '#328a62',
      800: '#286e4f',
      900: '#205a40',
    },
  },
}

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
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: MyTheme.colors.green[500],
        green: MyTheme.colors.green,
      },
    },
  },
  plugins: [],
}
