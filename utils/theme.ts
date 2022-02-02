export type IThemeSettingOptions = 'dark' | 'light' | 'system' | 'realtime'

export type ITheme = 'dark' | 'light'

export const availableThemes: {
  key: IThemeSettingOptions
  text: string
}[] = [
  { key: 'light', text: 'Light' },
  { key: 'dark', text: 'Dark' },
  { key: 'system', text: 'System' },
  { key: 'realtime', text: 'Realtime' },
]

export function ThemeManager() {
  // methods
  const getUserSetting = (): IThemeSettingOptions =>
    (localStorage.getItem('theme.setting') as IThemeSettingOptions) || 'system'
  const getSystemTheme = (): ITheme =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const getRealtimeTheme = (): ITheme => {
    const now = new Date()
    const hour = now.getHours()
    const isNight = hour >= 17 || hour <= 5
    return isNight ? 'dark' : 'light'
  }

  // state
  const themeSetting = useState<IThemeSettingOptions>('theme.setting', () =>
    process.client ? getUserSetting() : 'light'
  )
  const themeCurrent = useState<ITheme>('theme.current', () =>
    process.client ? getSystemTheme() : 'light'
  )

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
  const onThemeSystemChange = () => {
    if (themeSetting.value === 'system') {
      themeCurrent.value = getSystemTheme()
    }
  }
  const onRealtimeCheck = () => {
    if (themeSetting.value === 'realtime') {
      themeCurrent.value = getRealtimeTheme()
    }
  }

  // init theme
  const init = () => {
    themeSetting.value = getUserSetting()
  }

  // lifecycle
  let intervalCheckTime: NodeJS.Timer
  onBeforeMount(() => init())
  onMounted(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onThemeSystemChange)
    intervalCheckTime = setInterval(onRealtimeCheck, 1000)
  })
  onBeforeUnmount(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', onThemeSystemChange)
    if (intervalCheckTime) clearInterval(intervalCheckTime)
  })

  return {
    themeSetting,
    themeCurrent,

    getUserSetting,
    getSystemTheme,
    getRealtimeTheme,
  }
}
