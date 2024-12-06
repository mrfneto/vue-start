<script setup>
import { Home, Pencil } from 'lucide-vue-next'
import { useStore } from '../stores'

const { user } = useStore()
</script>
<template>
  <div class="container">
    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <p class="">Olá, {{ user.name }}</p>

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
  </div>
</template>
