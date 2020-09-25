import Vue from "vue";
import App from "./App.vue";
import storeConfig from "./store";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store(storeConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
