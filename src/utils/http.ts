import axios from 'axios'

const BASE_URL = 'http://geek.itheima.net/v1_0'

const httpInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})

// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { httpInstance }
