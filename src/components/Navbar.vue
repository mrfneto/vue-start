<script setup></script>
<template>
  <header class="relative w-full">
    <nav class="min-h-[4rem] flex items-center w-full relative px-4">
      <div class="justify-start w-1/2 space-x-2">
        <slot name="start" />
      </div>
      <div class="shrink-0 space-x-2">
        <slot name="center" />
      </div>
      <div class="justify-end w-1/2 space-x-2">
        <slot name="end" />
      </div>
    </nav>
  </header>
</template>
<style scoped>
:where(nav > *:not(script, style)) {
  @apply inline-flex items-center;
}
</style>
