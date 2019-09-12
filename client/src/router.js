import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Login from './views/login.vue'
// @ts-ignore
import distributor from './views/distributor'
//@ts-ignore
import doctor from './views/doctor'
//@ts-ignore
import hospital from './views/hospital'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/distributor',
      name: 'distributor',
      component: distributor
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: doctor
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: hospital
    }

  ]
})
