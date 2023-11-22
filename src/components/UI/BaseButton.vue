<template>
  <button class="base-button">
    <slot/>
  </button>
</template>

<style scoped>
  .base-button {
    @apply border-blue-700 border-2 px-8 py-2 text-base text-blue-700 rounded-md transition-colors duration-200 ease-linear font-medium select-none
      hover:bg-blue-700 hover:text-white
  }
</style>
