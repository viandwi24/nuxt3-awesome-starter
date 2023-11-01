<script lang="ts" setup>
// import {
//   TabGroup,
//   TabList,
//   Tab as HeadlessUiTab,
//   TabPanels,
//   TabPanel,
// } from '@headlessui/vue'
// import { capitalize } from '~/utils/str'
// import { Size } from '~/composables'

// composable
const screen = useAwesomeScreen()

// compiler macro
definePageMeta({ layout: 'page' })
useHead({ title: 'Settings' })

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
      `https://api.github.com/users/${username.value}`,
    )
    if (response.status !== 200) {
      throw new Error(
        `error when fetching username : ${response.statusText} (${response.status})`,
      )
    }
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
  <LayoutPageWrapper>
    <LayoutPageSection class="mb-0">
      <AwesomeAlertBanner
        type="success"
        title="This is a page for testing purposes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        class="mb-6"
      />
    </LayoutPageSection>
    <LayoutPageHeader>
      <LayoutPageTitle text="Setting" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <div class="mb-6">
        <HeadlessTabGroup
          as="div"
          class="flex flex-col md:flex-row md:space-x-4"
          :vertical="screen.higherThan('md')"
        >
          <HeadlessTabList
            class="w-full md:w-1/6 flex md:flex-col rounded-lg mb-2"
          >
            <HeadlessTab
              v-for="(item, i) in ['General', 'Protection', 'Advanced']"
              :key="i"
              v-slot="{ selected }"
              as="template"
            >
              <button
                :class="[
                  'md:w-full text-left px-3 rounded py-2.5 text-sm leading-5 transition-all hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-white/[0.12] dark:hover:text-white',
                  selected
                    ? 'font-extrabold'
                    : 'text-gray-800 dark:text-gray-400',
                ]"
              >
                {{ item }}
              </button>
            </HeadlessTab>
          </HeadlessTabList>
          <HeadlessTabPanels class="flex-1">
            <!-- general -->
            <HeadlessTabPanel>
              <AwesomeCard class="mb-6">
                <AwesomeCardContent>
                  <AwesomeCardTitle
                    class="capitalize"
                    text="validate github profile"
                  />
                  <p class="mb-2">
                    type your github username and click the button to validate.
                  </p>
                  <div class="flex">
                    <AwesomeFormTextInput
                      v-model="username"
                      class="w-full md:w-1/3"
                    >
                      <template #prefix-disabled>
                        <span class="flex-1 px-4 py-2">github.com/</span>
                      </template>
                    </AwesomeFormTextInput>
                  </div>
                </AwesomeCardContent>
                <AwesomeCardFooter
                  class="flex flex-col space-y-2 md:space-y md:flex-row items-center md:justify-between"
                >
                  <p>
                    Learn more about
                    <AwesomeLink
                      class="underline font-bold capitalize"
                      text="github users api"
                      href="https://docs.github.com/en/rest/users/users#get-a-user"
                    />
                  </p>
                  <AwesomeButton
                    class="capitalize"
                    size="sm"
                    type="opposite"
                    text="validate"
                    @click="validate"
                  />
                </AwesomeCardFooter>
              </AwesomeCard>
              <AwesomeCard class="mb-4">
                <AwesomeCardContent>
                  <AwesomeCardTitle class="capitalize" text="bot id" />
                  <p class="mb-2">This is your bot ID.</p>
                  <div class="flex">
                    <AwesomeFormTextInput v-model="id" class="w-full md:w-1/3">
                      <template #suffix>
                        <AwesomeButton
                          type="opposite"
                          class="flex space-x-1 border-none"
                        >
                          <Icon name="ic:baseline-content-copy" />
                          <span>Copy</span>
                        </AwesomeButton>
                      </template>
                    </AwesomeFormTextInput>
                  </div>
                </AwesomeCardContent>
                <AwesomeCardFooter class="justify-between">
                  <p>Used when interacting with the bot.</p>
                </AwesomeCardFooter>
              </AwesomeCard>
            </HeadlessTabPanel>
            <!-- protection -->
            <HeadlessTabPanel>
              <AwesomeCard
                :class="{
                  'mb-4': true,
                  'border-red-500 dark:border-red-500': !enableSpamProtection,
                }"
              >
                <AwesomeCardContent>
                  <AwesomeCardTitle class="capitalize" text="spam protection" />
                  <p class="mb-2">toggle enable to remove the red border</p>
                  <div class="flex">
                    <AwesomeFormSwitch v-model="enableSpamProtection">
                      <span class="capitalize">{{
                        enableSpamProtection ? 'enabled' : 'disabled'
                      }}</span>
                    </AwesomeFormSwitch>
                  </div>
                </AwesomeCardContent>
                <AwesomeCardFooter class="justify-between">
                  <p>if enable we will secure your comments from spam</p>
                </AwesomeCardFooter>
              </AwesomeCard>
            </HeadlessTabPanel>
            <!-- advanced -->
            <HeadlessTabPanel>
              <AwesomeCard class="mb-6">
                <AwesomeCardContent>
                  <AwesomeCardTitle
                    class="capitalize"
                    text="enable advanced settings"
                  />
                  <p class="mb-2">
                    you can enable advanced settings to change the settings
                  </p>
                  <div class="flex">
                    <AwesomeFormSwitch v-model="enableAdvancedSetting">
                      <span class="capitalize">{{
                        enableAdvancedSetting ? 'enabled' : 'disabled'
                      }}</span>
                    </AwesomeFormSwitch>
                  </div>
                </AwesomeCardContent>
              </AwesomeCard>
              <AwesomeCard class="mb-6" :disabled="!enableAdvancedSetting">
                <AwesomeCardContent>
                  <AwesomeCardTitle
                    class="capitalize"
                    text="directory listing"
                  />
                  <p class="mb-2">
                    if no index file is present within a directory, the
                    directory contents will be displayed.
                  </p>
                  <div class="flex">
                    <AwesomeFormSwitch v-model="enableDirList" on>
                      <span class="capitalize">{{
                        enableDirList ? 'enabled' : 'disabled'
                      }}</span>
                    </AwesomeFormSwitch>
                  </div>
                </AwesomeCardContent>
              </AwesomeCard>
            </HeadlessTabPanel>
          </HeadlessTabPanels>
        </HeadlessTabGroup>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
