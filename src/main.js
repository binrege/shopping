import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Subscribe from './components/shopping trolley/SubmitBar'
import Commodity from './components/shopping trolley/Commodity'
import Settlement from './components/shopping trolley/Settlement'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    Subscribe,
    Commodity,
    Settlement,
    render: h => h(App)
}).$mount('#app')