<template>
  <SectionContainer class="pt-10">
    <BaseCard class="text-center">
      Hello! You might want to start with
      <router-link to="/auth" class="text-blue-700">Sign in</router-link> page.
    </BaseCard>
  </SectionContainer>
</template>

<script setup>
import SectionContainer from '../components/SectionContainer.vue'
</script>
