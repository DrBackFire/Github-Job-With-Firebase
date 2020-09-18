export const namespaced = true

export const state = {
  showNotification: false,
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

    state.showNotification = true
  },

  DELETE(state, notificationToRemove) {
    state.showNotification = false
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
