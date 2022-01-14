export type IThemeSettingOptions = 'dark' | 'light' | 'system' | 'realtime'

export type ITheme = 'dark' | 'light'

export function ThemeManager() {
  // methods
  const getUserSetting = (): IThemeSettingOptions => (localStorage.getItem('theme.setting') as IThemeSettingOptions) || 'system'
  const getSystemTheme = (): ITheme => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const getRealtimeTheme = (): ITheme => {
    const now = new Date()
    const hour = now.getHours()
    const isNight = hour >= 22 || hour <= 6
    return isNight ? 'dark' : 'light'
  }

  // state
  const themeSetting = useState<IThemeSettingOptions>('theme.setting', () => getUserSetting())
  const themeCurrent = useState<ITheme>('theme.current', () => getSystemTheme())

  // wathcers
  watch(themeSetting, (themeSetting) => {
    localStorage.setItem('theme.setting', themeSetting)
    if (themeSetting === 'realtime') {
      themeCurrent.value = getRealtimeTheme()
    } else if (themeSetting === 'system') {
      themeCurrent.value = getSystemTheme()
    } else {
      themeCurrent.value = themeSetting
    }
  })

  // init theme
  const init = () => {
    themeSetting.value = getUserSetting()
  }

  // inject html
  const bodyClasses = ['antialiased', 'text-gray-800', 'dark:text-gray-200', 'bg-white', 'dark:bg-gray-900']
  const applyLayout = () => document.body.classList.add(...bodyClasses)
  const destroyLayout = () => document.body.classList.remove(...bodyClasses)

  // lifecycle
  // onBeforeMount(() => init())
  onMounted(() => {
    init()
    applyLayout()
  })
  onBeforeUnmount(() => destroyLayout())

  return {
    themeSetting,
    themeCurrent,

    getUserSetting,
    getSystemTheme,
    getRealtimeTheme,
  }
}