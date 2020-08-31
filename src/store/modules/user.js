import router from '@/router'
import * as fb from '@/services/firebase'

export const namespaced = true

export const state = {
  signInPopModal: false,
  isLoggedIn: false,
  userProfile: {},
  savedJobs: [],
  user: {}
}

export const getters = {
  savedJob: state => id => {
    return state.savedJobs.find(job => job.id === id)
  }
}

export const mutations = {
  SET_USER(state, val) {
    state.user = val
  },

  SET_USER_PROFILE(state, val) {
    state.userProfile = val
    state.isLoggedIn = true
    state.signInPopModal = false
  },

  REMOVE_USER() {
    location.reload()
  },

  SET_SAVED_JOBS_FROM_DB(state, val) {
    state.savedJobs = val
  },

  CLOSE_MODAL(state) {
    state.signInPopModal = false
  },

  OPEN_MODAL(state) {
    state.signInPopModal = true
  }
}

export const actions = {
  async register({ dispatch, commit }, form) {
    try {
      const { user } = await fb.firebaseAuth.createUserWithEmailAndPassword(
        form.email,
        form.password
      )

      // setting user to state
      commit('SET_USER', user)

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })

      // fetch user profile & set in state
      dispatch('fetchUserProfile', user)

      // change route to dashboard
      router.push('/dashboard')
    } catch (err) {
      // showing err in ui
      dispatch(
        'notification/add',
        {
          type: 'error',
          massage: err
        },
        { root: true }
      )
    }
  },

  async login({ dispatch, commit }, form) {
    try {
      // sign user in
      const { user } = await fb.firebaseAuth.signInWithEmailAndPassword(
        form.email,
        form.password
      )

      // setting user to state
      commit('SET_USER', user)

      // fetch user profile & set in state
      dispatch('fetchUserProfile', user)
    } catch (err) {
      // showing err in ui
      dispatch(
        'notification/add',
        {
          type: 'error',
          massage: err
        },
        { root: true }
      )
    }
  },

  // Signing in with Google auth
  async signInWithGoogle({ dispatch, commit }) {
    try {
      // sign in with a pop-up window, call signInWithPopup
      const { user } = await fb.firebaseAuth.signInWithPopup(fb.GoogleAuth)

      await fb.usersCollection.doc(user.uid).set({
        displayName: user.displayName
      })

      // setting user to state
      commit('SET_USER', user)

      // fetch user profile & set in state
      dispatch('fetchUserProfile', user)
    } catch (err) {
      // showing err in ui
      console.log(err)
    }
  },

  // Signing in with GitHub auth
  async signInWithGitHub({ dispatch, commit }) {
    try {
      // sign in with a pop-up window, call signInWithPopup
      const { user } = await fb.firebaseAuth.signInWithPopup(fb.GitHubAuth)

      await fb.usersCollection.doc(user.uid).set({
        displayName: user.displayName
      })

      // setting user to state
      commit('SET_USER', user)

      // fetch user profile & set in state
      dispatch('fetchUserProfile', user)
    } catch (err) {
      // showing err in ui
      console.log(err)
    }
  },

  // Signing in with Twitter auth
  async signInWithTwitter({ dispatch, commit }) {
    try {
      // sign in with a pop-up window, call signInWithPopup
      const { user } = await fb.firebaseAuth.signInWithPopup(fb.TwitterAuth)

      await fb.usersCollection.doc(user.uid).set({
        displayName: user.displayName
      })

      // setting user to state
      commit('SET_USER', user)

      // fetch user profile & set in state
      dispatch('fetchUserProfile', user)
    } catch (err) {
      // showing err in ui
      console.log(err)
    }
  },

  async fetchUserProfile({ commit, dispatch }, user) {
    try {
      // setting user to state
      commit('SET_USER', user)

      dispatch('getAllSavedJobs', user)

      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // Check if use profile exists, if not then get data from use obj
      if (!userProfile.exists) {
        commit('SET_USER_PROFILE', { displayName: user.displayName })
      } else {
        // set user profile in state
        commit('SET_USER_PROFILE', userProfile.data())
      }

      // change route to dashboard
      if (
        router.currentRoute.path === '/signin' ||
        router.currentRoute.path === '/404'
      ) {
        router.push('/dashboard')
      }
    } catch (err) {
      // showing err in ui
      dispatch(
        'notification/add',
        {
          type: 'error',
          massage: err
        },
        { root: true }
      )
    }
  },

  async savedJobs({ state, dispatch }, job) {
    try {
      const docId = `${state.user.uid}_${job.id}`

      // check if user has saved job
      const doc = await fb.savedJobsCollection.doc(docId).get()
      if (doc.exists) {
        return
      }

      const savedJob = {
        ...job,
        savedAt: new Date(),
        userId: state.user.uid
      }

      const saved = await fb.savedJobsCollection.doc(docId).set(savedJob)

      return saved
    } catch (err) {
      // showing err in ui
      dispatch(
        'notification/add',
        {
          type: 'error',
          massage: err
        },
        { root: true }
      )
    }
  },

  async removeSavedJob({ state }, job) {
    try {
      const docId = `${state.user.uid}_${job.id}`

      // check if user has saved job
      const doc = await fb.savedJobsCollection.doc(docId).get()
      if (!doc.exists) {
        return
      }

      const removed = await fb.savedJobsCollection.doc(docId).delete()

      return removed
    } catch (err) {
      console.log(err)
    }
  },

  async getAllSavedJobs({ commit }, user) {
    try {
      await fb.savedJobsCollection
        .where('userId', '==', user.uid)
        .onSnapshot(snapshot => {
          let savedArray = []

          snapshot.forEach(doc => {
            let job = doc.data()

            savedArray.push(job)
          })

          commit('SET_SAVED_JOBS_FROM_DB', savedArray)

          return savedArray
        })
    } catch (err) {
      console.log(err)
    }
  },

  async logout({ commit }) {
    await fb.firebaseAuth.signOut()

    // clear userProfile and redirect to /login
    commit('REMOVE_USER')
    router.push('/')
  },

  closeModal({ commit }) {
    commit('CLOSE_MODAL')
  },

  openModal({ commit }) {
    commit('OPEN_MODAL')
  }
}
