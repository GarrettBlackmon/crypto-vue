import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.onReady(() => {
  if (window.innerWidth < 1000) {
    router.push('/mobile')
  } else {
      router.push('/')
  }
});