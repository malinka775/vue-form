<template>
  <input
    class="base-input"
    :type="type"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'text'
  },
  modelValue: {
    type: [String, Number]
  }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.base-input {
  @apply mt-2 block w-full rounded-md border-2 border-gray-200 border-transparent px-2 py-1 transition-all duration-200 ease-linear
      focus:outline-blue-700;
}
</style>
