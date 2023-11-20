<template>
  <base-card class="m-auto max-w-xl">
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="phone" class="form-label">Phone number</label>
      <input class="form-input" type="phone" id="phone" v-model="phoneInput">
    </div>
    <div class="form-control">
      <label for="email" class="form-label">Email</label>
      <input class="form-input" type="email" id="email" v-model="emailInput">
    </div>
    <div class="form-control">
      <label for="password" class="form-label">Password</label>
      <input class="form-input" type="password" id="password" v-model="passwordInput">
    </div>
    <div class="form-control">
      <label for="passwordConfirm" class="form-label">Confirm Your Password</label>
      <input class="form-input" type="password" id="passwordConfirm" v-model="passwordConfirmInput">
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
  
  const validateForm = () => {
    const phoneRegExp = /^[+]?[0-9]([-|\s]?[0-9]{3}){2}([-|\s]?[0-9]{2}){2}$/;
    const isPhoneValid = phoneRegExp.test(phoneInput.value)

    console.log('is phone', phoneInput.value, 'valid?', isPhoneValid);

    const emailRegExp = /^\w[-\w\.]*?@[a-zA-Z-\d]+\.[a-zA-Z-]{2,10}$/
    const isEmailValid = emailRegExp.test(emailInput.value);
    console.log('is email', emailInput.value, 'valid?', isEmailValid);
  }
  const submitForm = () => {
    validateForm()
    console.log('phoneInput', phoneInput.value);
    console.log('email', emailInput.value);
    console.log('pass', passwordInput.value);
    console.log('pass confirmed', passwordConfirmInput.value);
  }

</script>

<style scoped>

  .form-input {
    @apply block w-full border-transparent rounded-md border-gray-200 border-2 mt-2 transition-all duration-200 ease-linear py-1 px-2
      focus:outline-blue-700
  }

  .form-input:-internal-autofill-selected {
    @apply bg-none
  }

  .form-control {
    @apply mb-6 text-base
  }

  .form-label {
    @apply font-medium
  }
</style>
