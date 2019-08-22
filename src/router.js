import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/expences',
      params: 'id',
      name: 'Expences',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.ItemView
      component: () => import(/* webpackChunkName: "about" */ './views/Expences.vue')
    }
  ]
})
