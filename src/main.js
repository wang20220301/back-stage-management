import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/index"
import router from "./router/index"
import ElementUI from 'element-ui';
// import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
