import api from '@/services/api.js'

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
  getOne({ commit, getters, dispatch }, id) {
    const job = getters.getById(id)

    if (job) {
      commit('SET_ONE', job)
      return job
    } else {
      return api
        .getJob(id)
        .then(({ data }) => {
          dispatch('geoLocation/get', data, { root: true })
          commit('SET_ONE', data)
          return data
        })
        .catch(err => {
          const notification = {
            type: 'error',
            massage: `There was a problem getting job: ${err.massage}`
          }

          dispatch('notification/add', notification, { root: true })
        })
    }
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
