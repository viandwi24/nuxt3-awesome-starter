<script lang="ts" setup>
//
const counter = useCounter()
const identity = useIdentity()

// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: 'Test Page' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Testing" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <LayoutPageSectionTitle text="Stores Test" />
      <!-- store::counter -->
      <div class="mb-6">
        <div class="mb-2">Counter : {{ counter.count }}</div>
        <div
          class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"
        >
          <AwesomeButton
            class="w-full md:w-auto capitalize"
            type="secondary"
            size="sm"
            text="increment"
            @click.prevent="counter.increment"
          />
          <AwesomeButton
            class="w-full md:w-auto"
            type="secondary"
            size="sm"
            text="increment2x"
            @click.prevent="counter.increment2x"
          />
          <AwesomeButton
            class="w-full md:w-auto capitalize"
            type="secondary"
            size="sm"
            text="decrement"
            @click.prevent="counter.decrement"
          />
          <AwesomeButton
            class="w-full md:w-auto capitalize"
            type="secondary"
            size="sm"
            text="reset"
            @click.prevent="counter.reset"
          />
        </div>
      </div>
      <!-- store::identity -->
      <div class="mb-6">
        <div class="mb-2">
          <span class="capitalize">Full Name : </span>
          <span>{{ identity.fullName }}</span>
        </div>
        <div class="mb-2">
          <div
            class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"
          >
            <AwesomeFormTextInput
              v-model="identity.firstName"
              size="md"
              class="w-full md:w-1/3"
            />
            <AwesomeFormTextInput
              v-model="identity.lastName"
              size="md"
              class="w-full md:w-1/3"
            />
            <AwesomeButton
              class="capitalize w-full md:w-auto"
              text="reset"
              type="secondary"
              size="md"
              @click.prevent="identity.reset"
            />
          </div>
        </div>
      </div>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
