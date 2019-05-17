import Vue from 'vue'
import Router from 'vue-router'
import Login  from './views/Login.vue'
import Inicio  from './views/Inicio.vue'
import menu  from './views/menu.vue'
import About  from './views/About.vue'
import servicos  from './views/servicos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
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
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/serviços',
      name: 'serviços',
      component: servicos 
    },
    {
      path: '/Adocao',
      name: 'Adoção',
      component: Adocao
    },
    {
      path: '/Apadrinhamento',
      name: 'Apadrinhamento',
      component: Apadrinhamento
    },
    {
      path: '/Doacao',
      name: 'Doação',
      component: Doacao
    },
    {
      path: '/contatos',
      name: 'contatos',
      component: contatos
    },
  ]
})
