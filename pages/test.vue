<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle text="COUNTER TEST" />
    </PageHeader>
    <PageBody>
      <PageSection class="flex items-center space-x-4">
        <div>Counter : {{ counter.count }}</div>
        <Button text="Increment" type="secondary" size="sm" @click.prevent="counter.increment" />
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<script lang="ts">
import { useCounter } from "~/store/counter"

export default defineComponent({
  layout: 'page',
  setup() {
    const counter = useCounter()

    return {
      counter,
    }
  }
})
</script>