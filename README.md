# Nuxt 3 Awesome Starter

a Nuxt 3 starter template with a lot of useful features, integrated with TailwindCSS 3. Easy use and implemented in Nuxt Layer, you can extend this template with zero config.Nuxt Awesome Starter v2 brings many changes, separating core component apps and main business logic into the `/app` folder. and also provides the option to also be integrated with the nuxt layer to make it easier to bring all of our Awesome features and components to your project.

> **NOTES**
>
> - This Project using "pnpm" as package manager
> - this is Nuxt 3 Awesome Starter V2, you can check V1 in this link
> - still under development

## Preview

<table align="center">
  <tr>
    <td align="center" width="100%" colspan="2">
      <img src="assets/images/preview.png?raw=true" alt="Preview" title="Preview">
    </td>
  </tr>
  <tr>
    <td align="center" width="75%">
      <img src="assets/images/preview_desktop.gif?raw=true" alt="Preview" title="Desktop Preview">
    </td>
    <td align="center" width="25%">
      <img src="assets/images/preview_mobile.gif?raw=true" alt="Preview" title="Mobile Preview">
    </td>
  </tr>
</table>
<p align="center">
  <br>
  <a href="https://nuxt3-awesome-starter-git-v2-viandwi24.vercel.app/" target="_blank">Live Demo</a>
  <br><br>
  <a href="https://codesandbox.io/s/github/viandwi24/nuxt3-awesome-starter" title="Open In Code Sandbox">
    <img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandboxg" alt="Open In Code Sandbox">
  </a>
  <br>
  <a href="https://stackblitz.com/github/viandwi24/nuxt3-awesome-starter" title="Open In Stackblitz">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open In Stackblitz">
  </a>
</p>

## Features

- [X] 📚 [Nuxt Layer Support](https://nuxt.com/docs/getting-started/layers#layers)
- [X] 💨 [Tailwind CSS v3](https://tailwindcss.com/) with [Windicss](https://windicss.org/)
- [X] ✨ [Headless UI](https://headlessui.dev/)
- [X] 🔔 [Nuxt Icon](https://icones.js.org/)
- [X] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [X] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [X] 🪝 Built-in Awesome Component & Layout
- [X] 🌙 [Theme Manager (Color Mode)](https://color-mode.nuxtjs.org/)
- [X] Configurable Theme (Easy to change)
  - [X] Primary Colors
  - [X] Font

## To Dos

- [X] Nuxt Layer Support
- [X] Nuxt Awesome Modules Core
  - [X] create modules `~/modules/awesome.ts`
- [X] Adding Pinia
  - [X] auto import "defineStore" as "definePiniaStore"
  - [X] auto import folder "stores"
- [X] Eslint & Prettier
- [X] 🌙 Theme Switcher (light, dark, system)
- [ ] 🇮🇩 Language Switcher
- [ ] Awesome Components
  - [X] Card
  - [X] Content (@nuxt/content bridge)
  - [X] Form
    - [X] Text Input
    - [X] Switch
  - [X] Action
    - [X] Button
    - [X] Link
  - [X] Tabs
  - [X] Pages
    - [X] Welcome
    - [X] Error
  - [X] Action Sheet
  - [X] Alert Banner
  - [ ] Modal
  - [ ] Toast

## Getting Started

### Installation

to use Nuxt Awesome Starter you can choose one of the following options:

- using nuxt layer
- using direct clone

#### Using with Nuxt Layer (Simple Way)

nuxt 3 have a new feature called "Nuxt Layer", with this feature you can create a new project with a template that has been provided by the community. you can see on `examples/starter` to see how to use this template with nuxt layer.
this is a simple way to use this template, because you just create a new fresh nuxt 3 project and then just add `extends: 'github:viandwi24/nuxt3-awesome-starter#v2'` on your `nuxt.config.ts` file.
after that, you can explorer `app.config.ts` to see what you can change on this template.

#### Using with Direct Clone

you can direct to clone this repository and just make change on `app/` folder as your main project folder.

- clone this repository
  ```bash
  git clone https://github.com/viandwi24/nuxt3-awesome-starter
  git checkout v2
  ```
- install dependencies
  ```bash
  pnpm install
  ```
- run development server
  ```bash
  pnpm dev
  ```
