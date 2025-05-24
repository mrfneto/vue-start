<script setup>
const model = defineModel()

const props = defineProps({
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
  label: String,
  hint: String,
  error: String,
  required: Boolean
})
</script>
<template>
  <div class="form-group" :class="$attrs.class">
    <label v-if="label" :for="id" class="form-label">
      {{ label }} <span class="text-red-400" v-if="required">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      ref="input"
      v-bind="{ ...$attrs, class: null }"
      class="form-input"
      :class="{ error: error }"
      v-model="model"
      :required="required"
    />
    <div v-if="hint" class="form-hint">{{ hint }}</div>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>
