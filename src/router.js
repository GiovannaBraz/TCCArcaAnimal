import Vue from 'vue'
import Router from 'vue-router'
import Login  from './views/Login.vue'
import Inicio  from './views/Inicio.vue'
import menu  from './views/menu.vue'
import Adocao  from './views/Adocao.vue'
import Apadrinhamento  from './views/Apadrinhamento.vue'
import Doacao  from './views/Doacao.vue'
import contatos  from './views/contatos.vue'
import cartao  from './views/cartao.vue'

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
    {
      path: '/cartao',
      name: 'catão',
      component: cartao
    },
  ]
})
