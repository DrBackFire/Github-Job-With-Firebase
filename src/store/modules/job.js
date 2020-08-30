import api from '@/services/api.js'
// import { savedJobsCollection } from '@/services/firebase'

export const namespaced = true

export const state = {
  jobs: [],
  job: {}
}

export const getters = {
  getById: state => id => {
    return state.jobs.find(job => job.id === id)
  }
}

export const mutations = {
  SET_ALL: (state, jobs) => {
    state.jobs = jobs
  },
  SET_TOTAL(state, totalJobs) {
    state.totalJobs = totalJobs
  },
  SET_ONE(state, job) {
    state.job = job
  }
}

export const actions = {
  async getOne({ commit, getters, dispatch }, { id, location, jobTitle }) {
    let job = getters.getById(id)

    if (job) {
      commit('SET_ONE', job)
      return job
    }

    await dispatch('get', { location, jobTitle })

    job = getters.getById(id)

    commit('SET_ONE', job)
    return job
  },

  async get({ commit, dispatch }, { location, jobTitle }) {
    try {
      const { data } = await api.getJobs(location, jobTitle)

      commit('SET_ALL', data)

      return data
    } catch (err) {
      dispatch(
        'notification/add',
        {
          type: 'error',
          massage: `There was a problem getting jobs: ${err.massage}`
        },
        { root: true }
      )
    }
  }
}
