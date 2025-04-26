<script setup>
import Navbar from './components/Navbar.vue'
</script>
<template>
  <div class="">
    <Navbar />
    <main class="pt-[4rem] bg-gray-50">
      <RouterView />
    </main>
  </div>
</template>
