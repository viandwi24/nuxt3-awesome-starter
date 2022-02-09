<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.test.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageSectionTitle :text="$t('pages.test.counter')" class="capitalize" />
        <div
          class="flex flex-col items-center justify-items-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2"
        >
          <div>Counter : {{ counter.count }}</div>
          <Button
            class="w-full lg:w-auto capitalize"
            type="secondary"
            size="sm"
            :text="$t('pages.test.increment')"
            @click.prevent="counter.increment"
          />
          <Button
            class="w-full lg:w-auto"
            type="secondary"
            size="sm"
            :text="`${$t('pages.test.increment')} 2x`"
            @click.prevent="counter.increment2x"
          />
          <Button
            class="w-full lg:w-auto capitalize"
            type="secondary"
            size="sm"
            :text="$t('pages.test.decrement')"
            @click.prevent="counter.decrement"
          />
          <Button
            class="w-full lg:w-auto capitalize"
            type="secondary"
            size="sm"
            :text="$t('pages.test.reset')"
            @click.prevent="counter.reset"
          />
        </div>
      </PageSection>
      <PageSection>
        <PageSectionTitle
          :text="$t('pages.test.identity')"
          class="capitalize"
        />
        <div>
          <span class="capitalize">{{ $t('pages.test.full_name') }} : </span>
          <span>{{ identity.fullName }}</span>
        </div>
        <div class="">
          <div
            class="flex flex-col items-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2"
          >
            <FormTextInput v-model="identity.firstName" size="sm" />
            <FormTextInput v-model="identity.lastName" size="sm" />
            <Button
              class="w-full capitalize"
              :text="$t('pages.test.reset')"
              type="secondary"
              size="sm"
              @click.prevent="identity.reset"
            />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { useCounter } from '~/stores/counter'
import { useIdentity } from '~/stores/identity'

const counter = useCounter()
const identity = useIdentity()

definePageMeta({
  layout: 'page',
})
</script>
