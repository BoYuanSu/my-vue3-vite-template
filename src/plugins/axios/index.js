import axios from 'axios'
import configuration from '@/configuration'

const $axios = axios.create({
  baseURL: configuration('bacl'),
  timeout: 5000
})

export default $axios
