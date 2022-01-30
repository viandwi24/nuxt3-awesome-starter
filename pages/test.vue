<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="TESTING" />
    </PageHeader>
    <PageBody>
      <PageSection>
        <PageSectionTitle text="Counter" />
        <div class="flex items-center space-x-4">
          <div>Counter : {{ counter.count }}</div>
          <Button text="Increment" type="secondary" size="sm" @click.prevent="counter.increment" />
          <Button text="Increment 2x" type="secondary" size="sm" @click.prevent="counter.increment2x" />
          <Button text="Decrement" type="secondary" size="sm" @click.prevent="counter.decrement" />
          <Button text="Reset" type="secondary" size="sm" @click.prevent="counter.reset" />
        </div>
      </PageSection>
      <PageSection>
        <PageSectionTitle text="Identity" />
        <div>Full Name : {{ identity.fullName }}</div>
        <div class="">
          <div class="flex space-x-2">
            <FormTextInput size="sm" v-model:value="identity.firstName" />
            <FormTextInput size="sm" v-model:value="identity.lastName" />
            <Button text="Reset" type="secondary" size="sm" @click.prevent="identity.reset" />
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { useCounter } from "~/store/counter"
import { useIdentity } from "~/store/identity";

const counter = useCounter()
const identity = useIdentity()

definePageMeta({
  layout: 'page',
})
</script>