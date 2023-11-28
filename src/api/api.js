import axios from 'axios'

const axiosConfig = {
  baseURL: 'https://backend.inmymind',
  headers: {
    'Content-Type': 'application/json'
  }
}

const axiosInstance = axios.create(axiosConfig)

async function registerUser(userData) {
  try {
    const response = await axiosInstance.post('/registration', userData)
    console.log('response is', response)
  } catch (e) {
    if (e.response) {
      console.log(e.response)
    } else {
      console.log(e.message || 'Something went wrong. Please try again later')
    }
    throw new Error(e.message)
  }
}

async function authUser(userData) {
  try {
    const response = await axiosInstance.post('/login', userData)
    console.log('response is', response)
  } catch (e) {
    if (e.response) {
      console.log(e.response)
    } else {
      console.log(e.message || 'Something went wrong. Please try again later')
    }
    throw new Error(e.message)
  }
}

export { registerUser, authUser }
