import { ThemeManager } from "./theme"

export interface IApp {
  name: string
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'Nuxt 3 Awesome Starter'
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  return {
    app,
    themeManager,
  }
}