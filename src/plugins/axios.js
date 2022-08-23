import axios from 'axios'
import { useUserStore } from '@/stores/user'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})
// axios 攔截請求 --> API SERVER --> axios 攔截回應 --> 呼叫的地方
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.authorization = `Bearer ${user.token}`
  return config
})
