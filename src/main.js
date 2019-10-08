import Vue from 'vue'
import App from './App.vue'
import './mock'
import router from './router'
import store from './store'

import './mock'
import Vant from 'vant';
import 'vant/lib/index.css';

import Subscribe from './components/shopping trolley/SubmitBar'
import Commodity from './components/shopping trolley/Commodity'
import Settlement from './components/shopping trolley/Settlement'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



Vue.use(Vant);


import axios from './http';
import dayjs from 'dayjs';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Tabbar, TabbarItem } from 'vant';
import { Icon } from 'vant';
import { Search } from 'vant';
import { Tag } from 'vant';
import { Dialog } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import './mock'


Vue.use(DropdownMenu).use(DropdownItem);

Vue.use(Tag);
Vue.use(Search);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Vant);
Vue.use(Dialog);
Vue.prototype.$axios=axios;//将axios挂载在整个vue上，Vue是整个根实例，然后若想发送ajax请求，只需要this.$axios.路径
Vue.prototype.$dayjs=dayjs;
Vue.config.productionTip = false;

import Vant from 'vant';
import 'vant/lib/index.css';
import VueLazyload from 'vue-lazyload'
Vue.use(Vant);


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