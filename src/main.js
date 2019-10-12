import Vue from 'vue'
import App from './App.vue'
import './mock'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import dayjs from 'dayjs'
<<<<<<< HEAD
import axios from 'axios'
=======
import Subscribe from './components/shopping trolley/SubmitBar'
import Commodity from './components/shopping trolley/Commodity'
import Settlement from './components/shopping trolley/Settlement'
import VueLazyload from 'vue-lazyload'
import axios from './http';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Tag } from 'vant';
>>>>>>> 01b526021f7b334fe9ab5f9aa43e56e544fe0e58
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
<<<<<<< HEAD
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$axios = axios; //将axios挂载在整个vue上，Vue是整个根实例，然后若想发送ajax请求，只需要this.$axios.路径


// Vue.use(Popup);
// Vue.use(Notify);
import VueLazyload from 'vue-lazyload'
=======
// this.$axios.req('api/',{
//
// }).then().catch()
Vue.prototype.$axios=axios;//将axios挂载在整个vue上，Vue是整个根实例，然后若想发送ajax请求，只需要this.$axios.路径
>>>>>>> 01b526021f7b334fe9ab5f9aa43e56e544fe0e58

Vue.prototype.$dayjs=dayjs;
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