import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
// 1 创建实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 2 请求拦截器(主要解决token的统一注入问题)
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

// 3 响应拦截器（主要处理返回的数据异常和数据结构问题）
service.interceptors.response.use((res) => {
  // axios 默认加了一层 data
  const { success, message, data } = res.data
  if (success) {
    return data
  } else {
    Message.error(message)
    return Promise.reject(new Error(message))
  }
}, (error) => {
  Message.error(error.message)
  return Promise.reject(error)
})

// 4 导出
export default service
