<template>
  <input class="base-input" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup>
  import {defineProps, defineEmits} from 'vue';

  defineProps({
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: [String, Number]
    }
  }); 
  defineEmits(['update:modelValue'])
</script>

<style scoped>
  .base-input {
    @apply block w-full border-transparent rounded-md border-gray-200 border-2 mt-2 transition-all duration-200 ease-linear py-1 px-2
      focus:outline-blue-700
  }
</style>
