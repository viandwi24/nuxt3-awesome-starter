<template>
  <div class="bg-slate-900 text-gray-200">
    <LayoutPageNavbar class="h-[64px] max-h-[64px]" />
    <LayoutPageContent>
      <slot />
    </LayoutPageContent>
    <LayoutPageFooter class="h-[42px]" />
  </div>
</template>
