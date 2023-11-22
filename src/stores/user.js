import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  const userId = ref(null);

  async function registerUser(userData) {
    try {
      console.log('Sending data...')
      const response = await axios.post('https://backend.inmymind/registration', userData);

      console.log('response is', response);
      if (!response.ok) {
        throw new Error('An error occured while sending the request');
      }
      
      // in case we get userId in response data
      // const data = await response.json();
      // userId.value = data.userId;

    } catch(e) {
      console.log(e.message || 'Something went wrong. Please try again later');
    }
  }

  return { registerUser }
})
