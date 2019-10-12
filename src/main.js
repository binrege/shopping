import Vue from 'vue'
import App from './App.vue'
import './mock'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import dayjs from 'dayjs'
import axios from 'axios'
import { Dialog } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import './mock';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Tag);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Vant);
Vue.use(Dialog);
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$axios = axios; //将axios挂载在整个vue上，Vue是整个根实例，然后若想发送ajax请求，只需要this.$axios.路径


// Vue.use(Popup);
import VueLazyload from 'vue-lazyload'

Vue.prototype.$dayjs = dayjs;
Vue.config.productionTip = false;
Vue.use(Swipe).use(SwipeItem);
Vue.use(VueLazyload)
    // or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})
Vue.config.productionTip = false
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/logo.png'),
    loading: require('./assets/szrp.jpg'),
    attempt: 1
})
new Vue({
    router,
    store,
    Subscribe,
    Commodity,
    Settlement,
    render: h => h(App)
}).$mount('#app')