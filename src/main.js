import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Dialog } from 'vant';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Dialog);
// Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')