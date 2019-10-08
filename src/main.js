import Vue from 'vue'
import App from './App.vue'
import './mock'
import router from './router'
import store from './store'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import './mock'
import Vant from 'vant';
import 'vant/lib/index.css';
=======
=======
import './mock'
import dayjs from 'dayjs'

import './mock'
import Vant from 'vant';
import 'vant/lib/index.css';

>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153
import Subscribe from './components/shopping trolley/SubmitBar'
import Commodity from './components/shopping trolley/Commodity'
import Settlement from './components/shopping trolley/Settlement'


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

<<<<<<< HEAD
>>>>>>> wuhong
=======
>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153


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
=======

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

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(Vant);
Vue.use(Dialog);
Vue.prototype.$dayjs = dayjs;


// Vue.use(Popup);
// Vue.use(Notify);
import VueLazyload from 'vue-lazyload'
<<<<<<< HEAD
>>>>>>> d710e111ff3c1f6a9d4e3d1474b8b2fa54ca9b59
Vue.use(Vant);
=======

Vue.use(VueLazyload)

// or with options
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
})
>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153


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
<<<<<<< HEAD
<<<<<<< HEAD
=======
    Subscribe,
    Commodity,
    Settlement,
>>>>>>> wuhong
=======

    Subscribe,
    Commodity,
    Settlement,

>>>>>>> bf9e32488263db49c5eee5b2c6c914c6ff205153
    render: h => h(App)
}).$mount('#app')