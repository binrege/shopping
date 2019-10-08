import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
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