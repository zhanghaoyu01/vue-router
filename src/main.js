import Vue from 'vue'
import App from './App.vue';
import router from './router';
import axios from 'axios';
import {
    Button,
    TabPane,
    Tabs
} from 'element-ui';

import './router/global-config';

Vue.prototype.$https = axios;
// Vue.use( ElementUI )
Vue.use(Button);
Vue.use(TabPane);
Vue.use(Tabs);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router //在根实例中注入路由
}).$mount('#app');