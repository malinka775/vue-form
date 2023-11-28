<template>
  <div
    class="absolute top-0 flex h-screen w-full items-center justify-center bg-gray-900 bg-opacity-40"
    teleport="body"
  >
    <div
      class="h-fit w-full max-w-lg translate-y-[-50%] overflow-hidden rounded-xl border-2 bg-white shadow-xl"
      :class="borderClr"
    >
      <div
        class="grid grid-cols-[1fr_auto] border-b-2 border-gray-400 p-1 pl-4"
        :class="headerBgClasses"
      >
        <h3 class="flex items-center">{{ title }}</h3>
        <XCircleIcon
          class="h-10 w-10 cursor-pointer stroke-1 text-gray-400 transition"
          :class="hoverCloseBtnClass"
          @click="emit('close')"
        />
      </div>
      <div class="p-4 text-sm">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'
import { XCircleIcon } from '@heroicons/vue/24/outline'
import { MODES } from './constants'

const props = defineProps({
  title: String,
  mode: {
    type: String,
    default: 'info',
    validator(value) {
      return [MODES.ERROR, MODES.INFO, MODES.SUCCESS].includes(value)
    }
  }
})

const headerBgClasses = computed(() => {
  return {
    ['bg-green-100']: props.mode === MODES.SUCCESS,
    ['bg-red-100']: props.mode === MODES.ERROR,
    ['bg-blue-100']: props.mode === MODES.INFO
  }
})

const borderClr = computed(() => {
  return {
    ['border-green-700']: props.mode === MODES.SUCCESS,
    ['border-red-700']: props.mode === MODES.ERROR,
    ['border-blue-700']: props.mode === MODES.INFO
  }
})

const hoverCloseBtnClass = computed(() => {
  return {
    ['hover:text-green-700']: props.mode === MODES.SUCCESS,
    ['hover:text-red-700']: props.mode === MODES.ERROR,
    ['hover:text-blue-700']: props.mode === MODES.INFO
  }
})

const emit = defineEmits(['close'])
</script>
