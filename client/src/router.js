import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Login from './views/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },

  ]
})
