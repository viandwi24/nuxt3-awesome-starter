export default defineNuxtPlugin((nuxtApp) => {
  // when page redirect on mobile device, close drawer navbar
  nuxtApp.hook('page:start', (page) => {
    const showDrawer = useState<boolean>('page.navbar.showDrawer', () => false)
    showDrawer.value = false
  })
})