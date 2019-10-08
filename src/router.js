import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/CouPon.vue'

import Home from './views/Home.vue'
import Shopping from './views/Shopping'
import Address from './views/Address'
import Addaddress from './views/Addaddress'



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
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: () => import('./views/SearchList.vue')
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
          path: '/input',
          name: 'input',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './views/Input.vue')
      },
      {
          path: '/register',
          name: 'register',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './views/Register.vue')
      },
    {
        path: '/personal',
        name: 'personal',
        component: () =>
            import ('./views/personal/Personal.vue')
    },
    {
        path: '/order',
        name: 'order',
        component: () =>
            import ('./views/personal/Order.vue')
    },
    {
        path: '/classify',
        name: 'classify',
        component: () =>
            import ('./views/classify/Classify.vue')
    }
      ,
      {
          path: '/CouPon',
          name: 'CouPon',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './views/CouPon.vue')
      },
      {
          path: '/RightUse',
          name: 'RightUse',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './views/RightUse.vue')
      },
      {
          path: '/Guesslike',
          name: 'Guesslike',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './components/Guess/Guesslike.vue')
      },
      {
          path: '/Model',
          name: 'Model',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './components/Guess/Model.vue')
      },
      {
          path: '/Voucher',
          name: 'Voucher',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ './views/Voucher.vue')
      },

    {
        path: '/shopping',
        name: 'shopping',
        component: () =>
            import ( /* webpackChunkName: "about" */ './views/Shopping.vue')
    },
    {
        path: '/address',
        name: 'address',
        component: () =>
            import ( /* webpackChunkName: "about" */ './views/Address.vue')
    },
    {
        path: '/Addaddress',
        name: 'Addaddress',
        component: () =>
            import ( /* webpackChunkName: "about" */ './views/Addaddress.vue')
    }
  ]
})
