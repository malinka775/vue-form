<template>
  <SectionContainer class="pt-10">
    <base-card class="m-auto max-w-xl">
      <form @submit.prevent="submitForm">
        <div class="mb-6 text-base">
          <label for="phone" class="font-medium">Phone number</label>
          <base-input type="phone" id="phone" v-model="inputs.phone" />
          <p class="text-sm text-red-500">{{ errors.phone }}</p>
        </div>
        <div class="mb-6 text-base">
          <label for="email" class="font-medium">Email</label>
          <base-input type="email" id="email" v-model="inputs.email" />
          <p class="text-sm text-red-500">{{ errors.email }}</p>
        </div>
        <div class="mb-6 text-base">
          <label for="password" class="font-medium">Password</label>
          <PasswordInput id="password" v-model="inputs.password" />
          <p class="text-sm text-red-500">{{ errors.password }}</p>
        </div>
        <div class="mb-6 text-base">
          <label for="passwordConfirm" class="font-medium">Confirm Your Password</label>
          <PasswordInput id="passwordConfirm" v-model="inputs.passwordConfirmed" />
          <p class="text-sm text-red-500">{{ errors.passwordConfirmed }}</p>
        </div>
        <base-button class="ml-auto mt-16 block">Confirm</base-button>
      </form>
    </base-card>
    <base-modal v-if="requestError" mode="error" :title="requestError" @close="clearRequestError">
      <p>We are sorry. Something went wrong while registering.</p>
      <p>Please, try again later.</p>
    </base-modal>
  </SectionContainer>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import registerUser from '../api/api.js'

import PasswordInput from '../components/PasswordInput.vue'
import SectionContainer from '../components/SectionContainer.vue'

const inputs = reactive({
  phone: '',
  email: '',
  password: '',
  passwordConfirmed: ''
})
const errors = reactive({
  phone: null,
  email: null,
  password: null,
  passwordConfirmed: null
})
const requestError = ref(null)
const wasConfirmPushed = ref(false)

const validateForm = () => {
  clearErrors()
  const phoneRegExp = /^[+]?[0-9]([-|\s]?[0-9]{3}){2}([-|\s]?[0-9]{2}){2}$/
  const isPhoneValid = phoneRegExp.test(inputs.phone)
  console.log('is phone', inputs.phone, 'valid?', isPhoneValid)

  const emailRegExp = /^\w[-\w\.]*?@[a-zA-Z-\d]+\.[a-zA-Z-]{2,10}$/
  const isEmailValid = emailRegExp.test(inputs.email)
  console.log('is email', inputs.email, 'valid?', isEmailValid)

  if (!isPhoneValid) {
    errors.phone = 'Please enter a valid phone number!'
  }

  if (!isEmailValid) {
    errors.email = 'Please enter a valid email.'
  }

  if (inputs.password.length < 8) {
    errors.password = 'Your password should be at least 8 characters long.'
  }

  if (inputs.password !== inputs.passwordConfirmed) {
    errors.passwordConfirmed = 'Input does not match your password.'
  }

  for (let key in inputs) {
    if (inputs[key].length === 0) {
      errors[key] = 'This field can not be empty.'
    }
  }
}
const submitForm = async () => {
  wasConfirmPushed.value = true
  validateForm()

  let isValid = true
  for (let key in errors) {
    if (errors[key] !== null) {
      isValid = false
    }
  }
  if (!isValid) {
    return
  }

  try {
    await registerUser({
      email: inputs.email,
      phone: inputs.phone,
      password: inputs.password,
      repassword: inputs.passwordConfirmed
    })

    clearForm()
  } catch (e) {
    //Clear just passwords
    requestError.value = e.message
    inputs.password = ''
    inputs.passwordConfirmed = ''
    wasConfirmPushed.value = false
  }
}

const clearErrors = () => {
  for (let key in errors) {
    errors[key] = null
  }
}

const clearForm = () => {
  for (let key in inputs) {
    inputs[key] = ''
  }
  wasConfirmPushed.value = false
}

const clearRequestError = () => {
  requestError.value = null
}

watch(inputs, () => {
  wasConfirmPushed.value && validateForm()
})
</script>
