<script setup>
import Icon from './Icon.vue'

defineProps({
  loading: Boolean
})
</script>
<template>
  <button type="submit" class="btn" :disabled="loading">
    <Icon name="Loader2" v-if="loading" class="w-5 h-5 mr-2 animate-spin" />
    <slot />
  </button>
</template>
