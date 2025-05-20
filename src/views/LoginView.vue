<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login, verifyErrorCode } from '@/services/auth'
import { useToast } from '@/composables/useToast'
//
import Icon from '@/components/Icon.vue'
import Input from '@/components/Input.vue'
import Submit from '@/components/Submit.vue'

const toast = useToast()

const router = useRouter()

const form = ref({ email: '', password: '' })
const loading = ref(false)
const message = ref(null)

const onSubmit = async () => {
  loading.value = true
  message.value = null
  try {
    const { email, password } = form.value
    await login(email, password)
    router.replace({ name: 'home' })
  } catch (error) {
    console.log(error)
    toast.error('Error', verifyErrorCode(error))
    message.value = 'E-mail ou senha inválida'
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white md:bg-gray-50"
  >
    <div
      class="w-full max-w-md mx-auto p-6 md:border bg-white md:border-gray-300 md:rounded-md md:shadow-sm"
    >
      <div class="text-center">
        <h1 class="heading-lg">Entre na sua Conta</h1>
        <p class="body-sm muted mt-2">Digite seu email e senha para entrar</p>
      </div>

      <form @submit.prevent="onSubmit" class="mt-8">
        <Input
          id="email"
          type="email"
          v-model="form.email"
          required
          autofocus
          autocomplete="off"
          label="E-mail"
          :error="message"
        />
        <Input
          id="password"
          type="password"
          v-model="form.password"
          required
          autocomplete="off"
          label="Senha"
        />

        <p class="body-sm float-right">
          <RouterLink
            to="#"
            class="font-medium text-gray-600 hover:text-gray-700 hover:underline"
            >Esqueceu a senha?</RouterLink
          >
        </p>

        <Submit class="btn-primary w-full mt-4" :loading="loading">
          Entrar
        </Submit>
      </form>

      <div class="mt-6 text-center space-y-4">
        <p class="body-sm">
          Não tem um conta?
          <RouterLink
            to="#"
            class="font-medium text-gray-600 hover:text-gray-700 underline"
          >
            Cadastre-se
          </RouterLink>
        </p>
        <RouterLink :to="{ name: 'home' }" class="btn space-x-2">
          <Icon name="MoveLeft" class="w-5 h-5 muted" />
          <span class="muted">Voltar para Home</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
