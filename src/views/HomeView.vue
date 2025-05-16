<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import Icon from '@/components/Icon.vue'

const router = useRouter()
const sidebarShow = ref(false)

const logout = () => {
  router.replace({ name: 'login' })
}
</script>
<template>
  <div class="min-h-screen flex">
    <Sidebar permanent :show="sidebarShow" @close="sidebarShow = false">
      <template #header>
        <span class="heading-md">Previsão de Turma - FF</span>
      </template>
      <template #content>
        <h2 class="heading-lg">Sidebar</h2>
      </template>
      <template #footer>
        <div class="border-t border-gray-200 pt-2">
          <button @click="logout" class="btn btn-secondary btn-menu w-full">
            <Icon name="LogOut" class="size-4 mr-2" />
            <span>Sair</span>
          </button>
        </div>
      </template>
    </Sidebar>
    <main
      class="w-full flex flex-col ml-0 lg:ml-80 transition-all transform duration-200"
    >
      <Navbar bordered class="shadow-md lg:shadow-none">
        <template #start>
          <button class="btn btn-icon lg:hidden" @click="sidebarShow = true">
            <Icon name="Menu" class="size-5" />
          </button>
          <h1 class="heading-lg">Home</h1>
        </template>
      </Navbar>
      <section class="flex-1 p-4">
        <h1 class="heading-xl">Home page</h1>
      </section>
    </main>
  </div>
</template>
