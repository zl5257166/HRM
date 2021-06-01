import { login, getInfo, getUserDetail } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken(),
  userInfo: {}
}

const mutations = {
  /**
   * 设置token
   */
  SET_TOKEN(state, token) {
    state.token = token
    setToken(token)
  },
  /**
   * 移除token
   */
  REMOVE_TOKEN(state) {
    state.token = null
    removeToken()
  },
  /**
   * 设置userInfo
   */
  SET_USERINFO(state, userInfo) {
    state.userInfo = { ...userInfo }
  },
  /**
   * 删除userInfo
   */
  REMOVE_USERINFO(state) {
    state.userInfo = {}
  }
}

const actions = {
  /**
   * 登录
   */
  async login(context, data) {
    const result = await login(data) // 拿到 token
    context.commit('SET_TOKEN', result) // 缓存 token
  },
  /**
   * 获取用户资料
   */
  async getUserInfo(context) {
    const result = await getInfo()
    const detail = await getUserDetail(result.userId)
    const merge = { ...result, ...detail }
    context.commit('SET_USERINFO', merge)
    return merge
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
