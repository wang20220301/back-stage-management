import Vue from 'vue'
import App from './App.vue'
import store from "./vuex/index"
import router from "./router/index"
import ElementUI from 'element-ui';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
