# Nuxt 3 Awesome Starter
a Nuxt 3 starter template with a lot of useful features, integrated with TailwindCSS 3. Easy use and implemented in Nuxt Layer, you can extend this template with zero config.

> **NOTES** 
> - This Project using "pnpm" as package manager
> - still under development

## Preview
<table align="center">
  <tr>
    <td align="center" width="100%" colspan="2">
      <img src="assets/images/preview.png?raw=true" alt="Preview" title="Preview">
    </td>
  </tr>
</table>
<p align="center">
  <a href="https://nuxt3-awesome-starter-git-v2-viandwi24.vercel.app/" target="_blank">Live Demo</a>
</p>

## Features
- [x] 💨 [Tailwind CSS v3](https://tailwindcss.com/) with [Windicss](https://windicss.org/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔 [Nuxt Icon](https://icones.js.org/)
- [x] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] 🪝 Built-in Awesome Component & Layout
- [x] 🌙 [Theme Manager (Color Mode)](https://color-mode.nuxtjs.org/)
- [x] Configurable Theme (Easy to change)
  - [x] Primary Colors
  - [x] Font

## To Dos
- [x] Nuxt Awesome Modules Core
  - [x] create modules `~/modules/awesome.ts`
- [x] Adding Pinia
  - [x] auto import "defineStore" as "definePiniaStore"
  - [x] auto import folder "stores"
- [x] Eslint & Prettier
- [x] 🌙 Theme Switcher (light, dark, system)
- [ ] 🇮🇩 Language Switcher

## Getting Started
### Installation
to use Nuxt Awesome Starter you can choose one of the following options:
- using nuxt layer
- using direct clone
#### Using with Nuxt Layer (Simple Way)
nuxt 3 have a new feature called "Nuxt Layer", with this feature you can create a new project with a template that has been provided by the community. you can see on `examples/starter` to see how to use this template with nuxt layer.
this is a simple way to use this template, because you just create a new fresh nuxt 3 project and then just add `extends: 'github:viandwi24/nuxt3-awesome-starter#v2'` on your `nuxt.config.ts` file.

#### Using with Direct Clone
you can direct to clone this repository and just make change on `app/` folder as your main project folder.
- clone this repository
  ```bash
  git clone https://github.com/viandwi24/nuxt3-awesome-starter
  ```
- install dependencies
  ```bash
  pnpm install
  ```
- run development server
  ```bash
  pnpm dev
  ```
