import Vue from "vue";
import Router from "vue-router";
// import CouPon from './views/CouPon.vue'
import Home from "./views/Home.vue";
// import shopping from './views/Shopping'
// import address from './views/Address'
// import addaddress from './views/Addaddress'
Vue.use(Router);
export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },

        {
            path: "/index",
            name: "index",
            component: () =>
                import ("./views/Index.vue")
        },
        {
            path: "/Msg",
            name: "Msg",
            component: () =>
                import ("./views/Msg.vue")
        },
        {
            path: "/searchList",
            name: "searchList",
            component: () =>
                import ("./views/SearchList.vue")
        },
        {
            path: "/about",
            name: "about",
            component: () =>
                import ("./views/About.vue")
        },
        {
            path: "/inputs",
            name: "inputs",
            component: () =>
                import ("./views/Inputs.vue")
        },
        {
            path: "/register",
            name: "register",

            component: () =>
                import ("./views/Register.vue")
        },
        {
            path: "/personal",
            name: "personal",
            component: () =>
                import ("./views/personal/Personal.vue")
        },
        {
            path: "/order",
            name: "order",
            component: () =>
                import ("./views/personal/Order.vue")
        },
        {
            path: "/set",
            name: "set",
            component: () =>
                import ("./views/personal/Set.vue")
        },
        {
            path: "/classify",
            name: "classify",
            component: () =>
                import ("./views/classify/Classify.vue")
        },
        {
            path: "/CouPon",
            name: "CouPon",

            component: () =>
                import ("./views/CouPon.vue")
        },
        {
            path: "/RightUse",
            name: "RightUse",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/RightUse.vue")
        },
        {
            path: "/Guesslike",
            name: "Guesslike",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./components/Guess/Guesslike.vue")
        },
        {
            path: "/Model",
            name: "Model",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./components/Guess/Model.vue")
        },
        {
            path: "/Voucher",
            name: "Voucher",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Voucher.vue")
        },


        {
            path: "/details",
            name: "details",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Details.vue")
        },

        {
            path: "/shopping",
            name: "shopping",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Shopping.vue")
        },
        {
            path: "/address",
            name: "address",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Address.vue")
        },
        {
            path: "/addressx",
            name: "addressx",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Addressx.vue")
        },
        {
            path: "/addaddress",
            name: "addaddress",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Addaddress.vue")
        },
        {
            path: "/test",
            name: "test",
            component: () =>
                import ("./views/About.vue")
        },
        {
            path: "/test1",
            name: "test1",
            component: () =>
                import ("./views/About.vue")
        }, {
            path: "/details",
            name: "details",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Details.vue")
        },
        {
            path: "/detail",
            name: "detail",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Detail.vue")
        },
        {
            path: "/ma",
            name: "ma",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/Ma.vue")
        }
    ]
});