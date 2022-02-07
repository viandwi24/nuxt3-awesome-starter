<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="TESTING" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Counter" />
        <div
          class="flex flex-col items-center justify-items-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2"
        >
          <div>Counter : {{ counter.count }}</div>
          <Button
            class="w-full lg:w-auto"
            type="secondary"
            size="sm"
            text="Increment"
            @click.prevent="counter.increment"
          />
          <Button
            class="w-full lg:w-auto"
            type="secondary"
            size="sm"
            text="Increment 2x"
            @click.prevent="counter.increment2x"
          />
          <Button
            class="w-full lg:w-auto"
            type="secondary"
            size="sm"
            text="Decrement"
            @click.prevent="counter.decrement"
          />
          <Button
            class="w-full lg:w-auto"
            type="secondary"
            size="sm"
            text="Reset"
            @click.prevent="counter.reset"
          />
        </div>
      </PageSection>
      <PageSection>
        <PageSectionTitle text="Identity" />
        <div>Full Name : {{ identity.fullName }}</div>
        <div class="">
          <div
            class="flex flex-col items-center space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2"
          >
            <FormTextInput v-model="identity.firstName" size="sm" />
            <FormTextInput v-model="identity.lastName" size="sm" />
            <Button
              class="w-full lg:w-auto"
              text="Reset"
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
