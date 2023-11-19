<template>
  <button class="base-button">
    <slot/>
  </button>
</template>

<style scoped>
  .base-button {
    @apply border-purple-950 border-2 px-8 py-2 bg-purple-100 rounded-md
  }
</style>
