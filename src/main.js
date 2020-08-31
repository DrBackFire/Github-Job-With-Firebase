import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import vuetify from '@/plugins/vuetify'
import 'nprogress/nprogress.css'
import { firestorePlugin } from 'vuefire'
import { firebaseAuth } from './services/firebase'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import titleMixin from '@/mixins/titleMixin'

Vue.mixin(titleMixin)
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})
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
