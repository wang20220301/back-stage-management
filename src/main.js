import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/index"
import router from "./router/index"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
// 事件主线
Vue.prototype.$bus = new Vue({});
let echarts = require("echarts")
Vue.prototype.$echarts = echarts

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
