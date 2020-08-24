export const namespaced = true

export const state = {
  notifications: []
}

export const getters = {}

let id = Math.floor(Math.random() * 10000000)
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({
      ...notification,
      id
    })
  },

  DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    )
  }
}

export const actions = {
  add({ commit, state }, notification) {
    if (state.notifications.length) return

    commit('PUSH', notification)
  },

  remove({ commit }, notificationToRemove) {
    commit('DELETE', notificationToRemove)
  }
}
