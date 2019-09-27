import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Shopping from './views/Shopping'
import Address from './views/Address'
import Addaddress from './views/Addaddress'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
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