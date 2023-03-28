// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import Fragment from "vue-fragment";

Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  Vuetify,
  el: "#app",
  components: { App },
  template: "<App/>"
});
