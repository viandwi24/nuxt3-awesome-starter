# Nuxt 3 Awesome Starter
a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3.

## Features
- [x] 💨 [Tailwind CSS v3](https://tailwindcss.com/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔 [Icon Pack Component (unplugin-icons)](https://icones.js.org/)
- [x] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 🌙 Switch Theme (light, dark, system, realtime)
- [x] 🪝 Built-in Component & Layout
- [ ] Localization
- [ ] Lint & Prettier

.             |  .
:-------------------------:|:-------------------------:
![Preview](https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview.png?raw=true) | ![Preview On Mobile](https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview_mobile.png?raw=true)

## Demo
[Demo](https://nuxt3-awesome-starter.vercel.app/)


> **WARNING** \
> Nuxt 3 is still in beta and is not recommended for production use.

## Built-in Components
- [x] Footer
- [x] Button
- [x] Anchor (link)
- [x] Navbar
  - [x] Navbar Builder
  - [x] Drawer (on mobile)
  - [x] Options (on mobile)
- [x] Action Sheet
- [x] Theme Toggle / Switcher
- [x] Page Layout
  - [x] Wrapper
  - [x] Header
    - [x] Title
  - [x] Body
    - [x] Section
- [x] Dashboard Layout
    - [x] Sidebar
- [ ] Modal
- [ ] Alert

## Notes
### Styles
Tailwindcss import in :
```
/path/to/assets/sass/vendor.scss
```
and you can add custom styles in :
```
/path/to/assets/sass/app.scss
```
### Theme (Dark Mode)
ThemeManager is a plugin that allows you to switch between themes. this lib in :
```
/path/to/utils/theme.ts
```
`Thememanager` is a function-class construct when app.vue before mounted. theme construct inside `AppSetup()` in `/path/to/app.vue` :
```vue
<!-- /path/to/app.vue -->
<script lang="ts" setup>
import { AppSetup } from '~/utils/app';
// app setup
AppSetup()
</script>
```
To change theme, you can direct set theme from state `theme.setting`, example :
```vue
<script lang="ts" setup>
import { IThemeSettingOptions } from '~/utils/theme'
const themeSetting = useState<IThemeSettingOptions>('theme.setting')
themeSetting.value = 'dark'
</script>
```
When you change state `theme.setting`, it will automatically change theme.

Theme Setting have 4 options :
- `light`
- `dark`
- `system` (operating system theme)
- `realtime` (realtime theme, if 05:00 - 17:00, it will change to light theme, otherwise dark)
### Icons
This project using unplugin-icons for auto generate and import icon as component.

You can see collection icon list in : [https://icones.js.org/](https://icones.js.org/)

you can use `<prefix-collection:icon />` or `<PrefixCollection:Icon />`.

in this project, configuration prefix as a "icon", you can see in `nuxt.config.ts` :
```js
export default defineNuxtConfig({
    ...

    vite: {
        plugins: [
            ViteComponents({
                dts: true,
                resolvers: [
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
            }),
        ],
    },

    ...
})
```

Example :
```vue
// use icon from collection "Simple Icons" and name icon is "nuxtdotjs"
<IconSimpleIcons:nuxtdotjs />

// use icon from collection "Unicons" and name icon is "sun"
<IconUil:sun />
```


## Quick Start
* Clone this project to your computer `git clone https://github.com/viandwi24/nuxt3-awesome-starter`
* Install dependencies `npm install`
* Run `npm run dev` to start development server and open `http://localhost:3000` in your browser
* Run `npm run build` to build project and `npm run start` to start production server

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## License
This project is licensed under the MIT license, Copyright (c) 2022 Alfian Dwi Nugraha. For more information see the [LICENSE](LICENSE.md) file.