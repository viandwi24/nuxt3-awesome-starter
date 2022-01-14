# Nuxt 3 Awesome Starter
a Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3.

> **WARNING** \
> Nuxt 3 is still in beta and is not recommended for production use.


![Preview](https://github.com/viandwi24/nuxt3-awesome-starter/blob/main/assets/images/preview.png?raw=true)

## Demo
[Demo](https://nuxt3-awesome-starter.vercel.app/)

## Features
- [x] 💨  [Tailwind CSS v3](https://tailwindcss.com/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔  [Icon Pack Component (unplugin-icons)](https://icones.js.org/)
- [ ] [Vue Store (Pinia)](https://pinia.vuejs.org/)
- [x] 🌙  Switch Theme (light, dark, system, realtime)
- [x] 🪝 Built-in Component UI
- [ ] Localization
- [ ] Lint & Prettier

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
### Icons How to use
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


## Nuxt 3 Development Notes
### Setup
Make sure to install the dependencies

```bash
# npm
npm install

# yarn
yarn install
```

### Development

Start the development server on http://localhost:3000

```bash
# npm
npm run dev

# yarn
yarn dev
```

### Production

Build the application for production:

```bash
# npm
npm run build && npm run start

# yarn
yarn build && yarn start
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).