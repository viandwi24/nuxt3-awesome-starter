export const useSticky = (el: HTMLElement, offset: number) => {
  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > offset) {
      el.classList.add('sticky')
    } else {
      el.classList.remove('sticky')
    }
  }

  // lifecycle hooks
  window.addEventListener('scroll', onScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    onScroll,
  }
}
