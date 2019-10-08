import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Home from './views/CouPon.vue'
=======

>>>>>>> origin/yangyu
=======
=======

import Home from './views/CouPon.vue'

>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153
import Home from './views/Home.vue'
import Shopping from './views/Shopping'
import Address from './views/Address'
import Addaddress from './views/Addaddress'

<<<<<<< HEAD
>>>>>>> wuhong
=======

>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
<<<<<<< HEAD
=======
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
>>>>>>> wuhong
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/yangyu
    ]
})
=======
=======
>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153

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

<<<<<<< HEAD



>>>>>>> d710e111ff3c1f6a9d4e3d1474b8b2fa54ca9b59
=======
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
>>>>>>> wuhong
=======
>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153
