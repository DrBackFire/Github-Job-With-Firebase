import { getLocation } from '@/services/api.js'

export const namespaced = true

export const state = {
  address: '',
  geometry: []
}

export const mutations = {
  SET_ADDRESS(state, address) {
    state.address = address.candidates[0].formatted_address
  },
  SET_GEOMETRY(state, geometry) {
    const lat = geometry.candidates[0].geometry.location.lat
    const lng = geometry.candidates[0].geometry.location.lng
    state.geometry = state.geometry.push(...state.geometry, lat, lng)
  }
}

export const actions = {
  get({ commit }, job) {
    console.log(job)
    getLocation(job.location)
      .then(response => {
        commit('SET_ADDRESS', response.data)
        commit('SET_GEOMETRY', response.data)
        console.log(response.data)
      })
      .catch(err => console.log(err))
  }
}
