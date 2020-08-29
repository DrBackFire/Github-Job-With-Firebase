import Vue from 'vue'
import VueRouter from 'vue-router'
import JobList from '@/views/JobList.vue'
import JobShow from '@/views/JobShow.vue'
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue'
import NProgress from 'nprogress'
import store from '@/store'
import { firebaseAuth } from '@/services/firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },

  {
    path: '/jobList',
    name: 'job-List',
    component: JobList,
    props: true
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/jobs/:id',
    name: 'job-Show',
    component: JobShow,
    props: true,
    beforeEnter(to, from, next) {
      store.dispatch('job/getOne', to.params.id).then(job => {
        to.params.job = job // Setting the props to what the api returned, to display data
        next()
      })
    }
  },

  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      // protecting route
      requireGust: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      // protecting route
      requireGust: true
    }
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      // protecting route
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  // : [...{ path: '*', component: NotFoundComponent }]
})

router.beforeEach((to, from, next) => {
  NProgress.start()

  // checking if route has the requiresAuth meta property set to true and the user is not logged in
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth)

  // checking if route has the requiresGust meta property set to true and the user is logged in
  const requireGust = to.matched.some(route => route.meta.requireGust)

  if (requiresAuth && !firebaseAuth.currentUser) {
    next('/login')
  } else if (requireGust && firebaseAuth.currentUser) {
    next('/dashboard')
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
