<template>
  <div class="base-card">
    <slot/>
  </div>
</template>

<style scoped>
.base-card {
  @apply border-purple-950 border-2 rounded-xl p-12 max-w-2xl shadow-lg
}
</style>
