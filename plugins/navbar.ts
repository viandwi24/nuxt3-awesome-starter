export default defineNuxtPlugin((nuxtApp) => {
  // when page redirect on mobile device, close drawer navbar
  nuxtApp.hook('page:start', (page) => {
    const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
    const showOptions = useState<boolean>('navbar.showOptions', () => true)
    showDrawer.value = false
    showOptions.value = false
  })
})