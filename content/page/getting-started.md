## Create a new project
:::div{class="mb-4"}
  ::tabs
    :::tab{name="git" title="Git"}
      ```bash
      $ git clone https://github.com/viandwi24/nuxt3-awesome-starter
      ```
    :::
  ::
:::

## Development
:::div{class="mb-4"}
  ::tabs
    :::tab{name="pnpm" title="pnpm"}
      ```bash
      # install dependencies
      $ pnpm install --shamefully-hoist

      # serve
      $ pnpm dev
      ```
    :::
  ::
:::

## Build
:::div{class="mb-4"}
  ::tabs
    :::tab{name="pnpm" title="pnpm"}
      ```bash
      # build
      $ pnpm build

      # serve
      $ pnpm start
      ```
    :::
  ::
:::

## Build as Static Site
:::div{class="mb-4"}
  ::tabs
    :::tab{name="pnpm" title="pnpm"}
      ```bash
      # generate static files
      $ pnpm generate

      # serve
      $ pnpm preview

      # or serve with "serve"
      $ npx serve ./dist/
      ```
    :::
  ::
:::