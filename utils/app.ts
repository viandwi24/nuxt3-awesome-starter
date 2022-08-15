import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'James Ross Awesome Site',
    author: {
      name: 'James Ross',
      link: 'https://github.com/Right-Brain-Group',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  // return
  return {
    app,
    themeManager,
    languageManager,
  }
}
