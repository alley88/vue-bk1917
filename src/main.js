import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch";
import store from "./store"
//import "@common/components";
import "@common/filter"
import AlleyUI from "./lib"

Vue.use(VueTouch,{name:"v-touch"})
Vue.use(AlleyUI);
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
