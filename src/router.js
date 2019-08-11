import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    },
    {
      path: '/add-dog',
      name: 'addDog',
      component: () => import(/* webpackChunkName: "dashboard" */ './components/addDog.vue')
    },
    {
      path: '/show-dogs',
      name: 'showDogs',
      component: () => import(/* webpackChunkName: "dashboard" */ './components/showDogs.vue')
    },
    {
      path: '/show-bookings',
      name: 'showBookings',
      component: () => import(/* webpackChunkName: "dashboard" */ './components/showBookings.vue')
    },
    {
      path: '/add-service',
      name: 'addService',
      component: () => import(/* webpackChunkName: "dashboard" */ './components/addService.vue')
    }
  ]
})
