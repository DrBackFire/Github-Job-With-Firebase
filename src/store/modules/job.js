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
  async getOne({ commit, getters, rootState }, id) {
    const job = getters.getById(id)
    const savedJobs = rootState.user.savedJobs.find(job => job.id === id)

    if (job) {
      commit('SET_ONE', job)
      return job
    }

    commit('SET_ONE', savedJobs)
    return savedJobs
  },

  async get({ commit, dispatch }, { location, jobTitle }) {
    try {
      const response = await api
        .getJobs(location, jobTitle)
        .then(({ data }) => {
          commit('SET_ALL', data)
          // console.table(data)
          return data
        })
      return response
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
