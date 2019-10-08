import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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





new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')