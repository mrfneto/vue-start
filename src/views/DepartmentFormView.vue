<script setup>
import { computed, onMounted, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { useDepartments } from '@/composables/useDepartments'
import { useToast } from '@/composables/useToast'

import Icon from '@/components/Icon.vue'
import Input from '@/components/Input.vue'
import Submit from '@/components/Submit.vue'
import Layout from '@/components/Layout.vue'

const route = useRoute()
const router = useRouter()
const toast = useToast()
const { fetch, create, update, remove } = useDepartments()

const loading = ref(false)
const form = ref({
  code: '',
  name: ''
})
const showConfirmRemove = ref(false)

const id = computed(() => route.params.id || null)

onMounted(async () => {
  if (id.value) {
    const docSnap = await fetch(id.value)
    if (docSnap.exists()) form.value = docSnap.data()
  }
})

const handleSubmit = async () => {
  loading.value = true
  try {
    id.value ? await update(id.value, form.value) : await create(form.value)
    await router.push({ name: 'departments' })
    toast.success('Sucesso', 'Registro cadastrado com sucesso!')
  } catch (error) {
    console.log(error)
    toast.error('Error', 'Ocorreu um erro ao salvar o registro!')
  } finally {
    loading.value = false
  }
}

const handleRemove = async () => {
  if (!id.value) return
  console.log('Remove')

  try {
    if (showConfirmRemove.value) {
      await remove(id.value)
      await router.push({ name: 'departments' })
      toast.success('Sucesso', 'Registro excluído com sucesso!')
    } else {
      showConfirmRemove.value = true
      setTimeout(() => {
        showConfirmRemove.value = false
      }, 5000)
    }
  } catch (error) {
    console.log(error)
    toast.error('Error', 'Ocorreu um erro ao excluir o registro!')
  }
}
</script>
<template>
  <Layout>
    <div class="flex items-center justify-between">
      <h2 class="heading-lg">
        Departamentos - {{ id ? 'Editar' : 'Cadastrar' }}
      </h2>
      <RouterLink class="btn" :to="{ name: 'departments' }">
        <Icon name="MoveLeft" class="size-5 md:mr-2" />
        <span class="hidden md:flex">Voltar</span>
      </RouterLink>
    </div>
    <section class="mt-8">
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            id="code"
            label="Sigla"
            v-model="form.code"
            required
            class="md:col-span-1"
          />
          <Input
            id="name"
            label="Nome"
            v-model="form.name"
            required
            class="md:col-span-3"
          />
        </div>
        <div class="flex items-center space-x-4 mt-6">
          <Submit class="btn-primary" :loading="loading">
            {{ id ? 'Editar' : 'Cadastrar' }}
          </Submit>
          <button
            type="button"
            v-if="id"
            class="btn text-red-600"
            tabindex="-1"
            @click="handleRemove"
          >
            {{ showConfirmRemove ? 'Confirme' : 'Excluir' }}
          </button>
        </div>
      </form>
    </section>
  </Layout>
</template>
