import Vue from 'vue'
import App from './App.vue'
import './mock'
import router from './router'
import store from './store'
<<<<<<< HEAD
import './mock'
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.use(Vant);

=======
import Vant from 'vant';
import 'vant/lib/index.css';
import VueLazyload from 'vue-lazyload'
// import { Image } from 'vant';
// import { Swipe, SwipeItem } from 'vant';
// import { Lazyload } from 'vant';
>>>>>>> origin/yangyu

// // options 为可选参数，无则不传
// Vue.use(Lazyload, options);
// Vue.use(Swipe).use(SwipeItem);
// Vue.use(Image);
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
    render: h => h(App)
}).$mount('#app')