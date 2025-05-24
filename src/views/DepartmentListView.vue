<script setup>
import { RouterLink } from 'vue-router'
import { useDepartments } from '../composables/useDepartments'
//
import Icon from '@/components/Icon.vue'
import Input from '@/components/Input.vue'
import Layout from '@/components/Layout.vue'

const { filter, filteredItems } = useDepartments()
</script>
<template>
  <Layout>
    <div class="flex items-center justify-between">
      <h1 class="heading-xl">Departamentos</h1>

      <RouterLink
        class="btn btn-primary md:btn-icon"
        :to="{ name: 'department-create' }"
      >
        <Icon name="Plus" class="size-5 md:mr-2" />
        <span class="hidden md:flex">Cadastrar</span>
      </RouterLink>
    </div>
    <div class="mt-8">
      <Input
        id="filter"
        placeholder="Buscar por nome ou sigla"
        v-model="filter"
        class="sm:w-60 mb-0"
      />
      <ul class="space-y-2 mt-8">
        <li
          v-for="{ id, code, name } in filteredItems"
          :key="id"
          class="w-full flex items-center gap-4 card card-hover cursor-pointer"
          @click="
            $router.push({ name: 'department-update', params: { id: id } })
          "
        >
          <div class="text-sm text-gray-500">{{ code }}</div>
          <div class="w-full font-semibold text-gray-800">{{ name }}</div>
          <Icon name="ChevronRight" class="size-5 text-gray-500" />
        </li>
      </ul>
    </div>
  </Layout>
</template>
