import Vue from 'vue'
import VueRouter from 'vue-router'
import JobList from '@/views/JobList.vue'
import JobShow from '@/views/JobShow.vue'
import Register from '@/views/Register.vue'
import Search from '@/views/Search.vue'
import NProgress from 'nprogress'
import store from '@/store'

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
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('job/getOne', routeTo.params.id).then(job => {
        routeTo.params.job = job // Setting the props to what the api returned, to display data
        next()
      })
    }
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  // : [...{ path: '*', component: NotFoundComponent }]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
