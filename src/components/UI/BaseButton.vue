<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  @apply select-none rounded-md border-2 border-blue-700 px-8 py-2 text-base font-medium text-blue-700 transition-colors duration-200 ease-linear
      hover:bg-blue-700 hover:text-white;
}
</style>
