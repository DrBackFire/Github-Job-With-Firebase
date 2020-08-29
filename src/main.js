import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'nprogress/nprogress.css'
import { firestorePlugin } from 'vuefire'
import { firebaseAuth } from '@/services/firebase'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

// This ensures Firebase initializes before loading the app when a user refreshes a page.
firebaseAuth.onAuthStateChanged(async user => {
  if (user) await store.dispatch('user/fetchUserProfile', user)

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

  /* when a user reloads the page, all of the local state disappears
    using Firebase's built-in method onAuthStateChanged. This watches 
    the authentication state of user on page reload, sets the 
    user state, and fetches the user's profile.
  */
})
