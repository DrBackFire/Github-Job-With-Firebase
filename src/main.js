import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'nprogress/nprogress.css'
import { firestorePlugin } from 'vuefire'
import { firebaseAuth } from './services/firebase'

Vue.use(firestorePlugin)

Vue.config.productionTip = false

// This ensures Firebase initializes before loading the app when a user refreshes a page.
let app
firebaseAuth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
