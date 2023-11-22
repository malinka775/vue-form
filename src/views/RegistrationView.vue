<template>
  <base-card class="m-auto max-w-xl">
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="phone" class="form-label">Phone number</label>
      <base-input type="phone" id="phone" v-model="inputs.phone"/>
      <p class="form-error">{{ errors.phone }}</p>
    </div>
    <div class="form-control">
      <label for="email" class="form-label">Email</label>
      <base-input type="email" id="email" v-model="inputs.email"/>
      <p class="form-error">{{ errors.email }}</p>
    </div>
    <div class="form-control">
      <label for="password" class="form-label">Password</label>
      <PasswordInput id="password" v-model="inputs.password"/>
      <p class="form-error">{{ errors.password }}</p>
    </div>
    <div class="form-control">
      <label for="passwordConfirm" class="form-label">Confirm Your Password</label>
      <PasswordInput id="passwordConfirm" v-model="inputs.passwordConfirmed"/>
      <p class="form-error">{{ errors.passwordConfirmed }}</p>
    </div>
    <base-button class="mt-16 ml-auto block">Confirm</base-button>
  </form>
</base-card>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue';
  import PasswordInput from '../components/PasswordInput.vue';
  import { useUserStore } from '../stores/user';

  const store = useUserStore();

  const inputs = reactive({
    phone: '',
    email: '',
    password: '',
    passwordConfirmed: '',
  });
  const errors = reactive({
    phone: null,
    email: null,
    password: null,
    passwordConfirmed: null,
  });
  const wasConfirmPushed = ref(false);
  
  const validateForm = () => {
    clearErrors()
    const phoneRegExp = /^[+]?[0-9]([-|\s]?[0-9]{3}){2}([-|\s]?[0-9]{2}){2}$/;
    const isPhoneValid = phoneRegExp.test(inputs.phone)
    console.log('is phone', inputs.phone, 'valid?', isPhoneValid);

    const emailRegExp = /^\w[-\w\.]*?@[a-zA-Z-\d]+\.[a-zA-Z-]{2,10}$/
    const isEmailValid = emailRegExp.test(inputs.email);
    console.log('is email', inputs.email, 'valid?', isEmailValid);

    if(!isPhoneValid) {
      errors.phone = 'Please enter a valid phone number!';
    }

    if(!isEmailValid) {
      errors.email = 'Please enter a valid email.';
    }

    if(inputs.password.length < 8) {
      errors.password = 'Your password should be at least 8 characters long.'
    }

    if(inputs.password !== inputs.passwordConfirmed) {
      errors.passwordConfirmed = 'Input does not match your password.'
    }

    for(let key in inputs) {
      if(inputs[key].length === 0) {
        errors[key] = 'This field can not be empty.'
      }
    }
  }
  const submitForm = async () => {
    wasConfirmPushed.value = true;
    validateForm();

    console.log(inputs);
    let isValid = true;
    for(let key in errors) {
      if (errors[key] !== null) {
        isValid = false
      }
    }
    if (!isValid) {
      return;
    }
    
    await store.registerUser({
      email: inputs.email,
      phone: inputs.phone,
      password: inputs.password,
      repassword: inputs.passwordConfirmed,
    })
    console.log('request is sent!');
    clearForm();
  }

  const clearErrors = () => {
    for(let key in errors) {
      errors[key] = null;
    }
  }

  const clearForm = () => {
    for(let key in inputs) {
      inputs[key] = '';
    }
    wasConfirmPushed.value = false;
  }
  
  watch(inputs, () => {
    wasConfirmPushed.value && validateForm()
  })
</script>

<style scoped>

  .form-control {
    @apply mb-6 text-base
  }

  .form-label {
    @apply font-medium
  }

  .form-error {
    @apply text-red-500 text-sm
  }
</style>
