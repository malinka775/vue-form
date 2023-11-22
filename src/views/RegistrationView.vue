<template>
  <base-card class="m-auto max-w-xl">
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="phone" class="form-label">Phone number</label>
      <base-input type="phone" id="phone" v-model="inputs.phone"/>
      <p>{{ errors.phone }}</p>
    </div>
    <div class="form-control">
      <label for="email" class="form-label">Email</label>
      <base-input type="email" id="email" v-model="inputs.email"/>
      <p>{{ errors.email }}</p>
    </div>
    <div class="form-control">
      <label for="password" class="form-label">Password</label>
      <PasswordInput id="password" v-model="inputs.password"/>
      <p>{{ errors.password }}</p>
    </div>
    <div class="form-control">
      <label for="passwordConfirm" class="form-label">Confirm Your Password</label>
      <PasswordInput id="passwordConfirm" v-model="inputs.passwordConfirmed"/>
      <p>{{ errors.passwordConfirmed }}</p>
    </div>
    <base-button class="mt-16 ml-auto block">Confirm</base-button>
  </form>
</base-card>
</template>

<script setup>
  import { reactive } from 'vue';
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
      errors.email = 'Please enter a valid email';
    }

    if(inputs.password !== inputs.passwordConfirmed) {
      errors.passwordConfirmed = 'Input does not match your password'
    }

    for(let key in inputs) {
      if(inputs[key].length === 0) {
        errors[key] = `This field can not be empty`
      }
    }
  }
  const submitForm = async () => {
    validateForm();
    console.log(inputs);
    console.log('useUserStore', store);
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
  }
</script>

<style scoped>

  .form-control {
    @apply mb-6 text-base
  }

  .form-label {
    @apply font-medium
  }
</style>
