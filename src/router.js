import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/posts/index'
    },
    {
      path: '/posts/index',
      name: 'create-index',
      component: () => import(/* webpackChunkName: "about" */ './views/ListArtice.vue')
    },
    {
      path: '/posts/create',
      name: 'create-artice',
      component: () => import(/* webpackChunkName: "about" */ './views/CreateArtice.vue')
    }
    
  ]
})
