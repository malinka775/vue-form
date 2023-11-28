<template>
  <div class="relative">
    <base-input
      :type="isVisible ? 'text' : 'password'"
      :id="id"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
    <div class="password-icons" @click="toggleIsVisible">
      <Transition mode="out-in">
        <EyeIcon v-if="!isVisible" class="password-icon" />
        <EyeSlashIcon v-else class="password-icon" />
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

import { EyeIcon } from '@heroicons/vue/24/solid'
import { EyeSlashIcon } from '@heroicons/vue/24/solid'

defineProps({
  modelValue: String,
  id: String
})
defineEmits(['update:modelValue'])

const isVisible = ref(false)

const toggleIsVisible = () => {
  isVisible.value = !isVisible.value
  console.log('isVisible.value is', isVisible.value)
}
</script>

<style scoped>
.password-icons {
  @apply absolute right-2 top-1/2 translate-y-[-50%] cursor-pointer;
}

.password-icon {
  @apply h-6 w-6 text-gray-300;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>
