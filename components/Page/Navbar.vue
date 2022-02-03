<template>
  <BuilderNavbar>
    <template #menu>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav
          class="text-sm leading-6 font-semibold text-gray-600 dark:text-gray-300"
          role="navigation"
        >
          <ul class="flex items-center space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : ''"
                class="hover:no-underline hover:text-slate-900 hover:dark:text-white"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="font-extrabold"
                :href="item.href ? item.href : false"
              />
            </li>
          </ul>
        </nav>
        <div
          class="flex space-x-4 border-l ml-6 pl-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav class="leading-6 font-semibold text-gray-600 dark:text-gray-300">
            <ul class="flex flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="flex w-full"
                :class="{
                  'pb-2 mb-2 border-b border-gray-900/10 dark:border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : ''"
                  class="flex-1 hover:no-underline"
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="flex-1 font-extrabold"
                  :href="item.href ? item.href : false"
                />
              </li>
            </ul>
          </nav>
          <div class="mt-6 text-sm font-bold">Theme</div>
          <div class="mt-2">
            <ThemeToggle type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold">
            {{ $t('components.LanguageSwitcher.changeLanguage') }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>

<script lang="ts" setup>
export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const menus: IMenuItem[] = reactive([
  { type: 'link', text: 'Blank', route: { name: 'blank' } },
  { type: 'link', text: 'Test', route: { name: 'test' } },
  { type: 'link', text: 'About', route: { name: 'about' } },
  { type: 'link', text: 'Dashboard', route: { name: 'dashboard' } },
  { type: 'button', text: 'Github', href: 'https://github.com/viandwi24' },
])
</script>
