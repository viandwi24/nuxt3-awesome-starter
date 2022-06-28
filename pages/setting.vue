<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

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

// state
const username = ref('viandwi24')

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
    <PageSection>
      <Alert
        type="success"
        title="This is a page for testing purposes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </PageSection>
    <PageHeader>
      <PageTitle :text="$t('pages.setting.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection class="flex space-x-4">
        <Card>
          <CardContent>
            <CardTitle
              class="capitalize"
              :text="$t('pages.setting.sections.validate_username.title')"
            />
            <p class="mb-2">
              {{ $t('pages.setting.sections.validate_username.description') }}
            </p>
            <div>
              <FormTextInput v-model="username">
                <template #prefix>
                  <span>https://github.com/</span>
                </template>
              </FormTextInput>
            </div>
          </CardContent>
          <CardFooter class="justify-between">
            <p>
              {{ $t('pages.setting.sections.validate_username.footer') }}
              <Anchor
                class="underline font-bold capitalize"
                :text="
                  $t('pages.setting.sections.validate_username.footer_link')
                "
                href="https://docs.github.com/en/rest/users/users#get-a-user"
              />
            </p>
            <Button
              class="capitalize"
              size="sm"
              type="opposite"
              :text="
                $t('pages.setting.sections.validate_username.footer_button')
              "
              @click="validate"
            />
          </CardFooter>
        </Card>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>
