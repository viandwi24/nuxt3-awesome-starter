<script lang="ts" setup>
import {
  TabGroup,
  TabList,
  Tab as HeadlessUiTab,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'
import { capitalize } from '~/utils/str'
import { Size } from '~/composables/useScreen'

// composable
const { t } = useLang()
const screen = useScreen()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.setting.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.setting.description'),
    },
  ],
}))

// funcs
const randomToken = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let token = ''
  for (let i = 0; i < 255; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return token
}

// state
const username = ref('viandwi24')
const id = ref(randomToken())
const enableSpamProtection = ref(false)
const enableDirList = ref(false)
const enableAdvancedSetting = ref(false)

// methods
const validate = async () => {
  // fetch username from github api
  try {
    const response = await fetch(
      `https://api.github.com/users/${username.value}`
    )
    if (response.status !== 200)
      throw new Error(
        `error when fetching username : ${response.statusText} (${response.status})`
      )
    const data = (await response.json()) as {
      name: string
      id: string
    }
    alert(`Found Accout Name ${data.name} with id : ${data.id}`)
  } catch (err) {
    alert(err)
  }
}
</script>

<template>
  <PageWrapper>
    <PageSection class="mb-0">
      <Alert
        type="success"
        title="This is a page for testing purposes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        class="mb-6"
      />
    </PageSection>
    <PageHeader>
      <PageTitle :text="$t('pages.setting.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <TabGroup
          as="div"
          class="flex flex-col md:flex-row md:space-x-4"
          :vertical="screen.higherThan(Size.MEDIUM)"
        >
          <TabList class="w-full md:w-1/6 flex md:flex-col rounded-lg mb-2">
            <HeadlessUiTab v-slot="{ selected }" as="template">
              <button
                :class="[
                  'md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white',
                  selected
                    ? 'font-extrabold'
                    : 'text-slate-800 dark:text-gray-400',
                ]"
              >
                General
              </button>
            </HeadlessUiTab>
            <HeadlessUiTab v-slot="{ selected }" as="template">
              <button
                :class="[
                  'md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white',
                  selected
                    ? 'font-extrabold'
                    : 'text-slate-800 dark:text-gray-400',
                ]"
              >
                Protection
              </button>
            </HeadlessUiTab>
            <HeadlessUiTab v-slot="{ selected }" as="template">
              <button
                :class="[
                  'md:w-full text-left px-3 py-1.5 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-slate-900 dark:hover:bg-white/[0.12] dark:hover:text-white',
                  selected
                    ? 'font-extrabold'
                    : 'text-slate-800 dark:text-gray-400',
                ]"
              >
                Advanced
              </button>
            </HeadlessUiTab>
          </TabList>
          <TabPanels class="flex-1">
            <TabPanel>
              <Card class="mb-4">
                <CardContent>
                  <CardTitle
                    class="capitalize"
                    :text="$t('pages.setting.sections.validate_username.title')"
                  />
                  <p class="mb-2">
                    {{
                      $t('pages.setting.sections.validate_username.description')
                    }}
                  </p>
                  <div class="flex">
                    <FormTextInput v-model="username" class="w-full md:w-1/3">
                      <template #prefix-disabled>
                        <span class="flex-1 px-4 py-2">github.com/</span>
                      </template>
                    </FormTextInput>
                  </div>
                </CardContent>
                <CardFooter
                  class="flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between"
                >
                  <p>
                    {{ $t('pages.setting.sections.validate_username.footer') }}
                    <Anchor
                      class="underline font-bold capitalize"
                      :text="
                        $t(
                          'pages.setting.sections.validate_username.footer_link'
                        )
                      "
                      href="https://docs.github.com/en/rest/users/users#get-a-user"
                    />
                  </p>
                  <Button
                    class="capitalize"
                    size="sm"
                    type="opposite"
                    :text="
                      $t(
                        'pages.setting.sections.validate_username.footer_button'
                      )
                    "
                    @click="validate"
                  />
                </CardFooter>
              </Card>
              <Card class="mb-4">
                <CardContent>
                  <CardTitle
                    class="capitalize"
                    :text="$t('pages.setting.sections.bot_id.title')"
                  />
                  <p class="mb-2">
                    {{ $t('pages.setting.sections.bot_id.description') }}
                  </p>
                  <div class="flex">
                    <FormTextInput v-model="id" class="w-full md:w-1/3">
                      <template #suffix>
                        <Button
                          type="opposite"
                          class="flex space-x-1 border-none"
                        >
                          <icon-ic:baseline-content-copy />
                          <span>{{ $t('others.copy') }}</span>
                        </Button>
                      </template>
                    </FormTextInput>
                  </div>
                </CardContent>
                <CardFooter class="justify-between">
                  <p>
                    {{ $t('pages.setting.sections.bot_id.footer') }}
                  </p>
                </CardFooter>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card
                :class="{
                  'mb-4': true,
                  'border-red-500 dark:border-red-500': !enableSpamProtection,
                }"
              >
                <CardContent>
                  <CardTitle
                    class="capitalize"
                    :text="$t('pages.setting.sections.protection_spam.title')"
                  />
                  <p class="mb-2">
                    {{
                      $t('pages.setting.sections.protection_spam.description')
                    }}
                  </p>
                  <div class="flex">
                    <FormSwitch v-model="enableSpamProtection">
                      <span class="capitalize">{{
                        enableSpamProtection
                          ? $t('others.enabled')
                          : $t('others.disabled')
                      }}</span>
                    </FormSwitch>
                  </div>
                </CardContent>
                <CardFooter class="justify-between">
                  <p>
                    {{ $t('pages.setting.sections.protection_spam.footer') }}
                  </p>
                </CardFooter>
              </Card>
            </TabPanel>
            <TabPanel>
              <Card class="mb-4">
                <CardContent>
                  <CardTitle
                    class="capitalize"
                    :text="
                      $t(
                        'pages.setting.sections.advanced_enable_advanced.title'
                      )
                    "
                  />
                  <p class="mb-2">
                    {{
                      $t(
                        'pages.setting.sections.advanced_enable_advanced.description'
                      )
                    }}
                  </p>
                  <div class="flex">
                    <FormSwitch v-model="enableAdvancedSetting">
                      <span class="capitalize">{{
                        enableAdvancedSetting
                          ? $t('others.enabled')
                          : $t('others.disabled')
                      }}</span>
                    </FormSwitch>
                  </div>
                </CardContent>
              </Card>
              <Card class="mb-4" :disabled="!enableAdvancedSetting">
                <CardContent>
                  <CardTitle
                    class="capitalize"
                    :text="
                      $t('pages.setting.sections.advanced_dir_listing.title')
                    "
                  />
                  <p class="mb-2">
                    {{
                      $t(
                        'pages.setting.sections.advanced_dir_listing.description'
                      )
                    }}
                  </p>
                  <div class="flex">
                    <FormSwitch v-model="enableDirList" on>
                      <span class="capitalize">{{
                        enableDirList
                          ? $t('others.enabled')
                          : $t('others.disabled')
                      }}</span>
                    </FormSwitch>
                  </div>
                </CardContent>
              </Card>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
