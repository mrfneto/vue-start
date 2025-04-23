<script setup>
import { useStore } from '@/stores'
import Icon from '@/components/Icon.vue'

const store = useStore()
</script>
<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="flex items-center text-3xl font-bold space-x-2">
      <Icon name="Home" />
      <span>Home page</span>
    </h1>
    <p class="text-gray-700">Olá, {{ store.user?.name }}</p>
  </div>
</template>
