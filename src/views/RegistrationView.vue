<template>
  <base-card class="m-auto">
  <form @submit.prevent="submitForm">
    <div class="form__control">
      <label for="phone">Phone number</label>
      <input class="form__input" type="phone" id="phone" v-model="phoneInput">
    </div>
    <div class="form__control">
      <label for="email">Email</label>
      <input class="form__input" type="email" id="email" v-model="emailInput">
    </div>
    <div class="form__control">
      <label for="password">Password</label>
      <input class="form__input" type="password" id="password" v-model="passwordInput">
    </div>
    <div class="form__control">
      <label for="passwordConfirm">Confirm Your Password</label>
      <input class="form__input" type="password" id="passwordConfirm" v-model="passwordConfirmInput">
    </div>
    <base-button class="mt-16 ml-auto block">Confirm</base-button>
  </form>
</base-card>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const phoneInput = ref('');
  const emailInput = ref('');
  const passwordInput = ref('');
  const passwordConfirmInput = ref('');

  const submitForm = () => {
    console.log('phoneInput', phoneInput.value);
    console.log('email', emailInput.value);
    console.log('pass', passwordInput.value);
    console.log('pass confirmed', passwordConfirmInput.value);
  }
</script>

<style scoped>

  .form__input {
    @apply block w-full border-purple-300 border-b-2 mt-4 hover:border-gray-50
  }

  .form__control {
    @apply mb-6
  }
</style>
