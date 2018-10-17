import Vue from "vue";
import Router from "vue-router";
import DesktopApp from "./views/Desktop.vue";
import MobileApp from "./views/Mobile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Desktop",
      component: DesktopApp
    },
    {
      path: "/mobile",
      name: "Mobile",
      component: MobileApp
    }
  ]
});
