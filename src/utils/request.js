import axios from 'axios'
// 1 创建实例
const service = axios.create()

// 2 请求拦截器(主要解决token的统一注入问题)
service.interceptors.request.use()

// 3 响应拦截器（主要处理返回的数据异常和数据结构问题）
service.interceptors.response.use()

// 4 导出
export default service
