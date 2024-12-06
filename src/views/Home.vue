<script setup>
import { Home, LogOut, Pencil } from 'lucide-vue-next'
import { useStore } from '../stores'
import { RouterLink } from 'vue-router'
import Icon from '../components/Icon.vue'

const { user } = useStore()
</script>
<template>
  <div>
    <header class="navbar">
      <nav class="container navbar-nav">
        <div class="navbar-start">
          <div>
            <span class="block text-xs text-gray-500">Olá,</span>
            <p class="mb-0 -mt-1">{{ user.name }}</p>
          </div>
        </div>
        <div class="navbar-center">
          <RouterLink to="/" class="flex items-center">
            <Icon name="Code" class="size-8" />
            <h3 class="mb-0 ml-2 hidden md:block">Vue App</h3>
          </RouterLink>
        </div>
        <div class="navbar-end">
          <button class="btn btn-icon">
            <Icon name="LogOut" class="size-5" />
          </button>
        </div>
      </nav>
    </header>
    <main class="container pt-24 pb-12">
      <h1 class="">Home page!</h1>
      <h2>Components</h2>

      <div class="mt-8">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Paragraphy</p>
        <p class="muted">Paragraphy muted</p>
      </div>

      <div class="mt-8 flex items-center space-x-4">
        <button class="btn btn-link">Link</button>
        <button class="btn">Base</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-icon">
          <Home class="size-6" />
        </button>
        <button class="btn btn-icon sm">
          <Home class="size-4" />
        </button>
      </div>

      <div class="mt-8 space-y-4">
        <div>
          <label for="email" class="form-label">E-mail</label>
          <input type="email" class="form-input" />
        </div>
        <div>
          <input type="email" class="form-input error" />
          <p class="form-error">This is an error</p>
        </div>

        <select class="form-select">
          <option value="" selected>Selecione uma opção</option>
          <option value="t">True</option>
          <option value="f">False</option>
        </select>

        <textarea class="form-textarea" id=""></textarea>
      </div>

      <div class="mt-8">
        <div class="relative overflow-y-auto">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-mal</th>
                <th class="sr-only">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john@email.com</td>
                <td class="text-right">
                  <button class="btn btn-icon sm">
                    <Pencil class="size-4" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Doe</td>
                <td>jane@email.com</td>
                <td class="text-right">
                  <button class="btn btn-icon sm">
                    <Pencil class="size-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>
