import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock'
import dayjs from 'dayjs'
import axios from 'axios'
import { Dialog } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(Vant);
Vue.use(Dialog);
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$axios = axios; //将axios挂载在整个vue上，Vue是整个根实例，然后若想发送ajax请求，只需要this.$axios.路径


// Vue.use(Popup);
// Vue.use(Notify);
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')