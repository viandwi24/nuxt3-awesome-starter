export enum Size {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}

export type ScreenSize =
  | typeof Size.SMALL
  | typeof Size.MEDIUM
  | typeof Size.LARGE
  | typeof Size.EXTRA_LARGE

export const defaultScreenConfig = {
  [Size.SMALL]: 576,
  [Size.MEDIUM]: 768,
  [Size.LARGE]: 992,
  [Size.EXTRA_LARGE]: 1200,
}

export const useScreen = () => {
  const screenSize = reactive({
    width: 0,
    height: 0,
  })

  const current = ref<ScreenSize>(Size.SMALL)

  const getSize = (width?: number) => {
    if (width === undefined) width = screenSize.width
    const {
      [Size.SMALL]: sm,
      [Size.MEDIUM]: md,
      [Size.LARGE]: lg,
      [Size.EXTRA_LARGE]: xl,
    } = defaultScreenConfig
    if (width < Number(sm)) return Size.SMALL
    if (width < Number(md)) return Size.MEDIUM
    if (width < Number(lg)) return Size.LARGE
    if (width < Number(xl)) return Size.EXTRA_LARGE
    return Size.EXTRA_LARGE
  }

  const onWindowResize = () => {
    const { innerWidth, innerHeight } = window
    screenSize.width = innerWidth
    screenSize.height = innerHeight
    current.value = getSize()
  }

  const higherThan = (size: ScreenSize) => {
    const {
      [Size.SMALL]: sm,
      [Size.MEDIUM]: md,
      [Size.LARGE]: lg,
      [Size.EXTRA_LARGE]: xl,
    } = defaultScreenConfig
    const width = screenSize.width
    if (size === Size.SMALL) return width >= Number(sm)
    if (size === Size.MEDIUM) return width >= Number(md)
    if (size === Size.LARGE) return width >= Number(lg)
    if (size === Size.EXTRA_LARGE) return width >= Number(xl)
    return false
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    window.addEventListener('resize', onWindowResize)
    getSize(window.innerWidth)
  })

  onUnmounted(() => {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', onWindowResize)
  })

  return {
    getSize,
    screenSize,
    current,
    higherThan,
  }
}
