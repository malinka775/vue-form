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
    console.log('Sending data...')
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

export default registerUser
