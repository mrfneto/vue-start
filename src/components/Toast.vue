<script setup>
import { CircleCheck, Info } from 'lucide-vue-next'
import { useToast } from '@/composables/useToast'

const { messages } = useToast()
</script>

<template>
  <div class="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
    <TransitionGroup
      tag="div"
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-y-[-100%] opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-[-100%] opacity-0"
    >
      <div
        v-for="msg in messages"
        :key="msg.id"
        class="max-w-sm overflow-hidden bg-white rounded-lg shadow-md flex mb-2"
      >
        <div
          class="flex items-center justify-center w-12"
          :class="{
            'bg-green-500 text-white': msg.type === 'success',
            'bg-red-500 text-white': msg.type === 'error',
            'bg-blue-500 text-white': msg.type === 'info',
            'bg-yellow-500 text-white': msg.type === 'warning'
          }"
        >
          <CircleCheck v-if="msg.type === 'success'" class="size-6" />
          <Info
            v-if="['error', 'info', 'warning'].includes(msg.type)"
            class="size-6"
          />
        </div>
        <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
            <span class="font-semibold">{{ msg.title }}</span>
            <p class="text-sm text-gray-700">{{ msg.message }}</p>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
