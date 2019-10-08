import Vue from 'vue'
import Router from 'vue-router'


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
  ]
})




