import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  REMOVE_TOKEN(state) {
    state.token = null
    removeToken()
  }
}

const actions = {
  async login(context, data) {
    const result = await login(data) // 拿到 token
    context.commit('SET_TOKEN', result) // 缓存 token
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
