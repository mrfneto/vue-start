<script setup>
import { computed } from 'vue'
import * as icons from 'lucide-vue-next'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: { type: String, default: 'md' }
})

const icon = computed(() => icons[props.name])
</script>

<template>
  <component :is="icon" />
</template>
