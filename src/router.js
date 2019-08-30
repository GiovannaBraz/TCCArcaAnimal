import Vue from 'vue'
import Router from 'vue-router'
import Login  from './views/Login.vue'
import Inicio  from './views/Inicio.vue'
import Menu  from './views/menu.vue'
import About  from './views/About.vue'
import Adocao  from './views/Adocao.vue'
import Servicos  from './views/Servicos.vue'
import Apadrinhamento  from './views/Apadrinhamento.vue'
import Doacao  from './views/Doacao.vue'
import Contatos  from './views/contatos.vue'
import Cartao  from './views/cartao.vue'
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
      component: Menu
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/servicos',
      name: 'serviços',
      component: Servicos 
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
      component: Contatos
    },
    {
      path: '/cartao',
      name: 'cartao',
      component: Cartao
    },
  ]
})
