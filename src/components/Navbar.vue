<script setup>
import { ref } from 'vue'
//
import Icon from './Icon.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 w-full bg-white shadow z-50">
    <div class="container-lg flex justify-between items-center h-[4rem]">
      <a href="#">
        <img
          class="w-auto h-6 sm:h-7"
          src="https://merakiui.com/images/full-logo.svg"
          alt="Logo"
        />
      </a>

      <!-- Menu links -->
      <div
        :class="[
          'fixed top-[4rem] left-0 h-[calc(100vh-4rem)] w-64 bg-white shadow-lg z-40 p-6 flex flex-col gap-4 transition-transform duration-300 ease-in-out  md:static md:top-0 md:left-0 md:h-auto md:w-auto md:shadow-none md:flex-row md:items-center md:p-0',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        ]"
      >
        <RouterLink
          class="btn btn-navlink"
          :to="{ name: 'home' }"
          :class="route.name === 'home' ? 'active' : ''"
          >Home</RouterLink
        >
        <RouterLink class="btn btn-navlink" to="#">Shop</RouterLink>
        <RouterLink class="btn btn-navlink" to="#">Contact</RouterLink>
        <RouterLink class="btn btn-navlink" to="#">About</RouterLink>
        <div class="flex-1 md:hidden"></div>
        <RouterLink
          class="btn btn-secondary btn-navlink w-full"
          :to="{ name: 'login' }"
        >
          Login
        </RouterLink>
      </div>

      <!-- Mobile button -->
      <div class="flex md:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="btn btn-icon"
          aria-label="toggle menu"
        >
          <Icon :name="isOpen ? 'X' : 'Menu'" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Overlay mobile -->
    <div
      v-if="isOpen"
      class="fixed top-[4rem] inset-0 bg-black/5 bg-opacity-50 transition-opacity duration-300 ease-in-out z-30 md:hidden cursor-pointer"
      @click="isOpen = false"
    ></div>
  </nav>
</template>
