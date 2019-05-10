import Vue from 'vue'
import Router from 'vue-router'
import Login  from './views/Login.vue'
import Inicio  from './views/Inicio.vue'
import menu  from './views/menu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'hlogin',
      component: Login
    },
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
  ]
})
