<template>
  <div class="flex-1 max-w-8xl w-full mx-auto h-full relative lg:px-8 px-4 py-4">
    <section>
      <div class="text-3xl font-bold mb-4">
        COUNTER TEST
      </div>
      <div>
        <div>Counter : {{ counter.count }}</div>
        <Button text="Increment" type="secondary" size="sm" @click.prevent="counter.increment" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { useCounter } from "~~/store/counter"

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