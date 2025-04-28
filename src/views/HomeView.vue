<script setup>
import { ref } from 'vue'
import { useStore } from '@/stores'
//
import Icon from '@/components/Icon.vue'
import Input from '@/components/Input.vue'
import Submit from '@/components/Submit.vue'
import Navbar from '@/components/Navbar.vue'

const store = useStore()

const form = ref({})
const errors = ref(null)
</script>
<template>
  <div>
    <Navbar />
    <main class="pt-[4rem] bg-gray-50">
      <div class="container-lg py-8">
        <h1 class="heading-xl">
          <span>Home page</span>
        </h1>
        <p class="body">Olá, {{ store.user?.name }}</p>
        <p class="body-sm muted mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est,
          rem saepe similique deserunt dolore possimus aliquam veritatis eveniet
          aliquid quibusdam voluptatem cumque quisquam tempora, autem ipsa.
          Quaerat, harum consectetur?
        </p>

        <div class="mt-4 inline-flex items-center space-x-4">
          <button class="btn">Button</button>
          <button class="btn btn-icon">
            <Icon name="Home" />
          </button>
          <button class="btn btn-primary">Primary Button</button>
          <button class="btn btn-secondary">Secondary Button</button>
        </div>
        <div class="mt-4">
          <Input
            id="name"
            v-model="form.name"
            label="Full Name"
            hint="This is a hint"
            autofocus
          />
          <Input
            id="email"
            v-model="form.email"
            label="E-mail"
            required
            error="This is a error"
          />
          <div class="form-group">
            <label for="email" class="form-lavel">E-mail</label>
            <input type="email" id="email" class="form-input" />
            <p class="form-hint">This is an hint</p>
            <p class="form-error">This is an error</p>
          </div>

          <Submit loading class="btn-primary w-full">Submit Button</Submit>
        </div>
      </div>
    </main>
  </div>
</template>
