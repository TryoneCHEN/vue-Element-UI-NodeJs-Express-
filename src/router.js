import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/articles/index'
    },
    {
      path: '/articles/index',
      name: 'create-index',
      component: () => import(/* webpackChunkName: "about" */ './views/ListArtice.vue')
    },
    {
      path: '/articles/create',
      name: 'create-artice',
      component: () => import(/* webpackChunkName: "about" */ './views/CreateArtice.vue')
    }
    
  ]
})
