import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export function AppSetup() {
  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  // vue transition bug handle
  const messages = [
    `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
    `NotFoundError: The object can not be found here.`, // safari
  ]
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (ev) => {
      if (messages.includes(ev.message)) {
        ev.preventDefault()
        window.location.reload()
      }
    })
  }

  // return
  return {
    themeManager,
    languageManager,
  }
}
